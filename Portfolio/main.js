function revealMyInfo(myName, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerText = myName;
  htmlElement.style.color = color;
}
