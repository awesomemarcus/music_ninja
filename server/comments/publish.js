Meteor.publish("listcomments", function(songId){
  return Comments.find({song_id:songId});
});
