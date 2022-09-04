function openLeftMenu() {
  closeRightMenu();
    document.getElementById("leftMenu").style.width = "100px";
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
  closeLeftMenu();
    document.getElementById("rightMenu").style.width = "100px";
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
