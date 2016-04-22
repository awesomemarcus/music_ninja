Meteor.startup(function() {

  Soundbox._ensureIndex({
    "user_id": 1
  });


});

Meteor.publish('soundbox',function(type){

  switch (type) {
    case "mine":
      return Soundbox.find({user_id:this.userId});
    case "allShared":
      return Soundbox.find({shared:true},{sort:{createdAt:-1}});;

  }


});
