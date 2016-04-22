this.MusicFiles = new Meteor.Files({
  collectionName: 'MusicFiles',
  allowClientCode: false, // Disallow remove files from Client
});


PlayList = new Mongo.Collection("PlayList");

Comments = new Mongo.Collection("Comments");

ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("ProfileImages")]
});

ProfileImages.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc){
    return true;
  },
  remove: function(userId, doc){
    return true;
  },
  download: function(){
    return true;
  }
});
