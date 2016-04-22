/**
*search for songs on spotify and set globar reactive var
*/

Template.navBar.events({
  "submit #searchForm":function(event){
    event.preventDefault();
  },
  "keyup #searchForm": function(event) {
    event.preventDefault();
    SC.initialize({
      client_id: 'c397c656c78cffdd47a24e7054e7300a'
    });
    var query = $('#searchInput').val();

    if(query === ""){
      spotifySearchResult.set([]);
      soundCloudSearchResult.set([]);
    }
    else {
      //songs from spotify
      Meteor.call("searchSpotify",query ,function(error, tracks) {

        if(error){
          toastr.error("Can't connect to spotify server.");
        }
          spotifySearchResult.set(tracks.data.tracks.items);
     });

      //get songs from sound cloud
      SC.get('/tracks', {  q:query }).then(function(tracks) {
        var soundcloud = [];
        tracks.forEach(function(track) {
          soundcloud.push({
            image : track.artwork_url  || "img/media_album.png",
            title : track.title,
            uri : track.uri,
            id : track.id,
            source:"soundcloud"
          });
        });

        soundCloudSearchResult.set(soundcloud);
      });



    }
  },

 "click #logout": function(event){
   event.preventDefault();
   Meteor.logout(function(err){
     if(err){
       toastr.error(err.reason);
     } else{
       toastr.success("You are now logged out!");
       Router.go('home');
     }
   })
 }

});
