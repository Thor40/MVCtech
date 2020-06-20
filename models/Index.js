const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');

// associations between models

// Post belongs to User
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post belongs to one User, but not many Users
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Show Users Liked on single Post
User.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'user_id'
  });
  
// Posts a single Users has liked
  Post.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id'
  });

// Vote belong to User
Like.belongsTo(User, {
    foreignKey: 'user_id'
});

// Vote belong to Post
Like.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
// User has many Likes
User.hasMany(Like, {
    foreignKey: 'user_id'
});

// Posts can have many Likes
Post.hasMany(Like, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Like };