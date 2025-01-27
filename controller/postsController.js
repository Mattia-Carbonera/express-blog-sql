// array di post
const connection = require("../data/conn");

// * index
function index(req, res) {
  // const sqlPosts = "SELECT * FROM `posts`.`posts`";

  // // eseguo la query
  // connection.query(sqlPosts, (err, results) => {
  //   if (err) return res.status(500).json({ error: "Database query failed" });
  //   res.json(results);
  // });

  const sqlTags = `
  SELECT
	  posts.title,
    posts.content,
    posts.image,
    tags.label

  FROM posts.posts

  INNER JOIN post_tag
  ON posts.posts.id = post_tag.tag_id

  INNER JOIN tags
  ON posts.tags.id = post_tag.post_id`;

  connection.query(sqlTags, (err, results) => {
    res.json(results);
  });
}

// * show
function show(req, res) {
  const id = req.params.id;

  const sql = "SELECT * FROM `posts`.`posts` WHERE `id`= ?";

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (!results.length)
      return res.status(404).json({ error: "Post not foound" });

    res.json(results);
  });
}

// * store
function store(req, res) {
  // const param = req.body;
  // const newId = parseInt(post.at(-1).id) + 1;
  // const { title, content, image, tags } = param;
  // if (!title || !content || !image || !tags?.length) {
  //   const err = new Error("Check params");
  //   err.code = 400;
  //   throw err;
  // }
  // const newPost = {
  //   id: newId,
  //   Title: title,
  //   Content: content,
  //   Image: image,
  //   Tags: tags,
  // };
  // post.push(newPost);
  // console.log(newPost);
  // res.json(post);
}

// * update
function update(req, res) {
  // const index = req.params.id;
  // const param = req.body;
  // const { title, content, image, tags } = param;
  // const thisPost = post.find((post) => post.id == index);
  // const searchedPost = post.find((post) => post.id.includes(index));
  // // controllo dei post
  // if (!searchedPost) {
  //   const err = new Error("Post not found");
  //   err.code = 404;
  //   throw err;
  // } else if (!title || !content || !image || !tags?.length) {
  //   const err = new Error("Check params");
  //   err.code = 400;
  //   throw err;
  // }
  // // -----------
  // // controllo dei parametri
  // thisPost.id = index;
  // thisPost.Title = title;
  // thisPost.Content = content;
  // thisPost.Image = image;
  // thisPost.Tags = tags;
  // console.log(thisPost);
  // res.json(post);
}

// * modify
function modify(req, res) {
  // const index = req.params.id;
  // const param = req.body;
  // const { title, content, image, tags } = param;
  // const thisPost = post.find((post) => post.id == index);
  // const searchedPost = post.find((post) => post.id.includes(index));
  // // controllo dei post
  // if (!searchedPost) {
  //   const err = new Error("Post not found");
  //   err.code = 404;
  //   throw err;
  // }
  // // -----------
  // // controllo dei parametri
  // thisPost.id = index;
  // if (title) thisPost.Title = title;
  // if (content) thisPost.Content = content;
  // if (image) thisPost.Image = image;
  // if (tags) thisPost.Tags = tags;
  // console.log(thisPost);
  // res.json(post);
}

// * detroy
function detroy(req, res) {
  const id = req.params.id;

  const sql = "DELETE FROM `posts`.`posts` WHERE `id` = ?";

  // eseguo la query
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (!err) return res.status(204).json("Operazione completata");
  });
}

module.exports = { index, show, store, update, modify, detroy };
