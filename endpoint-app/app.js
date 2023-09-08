const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

// Define a function to get the current day of the week in full.
function getCurrentDayOfWeek() {
  return moment().utc().format('dddd');
}

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name || 'Unknown';
  const track = req.query.track || 'Unknown';
  const currentDayOfWeek = getCurrentDayOfWeek();
  const currentUTCTime = moment().utc().format('HH:mm:ss');

  // Replace with your GitHub file and repository URLs.
  const githubFileURL = 'https://github.com/KhileM/HNG-Internship-stage-1/blob/main/app.js';
  const githubRepoURL = 'https://github.com/KhileM/HNG-Internship-stage-1';

  const responseData = {
    slack_name: slackName,
    current_day_of_week: currentDayOfWeek,
    current_utc_time: currentUTCTime,
    track: track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  res.json(responseData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});