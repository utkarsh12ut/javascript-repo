


function calculate() {
    var number_1 = Number(document.getElementById("firstno").value);
    var number_2 = Number(document.getElementById("secondno").value);
    
    var area = number_1 * number_2;
    var perimeter  = 2 * (number_1 + number_2);
    
    document.getElementById("lblArea").innerHTML = area;
    
    document.getElementById("lblPerimeter").innerHTML = perimeter;
      
      
    }