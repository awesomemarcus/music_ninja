Meteor.subscribe("myMusic");

Template.myMusic.onCreated(function () {
    Session.set("idToPlay")
});



Template.myMusic.helpers({
    musicFile: function(){
        return MusicFiles.collection.findOne({_id: Session.get("idToPlay")});
    },

    myMusicList: function(){
        return MusicFiles.collection.find({}).fetch();

    },
    url:function(){
        return Session.get('url');
    }
});

 //http://localhost:3000/cdn/storage/MusicFiles/vRQpmfXmHa6a27TSb/original/vRQpmfXmHa6a27TSb.mp3?play=true

Template.myMusic.events({
    "click .music-item": function(event, template){
        var id = event.target.id;
        var first = "http://localhost:3000/cdn/storage/MusicFiles/";
        var mid = "/original/";
        var end = ".mp3?play=true";
        var audio = $("#audio");
        var audio = new Audio(first+id+mid+id+end);
        audio.play();

    },

    "ended #videoId": function(event, template){

    }
});
