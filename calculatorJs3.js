$("#btn1").click(function () {
   var  calculation = function (){


    var input1 = $("#num1");
    var input2 = $("#num2");
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    var n1 = parseInt(input1.val());
    var n2 = parseInt(input2.val());
   
    mystorage= windows.localStorage;
    localStorage.setItem("CalculatorJs3", "Calculator");
    document.getElementById("result").innerHTML = localStorage.getItem("CalculatorJs3");
     
      switch(segno){
        case "+":
        var risultato = n1+n2;
        break;

        case "-":
            var risultato = n1-n2;
            break;

            case "*":
                var risultato = n1*n2;
                break;

                case "/":
                    var risultato = n1/n2;
                    break;

      }
      
      if (input1.val() && input2.val()) {
        var string =
        "<tr><td>" +
        n1 +
        "</td><td style='text-align:center'>" +
        "+" +
        "</td><td>" +
        n2 +
        "</td><td>" +
        risultato +
        "</td></tr>";
      $("#tab").append(string);
      input1.val("");
      input2.val("");

   }
 
}
});
    