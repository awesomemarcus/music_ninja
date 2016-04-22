Template.dashboard.events({
  "click #event": function(event, template){

  }
});

Template.dashboard.helpers({
  'getMySoundbox' : function (){
    return Soundcloud.find({},{sort:{createdAt:-1}}).fetch();
  }
});

Template.profile.events({
  "click input[type=image]": function(event){
    $("input[type=file]").click();
  },
  "change input[type=file]": function(event){
    event.preventDefault();
    var file = $('input[type=file]').get(0).files[0];

    if(file){
      fsFile = new FS.File(file);

      ProfileImages.insert(fsFile, function(err,result){
        if(!err){
          var avatar = 'cfs/files/ProfileImages/' + result._id;

          setTimeout(function(){
            Meteor.users.update(Meteor.userId(), {
              $set:{'profile.avatar': avatar}
            });
          }, 1000);

        } else{
          toastr.error(err.reason);
        }
      });

    }
  }
});

$
