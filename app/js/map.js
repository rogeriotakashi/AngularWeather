      var map;
      var geocoder;
      var actualLatlng;

      function initMap() {
      	geocoder = new google.maps.Geocoder;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -22.908277818796936, lng: -47.049293518066406},
          zoom: 8
        });


      map.addListener('click',function(event){
      		console.log(event.latLng.lat());
      		console.log(event.latLng.lng());
      		actualLatlng = event.latLng.lat()+","+event.latLng.lng();
      		geocodeLatLng(geocoder,map);
      });
      }

      function geocodeLatLng(geocoder, map) {
        var latlngStr = actualLatlng.split(',', 2);
        var latlng = {
        	lat: parseFloat(latlngStr[0]), 
        	lng: parseFloat(latlngStr[1])
        };

        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              map.setZoom(11);
              console.log(results);
              alert(results[1].formatted_address);

            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }
