

function showDropdownContent() {
  let btn = document.getElementById("btnPanel");

  let dropdown = document.getElementById("bodyDropdown");
  btn.classList.toggle("colorClick");
  dropdown.classList.add('fadeIn');
  dropdown.classList.toggle('show');


}
