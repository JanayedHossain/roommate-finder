const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@roommatefinder.qoggtng.mongodb.net/?retryWrites=true&w=majority&appName=RoommateFinder`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const myDB = client.db("postsDB");
    const myColl = myDB.collection("post");

    app.post("/post", async (req, res) => {
      const newpost = req.body;
      const result = await myColl.insertOne(newpost);
      res.send(result);
    });

    app.get("/post", async (req, res) => {
      const result = await myColl.find().toArray();
      res.send(result);
    });

    app.get("/post/:mail", async (req, res) => {
      const mail = req.params.mail;
      const query = { userEmail: mail };
      const result = await myColl.find(query).toArray();
      res.send(result);
    });

    app.get("/post-details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myColl.findOne(query);
      res.send(result);
    });

    app.get("/availability", async (req, res) => {
      const query = { availability: "Available" };
      const result = await myColl.find(query).limit(8).toArray();
      res.send(result);
    });

    app.put("/update/:id", async (req, res) => {
      const options = { upsert: true };
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          title: req.body.title,
          location: req.body.location,
          rent: req.body.rent,
          roomType: req.body.roomType,
          lifestyle: req.body.lifestyle,
          availability: req.body.availability,
          contact: req.body.contact,
          description: req.body.description,
        },
      };
      const result = await myColl.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.put("/post-details/:id", async (req, res) => {
      const options = { upsert: true };
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          likeCount: req.body.likeCount,
        },
      };
      const result = await myColl.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.delete("/post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myColl.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
