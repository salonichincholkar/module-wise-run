const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint to execute shell command based on Jira ID
app.get('/jira/:jiraid/:component', (req, res) => {
  const jiraId = req.params.jiraid;

  // Execute shell command
  exec(`set JIRA_ID=${jiraId} && mocha test/${req.params.component}.js`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing shell command: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }
    if (stderr) {
      console.error(`Shell command stderr: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }
    console.log(`Shell command stdout: ${stdout}`);
    // Send shell command response to client
    res.send(stdout);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
