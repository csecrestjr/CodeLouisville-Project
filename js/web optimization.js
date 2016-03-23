HTML>
    <!-- DW6 -->
    <HEAD>
        <META charset="utf-8">
        <META name="keywords" content="University of Louisville,Department of
        Physics and Astronomy,physics,louisville,research,computational physics,
        high energy,hep,high energy physics,atlas,babar,particle,particle
        physics">
        <link rel="icon" href="www.hep.louisville.edu/images/favicon.ico"
        type="image/png" />
        <TITLE>High Energy Physics - University of Louisville: Department of P
          hysics and Astronomy</TITLE>
        <LINK rel="stylesheet" href="www.hep.louisville.edu/hep_css.css"
        type="text/css" href="weboptimization.js">
        "meta charset="utf-8">
        <script src="jquery.js"</script>
        <script src="calender.js"></script>
        <title>What's on today schedule?</title>
        <html>
        <body>
          (document).ready(function() {
            $('button').click(function() {
              $("button").removeClass("selected");
              $(this).addClass("selected");
              var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
              var animal = $(this).text();
              var flickrOptions = {
                tage: animal
                format: "json"
              };
              function displayPhotos(data) {
                var photoHTML = '<ul>';
                $.each( data.items, fucntion (i, item) {
                  photoHTML += '<li class="grid-25 tablet-grid-50">'
                  photoHTML += '<a href="' + phto.link + '" class="image>">';
                  photoHTML += '<img src"' + photo.media.m + '"></a></li>';
                });
                photoHTML += '</ul>';
                $('#photos').html(photoHTML);
              }
              $getJSON(flickerAPI, flickerOptions, displayPhotos);
            });
          }); // end ready

          <ul>
            <li class+"grid-25 tablet-grid-50">
              <a href="http://wwww.flickr.com" class="image">
                <img src="http://farm3.starticflickr.com/m.jpg">
              </a>
            </li>
          </ul>
        </body>
        </html>
