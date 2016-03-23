<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false&libraries=places"></script>
<script>
    //For TextBox Search..............
    google.maps.event.addDomListener(window, 'load', function () {
        var places = new google.maps.places.Autocomplete(document.getElementById('txtFrom'));
        google.maps.event.addListener(places, 'place_changed', function () {
            var place = places.getPlace();
        });
        var places1 = new google.maps.places.Autocomplete(document.getElementById('txtTo'));
        google.maps.event.addListener(places1, 'place_changed', function () {
            var place1 = places1.getPlace();
        });
    });

    function calculateRoute(rootfrom, rootto) {
        // Center initialized to University of Louisville
        var myOptions = {
            zoom: 10,
            center: new google.maps.LatLng(38.214237, -85.759733),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // Draw the map
        var mapObject = new google.maps.Map(document.getElementById("DivMap"), myOptions);

        var directionsService = new google.maps.DirectionsService();
        var directionsRequest = {
            origin: rootfrom,
            destination: rootto,
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(
        directionsRequest,
        function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                new google.maps.DirectionsRenderer({
                    map: mapObject,
                    directions: response
                });
            }
            else
                $("#lblError").append("Unable To Find Root");
        }
    );
    }

    $(document).ready(function () {
        // If the browser supports the Geolocation API
        if (typeof navigator.geolocation == "undefined") {
            $("#lblError").text("Your browser doesn't support the Geolocation API");
            return;
        }
        $("#calculate-route").submit(function (event) {
            event.preventDefault();
            calculateRoute($("#txtFrom").val(), $("#txtTo").val());
        });
    });
</script>
