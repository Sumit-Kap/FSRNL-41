const express = require("express");

const app = express();
const dbConfig = require("./dbConfig/config");
const Customers = require("./models/Customers");
dbConfig.connect();
app.use(express.json()); // middleware
// MSC - controller->Service->Model, mongodb, mongoose view - templ - handlebars, ejs

// authentication,
// order creation
// middlewares
// getData from third party services etc

app.post("/api/v1/createCustomer", (req, res) => {
  const { name, emailId, phoneNumber, address } = req.body;
  const customer = new Customers({
    name,
    email_id: emailId,
    phone_number: phoneNumber,
    address,
  });

  customer
    .save()
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(503).json({ message: "Something went wrong" });
    });
});
app.get("/api/v1/getData", (req, res, next) => {
  res.status(200).json([
    { name: "John doe", age: 22 },
    { name: "Jane smith", age: 44 },
  ]);
});

// ORM - object - collection
// Hibernate - Java spring boot
// Sequelize - Object to table
//
// HTTP methods - GET, POST, PUT, PATCH, DELETE
// app.post(())

app.listen(3000, () => {
  console.log("started listening");
});
