let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

//@desc Get all posts
//@route GET /api/posts
export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
};

//@desc GET Single post
//@route GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    return next(error);
  }

  res.status(200).json(post);
};

//@desc Create new post
//@route POST /api/posts/:id
export const newPost = (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: `Please include a title` });
  }

  posts.push(newPost);
  res.status(201).json(posts);
};

//@desc Update post
//@route PUT /api/posts/:id
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc Delete post
//@route DELETE /api/posts/:id
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
