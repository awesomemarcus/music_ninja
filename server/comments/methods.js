Meteor.methods({
  addComment:function(songId,comment){
    Comments.insert({
      song_id: songId,
      user_id: Meteor.userId(),
      comment: comment,
      createdAt: new Date()
    });
  }
});
