spotifySearchResult = new ReactiveVar([]);
soundCloudSearchResult = new ReactiveVar([]);

Session.set("searchFilter","soundcloud");
Template.registerHelper("getAvatar", function(user_id){
  var avatar = Meteor.users.findOne({_id:user_id}).profile.avatar;
  console.log(avatar);
  return avatar;
});

Template.registerHelper("countComment", function(songId){
  return Comments.find({song_id: songId}).count();
});
