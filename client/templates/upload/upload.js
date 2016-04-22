Template.uploadForm.onCreated(function () {
  this.currentFile = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentFile: function () {
    return Template.instance().currentFile.get();
  },
  progress: function () {
    var _cf = Template.instance().currentFile.get();
    if (_cf) {
      return _cf.progress.get();
    } else {
      return 0;
    }
  },
});

Template.uploadForm.events({
  'submit .addPlaylist': function (e, template) {

      e.preventDefault();

      var form = e.target;

      var owner = Meteor.userId();
      var tags= form.tags.value;
      var is_shared=form.is_shared.value;
      var random = randomString(16,'aA!');

      var file = form.file.files;

      var fileLen = file.length;

      for (var i = 0; i < fileLen; i++) {

        template.currentFile.set(MusicFiles.insert({
            file: file[i],
            meta: {
                    owner:owner,
                    tags:tags,
                    is_shared:is_shared
                },
            onUploaded: function (error, fileObj) {
            if (error) {
                alert('Error during upload: ' + error);
            } else {
                alert('File "' + fileObj.name + '" successfully uploaded');
            }
                template.currentFile.set(false);
            },
            streams: 'dynamic',
            chunkSize: 'dynamic'
        }));
      }
      form.reset();
  }
});

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}
