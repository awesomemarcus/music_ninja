
Template.musicFeed.events({
  // 'click #Clicking' :function(){
  //   SC.initialize({
  //     client_id: 'c397c656c78cffdd47a24e7054e7300a'
  //   });
  //   var track_url = 'https://api.soundcloud.com/tracks/124164627';
  //   SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  //     console.log('oEmbed response: ', oEmbed);
  //     return oEmbed.html;
  //   });
  // }
  'click #play' : function (event){
    event.preventDefault();
    var trackId = this.musicDetails.id;
    console.log(this.musicDetails.id);
    SC.initialize({
      client_id: 'c397c656c78cffdd47a24e7054e7300a'
    });
    SC.stream('/tracks/'+trackId).then(function(player){
      player.play();
    });

  }
});

Template.musicFeed.helpers({
  'spotifySearch' : function() {

    return Soundbox.find({},{sort:{createdAt:-1}}).fetch();
  },
  'spotify' : function() {
    if(this.source === "spotify"){
      return true
    }else {
      return false;
    }
  },
  'loudSoundCloudIfram' : function(){
    SC.initialize({
      client_id: 'c397c656c78cffdd47a24e7054e7300a'
    });
    var track_url = this.musicDetails.uri ;
      console.log(this._id);
    document.getElementById(this._id).innerHTML = "<h1>hello</h1>";

    SC.oEmbed(track_url, { auto_play: true }).then(function(iframe) {
          document.getElementById(this._id).innerHTML =iframe.html;
    });

    return [];
  }

});
