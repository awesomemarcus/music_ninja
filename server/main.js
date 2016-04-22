import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("myMusic", function(flag){
    return MusicFiles.collection.find();
});

Meteor.publish("playList", function(flag){
    return PlayList.collection.find();
});

Meteor.publish("comments", function(){
    return Comments.collection.find();
});
