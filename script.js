function myFunction() {
    alert("Submitted successfully");
  }
  var table = document.getElementById("myTable");
  var row = table.insertRow(5);
  var cell1 = row.insertCell(5);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2"; 