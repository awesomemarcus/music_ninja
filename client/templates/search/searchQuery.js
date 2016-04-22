Template.searchQuery.helpers({
  'getSoundCloud' : function(){
    var tracks = spotifySearchResult.get();
    if(!_.isEmpty(tracks))
    {
      return soundCloudSearchResult.get();
    }
    else {
      return [];
    }
  },
  'getSpotify' : function(){
    var tracks = spotifySearchResult.get();

    if(!_.isEmpty(tracks))
    {
      return spotifySearchResult.get();
    }
    else {
      return [];
    }
  },
  'result':function (){
    if(Object.keys(soundCloudSearchResult.get()).length > 0 || Object.keys(spotifySearchResult.get()).length > 0){
      return true;
    }else {
      return false;
    }
  },
  'ifFilterSoundCloud' : function(){
  if(Session.get("searchFilter") === "soundcloud"){
    return true;
  }else {
    return false;
  }

  }


});
Template.searchQuery.events({
  'click #play' : function (event){
    event.preventDefault();
    var trackId = this.id;
    if(this.source === "soundcloud"){
      SC.stream('/tracks/'+trackId).then(function(player){
        player.play();
      });
    }
  },
  'click #addToPlayList' : function (event){
    event.preventDefault();
    if(this.source != "soundcloud"){
      this.source = "spotify";
    }
    Meteor.call("saveTOSoundbox", this,false,function(err,result){
      if(err){
        toaster.error(err);
      }
    });
  },
  'click #shareSong' : function(){
    var source = "soundcloud";
    if(this.source != "soundcloud"){
      source = "spotify";
    }
    Meteor.call("saveTOSoundbox", this,true,source,null,function(err,result){
      if(err){
        toaster.error(err);
      }
    });
  }
});


Template.search.events({
  'change #searchFilter' : function(){
    Session.set("searchFilter",$("#searchFilter").val());
  },
});
