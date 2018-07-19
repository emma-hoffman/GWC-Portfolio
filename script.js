var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    alert ("Thanks Bee Appreciator!")
};

function pictureChangeF () {
  document.getElementById('Bee').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfhVHNrqzSCbOPncMAWIm-a_XVjHEzI2GrNNDDO0TvihjQMXg"

}

function pictureChangeB () {
  document.getElementById('Bee').src = "http://www.sciencefriday.com/wp-content/uploads/2017/03/24244989859_3b50723170_k.jpg"

}
