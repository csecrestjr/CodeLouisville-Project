<!DOCTYPE html>
<HTML>
    <!-- DW6 -->
    <HEAD>
        <META charset="utf-8">
        <META name="keywords" content="University of Louisville,Department of
        Physics and Astronomy,physics,louisville,research,computational physics,
        high energy,hep,high energy physics,atlas,babar,particle,particle
        physics">
        <LINK rel="icon" href="www.hep.louisville.edu/images/favicon.ico"
        type="image/png" />
        <TITLE>High Energy Physics - University of Louisville: Department of P
          hysics and Astronomy</TITLE>
        <LINK rel="stylesheet" href="css/hep_css.css" type="text/css" href="mobilemenu/js/mobilemenu-app.js">
    </HEAD>
    <BODY>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
    integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
    crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
    <script src="vendor/angular.js" type="text/javascript"></script>

    //Problem: It look gross in smaller browser widths and small devices
    //Solution: To hide the text links and swap them out with a more
    appropriate navigation

    //Create a select and append to #menu

var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});
    </BODY>
