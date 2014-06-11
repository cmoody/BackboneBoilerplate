define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    //var api = require('libs/api');

    // Google Maps Styles
    var style = [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}]

    var gmap = {
        myMarker: null,
        userMap: null,

        init: function(domElement) {
            // Default Center in Austin
            var mapCenter = new google.maps.LatLng(30.2500, -97.7500);

            var mapOptions = {
                zoom: 3,
                center: mapCenter,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.userMap = new google.maps.Map(domElement.get(0), mapOptions);
            this.userMap.setOptions({
                styles: style
            });
        },

        updateCenter: function(position) {
            // Create zoom in
            //this.userMap.setZoom(16);
            this.userMap.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        
            this.addMyMarker(position);

            this.smoothZoom();
        },

        smoothZoom: function() {
            var cnt = this.userMap.getZoom();
            var level = 16;
            var self = this;


            if (cnt >= level) {
                return;
            }else{
                var z = google.maps.event.addListener(self.userMap, 'zoom_changed', function(event){
                    google.maps.event.removeListener(z);
                    self.smoothZoom(self.userMap, level, cnt + 1, true);
                });
                
                setTimeout(function(){self.userMap.setZoom(cnt)}, 80);
            }
        },

        // Take in data set and add to map
        // Look into bulk add and also reuse for mymarker
        // Ability to pass in different icons
        addMarkers: function() {
        
        },

        addMyMarker: function(position) {
            var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            this.myMarker = new google.maps.Marker({
                position: myLatLng,
                map: this.userMap,
                title: 'test'
            });
        },

        // Add click method to attach with specific details etc

        resize: function() {
            google.maps.event.trigger(this.userMap, "resize");
        }
    };

    return gmap;

});