const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');

// associations between models

// Post belongs to User
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post belongs to one user, but not many users
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };