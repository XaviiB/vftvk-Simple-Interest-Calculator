  // function to calculate interest rate
function compute()
{



     p = document.getElementById("principal").value;

     y = document.getElementById("years").value;

     ny = document.getElementById("years").value;

     r = document.getElementById("rate").value;

     var date = new Date();
     var d = (date.getFullYear() + document.getElementById("years").value);

     i = p * y * r / 100;


   var a = "If you deposit " + p + ","+"<br>" +
             "at an interest rate of " + r + "%," + "<br>" +
             "You will receive an amount of " + i + "," +"<br>" +
             "in the year " + d;

             //Validation
     if (p <= 0) {
        alert("Enter a positive number")
      } else {
     result.innerHTML = a;
      }

}

// function to see number for slider
function read(){
    var range = document.getElementById("rate").value;
    var output = document.getElementById("display");
    output.innerHTML = range+"%";
    }
