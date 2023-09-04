const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  name: { type: String, required: true },
  maufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  userId: { type: String, required: true },
  likes: { type: Number, required: true},
  dislikes: { type: Number, required: true},
  usersLiked: {type: [ "String <userId>" ], required: true},
  usersDisliked: {type: [ "String <userId>" ], required: true},

});

module.exports = mongoose.model('Sauce', sauceSchema);