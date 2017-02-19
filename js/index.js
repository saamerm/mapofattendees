var locations = [
['<b>Atlanta</b></br>Insha Qari</br>Ejaz Gosani',33.75000015,-84.38333341,4], ['<b>Boston</b></br>Arshad Iqbal</br>Nabeel Nissar</br>Yasmeen Qadri</br>Yamin Fazili',42.35000007,-71.08333335,4], ['<b>Chicago</b></br>Burhan Adhami</br>Manaal Pandit</br>Lily Adhami</br>Dilmubarak Shah',41.8333335,-87.61666679,4], ['<b>Dallas</b></br>Sumayya Mir',32.76666682,-96.76666682,4], ['<b>DC</b></br>Yamin Fazili</br>Sahal Kango</br>Aadil Mir</br>Sanna Naqash',38.88333351,-77.03333334,4],['<b>New York</b></br>Faraz Kamili</br>Mehr Wani</br>Khadija Latif</br>Nabeel Qadri</br>Hafsa Kanjwal',40.78333349,-73.96666686,4],
/*
 * Next point on map
 *   -Notice how the last number within the brackets incrementally increases from the prior marker
 *   -Use http://itouchmap.com/latlong.html to get Latitude and Longitude of a specific address
 *   -Follow the model below:
 *      ['<b>Name 3</b><br>Address Line 1<br>City, ST Zipcode<br>Phone: ###-###-####<br><a href="#" target="_blank">Link<a> of some sort.', ##.####, -##.####, #]
 */
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  /* Zoom level of your map */
  center: new google.maps.LatLng(34.470216, -100.471734),
  /* coordinates for the center of your map */
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}