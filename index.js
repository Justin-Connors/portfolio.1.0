introName = document.getElementById("intro-name");

const introNameText = `I'm Justin,`;
const introNameTextSpeed = 150;

let i = 0;

function introNamePrint() {
  if (i < introNameText.length) {
    introName.innerHTML += introNameText.charAt(i);
    i++;
    setTimeout(introNamePrint, introNameTextSpeed);
  }
}

introNamePrint();
