slideShow ();

function slideShow () {
    `use strict`;
    var photoIndex = 0,
        i,
        x = document.querySelector(`#slide`);//doesn't create element with id slide yet
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    photoIndex++;
    if (photoIndex > x.length) {photoIndex = 1}    
    x[photoIndex-1].style.display = "block";  
    setTimeout(carousel, 10000);
}