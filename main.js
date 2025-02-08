let names = document.getElementById('text');
let input = document.getElementById('holder');
let button = document.getElementById('submit');
function ShowName(value) {
  console.log(input.value);
  let valuess= history.pushState({},"",(input.value)

  )
  names.innerHTML = (valuess) ;
}

button.addEventListener ('click', () => {
console.log("clicked");
button.style.display = "none";
input.style.display = "none";
ShowName();


});