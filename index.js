introName = document.getElementById("intro-name");

const introNameText = `Justin`;
const introNameTextSpeed = 150;

let i = 0;
// intro name printing function
function introNamePrint() {
  setTimeout(() => {
    if (i < introNameText.length) {
      introName.innerHTML += introNameText.charAt(i);
      i++;
      setTimeout(introNamePrint, introNameTextSpeed);
    }
  }, 250);
}

introNamePrint();
