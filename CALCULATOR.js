//localStorage.setItem("tabella", "");
//console.log("nome: ",localStorage.setItem("nome"));
$("#tab").append(localStorage.setItem("tabella"));
//localStorage.clear();
var tabelArray=[];

for (let index = 0; index < localStorage.length; index++) {
  $("#tab").append(localStorage.getItem(index));
}
$("#btnPiu").click(function () {
  calcolo("+");
});
$("#btnMeno").click(function () {
  calcolo("-");
});
$("#btnMoltiplicazione").click(function () {
  calcolo("*");
});
$("#btnDivisione").click(function () {
  calcolo("/");
});
var calcolo= function (segno) {
  var input1 = $("#num1");
  var input2 = $("#num2");
  var n1 = parseInt(input1.val());
  var n2 = parseInt(input2.val());
  switch (segno) {
    case "+":
        var risultato = n1 + n2;
      break;
    case "-":
        var risultato = n1 - n2;
      break;
    case "*":
        var risultato = n1 * n2;
        break;
    case "/":
        var risultato = n1 / n2;
        break;
  };
  if (input1.val() && input2.val()) {
    var string =
    "<tr><td>" +
    n1 +
    "</td>" +
    "<td style=text-align:center>" +
    segno +
    "</td>" +
    "<td>" +
    n2 +
    "</td>" +
    "<td>" +
    risultato +
    "<td></tr>"
    tabelArray.push(string);
    console.log(tabelArray);
    var table =localStorage.getItem("tabella");
    localStorage.getItem("tabella",table+string);
    //localStorage.clear();
    //console.log("nome: ",localStorage.setItem("nome"));
    $("#tab").append(localStorage.setItem("tabella"));
    input1.val("");
    input2.val("");
  }
}
