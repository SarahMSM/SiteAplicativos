const imagens = document.getElementsByClassName('opcao-imagem');
const som = document.getElementById('som');

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('mouseover', () => {
        som.currentTime = 0;
        som.play();
    });
}

dragElement(document.getElementsByClassName("caixa-main")[0]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    let newTop = elmnt.offsetTop - pos2;
let newLeft = elmnt.offsetLeft - pos1;


const maxTop = window.innerHeight - elmnt.offsetHeight;
const maxLeft = window.innerWidth - elmnt.offsetWidth;

if (newTop < 0) newTop = 0;
if (newLeft < 0) newLeft = 0;
if (newTop > maxTop) newTop = maxTop;
if (newLeft > maxLeft) newLeft = maxLeft;

elmnt.style.top = newTop + "px";
elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}