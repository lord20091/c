function changecolor() {
    let bgcolor = prompt('Enter Backround color:');
    if (bgcolor) {
      document.body.style.backgroundColor = bgcolor; 
    }

    let textcolor = prompt('Enter Text color:');
    if (textcolor) {
      document.body.style.color = textcolor;
    }
  }
  let text = document.querySelector(`p`)

  text.style.fontSize = `40px`

  window.onload = changecolor;