module.exports = {
  Query: {
    posts(_, { input }, ctx) {
      return input
        ? ctx.models.posts.findMany(input)
        : ctx.models.posts.findAll();

      return ctx.models.posts.findAll();
    },
    user(_, { input }, ctx) {
      console.log(input);
      return ctx.models.users.findOne(input);
    },
  },
};
