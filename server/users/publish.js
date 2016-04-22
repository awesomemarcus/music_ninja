Meteor.publish("getUsers", function(){
  return Meteor.users.find({});
});
