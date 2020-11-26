const nanoid = require("nanoid");
const createPostModel = (db) => {
  return {
    findAll() {
      console.log(db.get("posts").value());

      return db.get("posts").value();
    },
    findMany(filter) {
      return db.get("posts").filter(filter).value();
    },
    findOne(filter) {
      return db.get("posts").find(filter).value();
    },
    create(post) {
      const newPost = {
        id: nanoid(),
        createdAt: Date.now(),
        ...post,
      };

      db.get("posts").push(newPost).write();

      return newPost;
    },
  };
};

module.exports = createPostModel;
