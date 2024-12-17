import express from "express";
import {
  getPosts,
  getPost,
  newPost,
  deletePost,
  updatePost,
} from "../controllers/postControllers.js";
const router = express.Router();

//An example of a query strings. Retrieving the posts with limitations
router.get("/", getPosts);

// This retreives single post
router.get("/:id", getPost);

// Create new posts
router.post("/", newPost);

//Update post
router.put("/:id", updatePost);

// Delete post
router.delete("/:id", deletePost);

export default router;
