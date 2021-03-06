const nanoid = require("nanoid");

const createUserModel = (db) => {
  return {
    findOne(filter) {
      return db.get("users").find(filter).value();
    },
    create(user) {
      const newUser = {
        id: nanoid(),
        ...user,
      };

      db.get("users").push(newUser).write();
      return newUser;
    },
  };
};

module.exports = createUserModel;
