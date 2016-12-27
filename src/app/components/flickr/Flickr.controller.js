var FlickrCtrl = function(FlickrService) {
  var ctrl = this;
  ctrl.feat = [];
  ctrl.featTitle = '';
  ctrl.getPhotos = getPhotos;
  ctrl.activate = activate;
  activate();


  function activate() {
    getPhotos();
    // getList();
  }

  function getPhotos() {
    FlickrService.getPhotos().then((res) => {
      ctrl.featTitle = res.title;
      return res;
    }).then((data) => {
      data.photo.forEach(function(item) {
        ctrl.feat.push("http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg");
      })
    });

  }

  function getList() {
    FlickrService.getList().then((res) => {

      return res;
    }).then((data) => {
      data.forEach((item) => {
        ctrl.albumList.push(item.primary_photo_extras.url_m);
        // ctrl.albumList.push("http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg");
      });
    });

  }

};

angular
  .module('components.flickr')
  .controller('FlickrCtrl', FlickrCtrl);