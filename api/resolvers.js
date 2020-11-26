module.exports = {
  Query: {
    posts(_, { input }, ctx) {
      console.log(ctx.models.posts);

      return input
        ? ctx.models.posts.findMany(input)
        : ctx.models.posts.findAll();

      return ctx.models.posts.findAll();
    },
    user(_, { input }, ctx) {
      return ctx.models.user.findOne(input);
    },
  },
};
