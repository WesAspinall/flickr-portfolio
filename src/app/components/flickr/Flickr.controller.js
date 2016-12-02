var FlickrCtrl = function(FlickrService) {
  var ctrl = this;
  ctrl.albumList = [];
  ctrl.miamiPhotos = [];
  ctrl.getPhotos = getPhotos;
  ctrl.getList = getList;
  ctrl.activate = activate;
  activate();

  function activate() {
    getPhotos();
    getList();
  }

  function getPhotos() {
    FlickrService.getPhotos().then((res) => {
      return res;
    }).then((data) => {
      data.forEach((item) => {
        ctrl.miamiPhotos.push("http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg");
      });
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