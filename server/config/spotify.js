Meteor.methods({
  'searchSpotify':function(query) {
    //check(query, String);
    console.log("server called");
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }

    this.unblock();
  //  var type = "album,artist,track,playlist";
    var type = "track";
    var limit = 20;
    var market = "US";

    var result = Meteor.http.call("GET","https://api.spotify.com/v1/search?q="+query+"&type="+type+"&market="+market+"&limit="+limit);
    return result;


  },

});
