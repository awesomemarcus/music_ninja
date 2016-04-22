Template.comment.events({
  "submit #form-comment": function(event){
    event.preventDefault();
    var songId = this._id;
    var comment = event.target.comment.value;

    Meteor.call("addComment", songId, comment, function(err, result){
        if(err){
          toastr.error(err.reason);
        } else{
          toastr.success("Comment successfuly!");
          event.target.comment.value = "";
        }
    });

  }
});

Template.comment.helpers({
  'comments': function(){
    var songId = this._id;

    Meteor.subscribe("listcomments", songId);

    return Comments.find({song_id: songId});
  }
});
