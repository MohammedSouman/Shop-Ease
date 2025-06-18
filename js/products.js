let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let selectSort = document.getElementById("sort")

console.log(selectSort.value)
function change() {
    console.log(selectSort.value === "price");
    console.log(selectSort.value === "most-ordered");
    console.log(selectSort.value === "brands");
    if (selectSort.value === "price") {
      row1.style.order = 4;
      row2.style.order = 3;
      row3.style.order = 1;
      row4.style.order = 2;
    } else if (selectSort.value === "most-ordered") {
      row1.style.order = 3;
      row2.style.order = 2;
      row3.style.order = 4;
      row4.style.order = 1;
    } else if (selectSort.value === "brands") {
        row1.style.order = 3;
        row2.style.order = 2;
        row3.style.order = 1;
        row4.style.order = 4;
    }
    console.log("done")
}

