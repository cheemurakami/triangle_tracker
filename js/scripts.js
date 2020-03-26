$(document).ready(function(){
  $("#form-group").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var answer = "";
    
    // if (side1 !== side2) {
    //   if (side2 !== side3) {
    //   }
    //     if (side1 !==side3) {
    //       answer = "scalene";  
    //     }
    // }
    // if (side1 === side2 || side2 === side3) {
    //    answer = "isosceles";
    // }
    // if (side1 === side2 && side1 === side3) {
    //     answer = "equilateral";
    // }

    
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      answer = "not a "
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
       answer = "scalene";
    } else if (side1 === side2 && side1 === side3) {
        answer = "equilateral";
    } else {
        answer = 'isosceles';
    }


    $("#answer").empty().append(answer);
      $("#answer-box").show();

    event.preventDefault();
  });
});