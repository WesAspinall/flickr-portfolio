var FlickrService = function(ALBUMS_API, $http) {

  var key = ALBUMS_API.KEY;
  var id  = ALBUMS_API.USER_ID;
  var miami = ALBUMS_API.PHOTOSET_IDS.MIAMI;
  var URL = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+key+'&photoset_id='+miami+'&user_id='+id+'&format=json&nojsoncallback=1';

  this.getPhotos = getPhotos;

  function getPhotos() {
    return $http.get(URL).then((res) => {
        return res.data.photoset.photo;
    });
  }

};

angular
  .module('services')
  .service('FlickrService', FlickrService);