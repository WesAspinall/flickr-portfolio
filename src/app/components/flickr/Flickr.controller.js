var FlickrCtrl = function(FlickrService) {
  var ctrl = this;
  ctrl.miamiPhotos = [];
  ctrl.getPhotos = getPhotos;
  ctrl.activate = activate;
  activate();

  function activate() {
    getPhotos();
  }

  function getPhotos() {
    FlickrService.getPhotos().then((res) => {
      return res;
    }).then((data) => {
       data.forEach((item) => {
         ctrl.miamiPhotos.push("http://farm"+item.farm+".static.flickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg");
       })
    });

    return
  }


};

angular
  .module('components.flickr')
  .controller('FlickrCtrl', FlickrCtrl);