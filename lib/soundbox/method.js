Meteor.methods({
  'saveTOSoundbox' : function(record,shared,source){
    if(!Meteor.userId()){
      return ;
    }
    //add logic later
    if(source === "soundcloud"){
      Soundbox.insert({
        user_id : Meteor.userId(),
        musicDetails : record,
        source : source,
        playlist: null,
        shared : shared,
        createdAt :new Date()
      });
    }
    else {
      Soundbox.insert({
        user_id : Meteor.userId(),
        musicDetails : {
          image: record.album.images[1].url ,
          title : record.name + "( " + record.artists[0].name + " )" ,
          uri : record.preview_url ,
          id : record.id ,
          source: "spotify" ,
        },
        source : source,
        playlist: null,
        shared : shared,
        createdAt :new Date()
      });
    }

  }
});
