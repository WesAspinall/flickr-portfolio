var FlickrService = function(ALBUMS_API, $http) {

  var key = ALBUMS_API.KEY;
  var id = ALBUMS_API.USER_ID;
  var miami = ALBUMS_API.PHOTOSET_IDS.MIAMI;
  var dec = ALBUMS_API.PHOTOSET_IDS.DEC_16;
  var URL = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + key + '&photoset_id=' + dec + '&user_id=' + id + '&format=json&nojsoncallback=1';
  var listUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=' + key + '&primary_photo_extras=+url_m&user_id=' + id + '&format=json&nojsoncallback=1';

  this.getPhotos = getPhotos;
  this.getList = getList;

  function getPhotos() {
    return $http.get(URL).then((res) => {
      return res.data.photoset;
    })
  }

  function getList() {
    return $http.get(listUrl).then((res) => {
      return res.data.photosets.photoset;
    })
  }

};

angular
  .module('services')
  .service('FlickrService', FlickrService);