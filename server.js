import express from "express";
const PORT = process.env.PORT;
//If using es modules in node, use .js if file
import posts from "./routes/posts.js";
import path from "path";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

//This initializes express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger
app.use(logger);

// Routes
app.use("/api/posts", posts);

// Error Handler
app.use(errorHandler);

//Setup static folder
//This takes the specified file type. Ex: localhost:5000/about.html
// app.use(express.static(path.join(__dirname, "public")));

// let posts = [
//   { id: 1, title: "Post One" },
//   { id: 2, title: "Post Two" },
//   { id: 3, title: "Post Three" },
// ];

// // This retreives all posts
// // app.get("/api/posts", (req, res) => {
// //   res.json(posts);
// // });

// //An example of a query strings. Retrieving the posts with limitations
// app.get("/api/posts", (req, res) => {
//   const limit = parseInt(req.query.limit);

//   if (!isNaN(limit) && limit > 0) {
//     res.status(200).json(posts.slice(0, limit));
//   }

//   res.status(200).json(posts);
// });

// // This retreives single post
// app.get("/api/posts/:id", (req, res) => {
//   //The req.params.id is a string by default. parseInt is used to make it as an int.
//   const id = parseInt(req.params.id);
//   //This loops through the posts list then if it matched then it will return the matched id
//   //It is like a foreach
//   // res.status(200).json(posts.filter((post) => post.id === id));

//   const post = posts.find((post) => post.id === id);

//   if (!post) {
//     return res
//       .status(404)
//       .json({ msg: `A post with the id of ${id} not found` });
//   }

//   res.status(200).jsos(post);
// });

//Below works without specifying what file is the file type. Ex: localhost:5000/about
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
