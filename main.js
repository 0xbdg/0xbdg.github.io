selected("semua");
function selected(get){
  let col = document.getElementsByClassName("column");

  if (get == "semua") get="";
  for (let i = 0; i < col.length;i++){
    hide(col[i], "show");
    if (col[i].className.indexOf(get) > -1) add(col[i], "show");
  }
}

function add(items, name){
  let arr1, arr2;
  arr1 = items.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {items.className += " " + arr2[i];}
  }
}

function hide(items, name){
  let arr1, arr2;
  arr1 = items.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  items.className = arr1.join(" ");
}

let buttonFilter = document.getElementById("button-filter");
let btnFill = buttonFilter.getElementsByClassName("btn-fill");

for (let len = 0; len < btnFill.length; len++){
  btnFill[len].addEventListener("click",function(){
    let aktif = document.getElementsByClassName("active");
    aktif[0].className = aktif[0].className.replace(" active","");
    this.className = " active";
  });
}
