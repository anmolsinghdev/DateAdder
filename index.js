const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

function dateFormatter(today) {
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  date = mm + "/" + dd + "/" + yyyy;
  return date;
}

app.get("/", (req, res) => res.send("Hello World!"));

// app.post("/date", (req, res, next) => {
//   const { name } = req.body;

//   var date = new Date();
//   var createdDate = dateFormatter(date);
//   var matureDate = new Date();
//   matureDate.setMonth(matureDate.getMonth() + 10);
//   console.log(matureDate);
//   var matureDate = dateFormatter(matureDate);

//   res.json({
//     name: name,
//     createdDate: createdDate,
//     matureDate: matureDate,
//   });
// });

//! Another Method of Change Date
app.post("/date", (req, res, next) => {
  const { name } = req.body;

  var date = new Date().toLocaleString().split(",")[0];
  var matureDate = new Date();
  matureDate.setMonth(matureDate.getMonth() + 10);
  var matureDate = matureDate.toLocaleString().split(",")[0];

  res.json({
    name: name,
    createdDate: date,
    matureDate: matureDate,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
