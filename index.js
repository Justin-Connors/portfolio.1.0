introName = document.getElementById("intro-name");

const introNameText = `Justin`;
const introNameTextSpeed = 200;

let i = 0;

function introNamePrint() {
  if (i < introNameText.length) {
    introName.innerHTML += introNameText.charAt(i);
    i++;
    setTimeout(introNamePrint, introNameTextSpeed);
  }
}

introNamePrint();
