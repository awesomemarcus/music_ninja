Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "Loading",
  trackPageView: true,
  notFoundTemplate: "notFound"

});



Router.onBeforeAction(function() {
    if (!Meteor.userId()) {
      Router.go("/login");
    }
  this.next();
},{
except:  ['register']

});

Router.route('/',{
 name:"home",
 template:"musicFeed",
  waitOn:function() {
    return [Meteor.subscribe('soundbox',"allShared"), Meteor.subscribe("getUsers")];
  },
  action:function() {
    this.render('musicFeed');
  }


});

Router.route('/login',{
  name:"login",
  template: "login",
  layoutTemplate: "login_layout"
});

Router.route('/register',{
  name:"register",
  template: "register",
  layoutTemplate: "login_layout"
});




Router.route("/myMusic", {
    name:"myMusic",
    template:"myMusic",
    waitOn:function(){
        Meteor.subscribe("myMusic", Meteor.userId());
    }
});

Router.route("/addPlaylist", {
    name:"addPlaylist",
    template:"uploadForm",
});

Router.route("/dashboard", {
  name:"dashboard",
  template:"dashboard",
  waitOn:function(){
    Meteor.subscribe('soundbox','mine')
  },
  action : function(){
    this.render("dashboard")
  }
})
