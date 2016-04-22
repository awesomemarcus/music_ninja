Template.registerHelper("getName", function(id){
    var ownerId = MusicFiles.collection.findOne({_id:id});

    if(ownerId.meta.metaObject.owner == Meteor.userId()){
      return ownerId.name;
    }
});


Template.registerHelper("getID", function(id){
  var ownerId = MusicFiles.collection.findOne({_id:id});

  if(ownerId.meta.metaObject.owner == Meteor.userId()){
    return ownerId._id;
  }

});
