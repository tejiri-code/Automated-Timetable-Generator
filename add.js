var elts = document.getElementsByClassName('test')
Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || elt.value.length == 3) {
      // Focus on the next sibling
      elt.nextElementSibling.focus()
    }
  });
})