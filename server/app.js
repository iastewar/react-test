const express = require('express')
const path = require("path");
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, "build")));

app.get('/test', (req, res) => {
  res.json({test: "hi"})
})

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
