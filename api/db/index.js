const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// db.get("posts")
//   .push({
//     id: "V1StGXR8_Z5jdHi6B-vk9",
//     title: "lowdb is awesome",
//     content: "LowDB is a great tool for simulating data",
//     createdAt: Date.now(),
//   })
//   .write();

// db.get("users")
//   .push({
//     id: "V1StGXR8_Z5jdHi6B-vk9",
//     username: "velo",
//   })
//   .write();

const createPostModel = require("./post");
const createUserModel = require("./user");

module.exports = {
  models: {
    posts: createPostModel(db),
    users: createUserModel(db),
  },
  db,
};
