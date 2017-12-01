const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("dist"))
app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/dist/index.html')
})
app.get("*", (req, res)=> {
  res.status(404).sendFile(__dirname + '/dist/404.html')
})
app.listen(port, e => console.log("listening on port " + port))
