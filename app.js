const mongoose = require("mongoose");

//creating a new database called fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

//declare schema and create model or collection (Fruits)
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Pretty solid as a fruit",
});

//fruit.save();

////declare schema and create model or collection (People)
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 8,
  review: "Decent fruit",
});

mango.save();

Person.updateOne({ name: "Alex" }, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 15,
//   favouriteFruit: pineapple,
// });

//person.save();

//new fruits to be added to Database
const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!",
});

const orange = new Fruit({
  name: "Orange",
  score: 5,
  review: "Too sour",
});

const banana = new Fruit({
  name: "Banana",
  score: 7,
  review: "I like bananas",
});

// Adding or Inserting more than fruit into Database
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

//Finding or Reading items(fruits) from Database
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function (fruit) {
      console.log(fruit.name);

      mongoose.connection.close();
    });
  }
});

// Updating document
// Fruit.updateOne(
//   { _id: "63487db5b32749567d8a5b26" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document.");
//     }
//   }
// );

//Deleting one document
// Fruit.deleteOne({ _id: "6348622f36607ffe706fcfa5" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// });

//Deleting many documents
// Person.deleteMany({ name: "Alex" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the documents.");
//   }
// });
