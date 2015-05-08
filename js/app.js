/*******************************************************************************
********************************************************************************
Experimental: Create Countries To Visit List  --  change "edit" to "save" while editing
********************************************************************************
*******************************************************************************/

var countryInput = document.getElementById("new-country");
var addButton = document.getElementsByTagName("button")[0];
var unvisitedCountriesHolder = document.getElementById("unvisited-countries");
var visitedCountriesHolder = document.getElementById("visited-countries");



var createNewCountryElement = function(countryString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = countryString;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput); 
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}



var addCountry = function() {
  var listItem = createNewCountryElement(countryInput.value);
  unvisitedCountriesHolder.appendChild(listItem);
  bindCountryEvents(listItem, countryVisited);

  countryInput.value = "";
}



var editCountry = function() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");

  if(containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  listItem.classList.toggle("editMode");
}



var deleteCountry = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}



var countryVisited = function() {
  var listItem = this.parentNode;
  visitedCountriesHolder.appendChild(listItem);
  bindCountryEvents(listItem, countryUnvisited);
}



var countryUnvisited = function() {
  var listItem = this.parentNode;
  unvisitedCountriesHolder.appendChild(listItem);
  bindCountryEvents(listItem, countryVisited);
}



var bindCountryEvents = function(countryListItem, checkBoxEventHandler) {
  var checkBox = countryListItem.querySelector("input[type=checkbox]");
  var editButton = countryListItem.querySelector("button.edit");
  var deleteButton = countryListItem.querySelector("button.delete");

  editButton.onclick = editCountry;
  deleteButton.onclick = deleteCountry;
  checkBox.onchange = checkBoxEventHandler;
}



addButton.addEventListener("click", addCountry)



for (var i = 0; i < unvisitedCountriesHolder.children.length; i += 1) {
  bindCountryEvents(unvisitedCountriesHolder.children[i])
}



for (var i = 0; i < visitedCountriesHolder.children.length; i += 1) {
  bindCountryEvents(visitedCountriesHolder.children[i])
}








/*******************************************************************************
********************************************************************************
Create Lightbox
********************************************************************************
*******************************************************************************/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);



/***************************************************
Add overlay
***************************************************/

$("body").append($overlay);



/***************************************************
To view image in overlay
***************************************************/

$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);

  $overlay.show();

});



/***************************************************
To remove image from overlay
***************************************************/

$overlay.click(function(){
  $overlay.hide();
});