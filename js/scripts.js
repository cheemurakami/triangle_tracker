$(document).ready(function(){
  $("#form-group").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var answer = "";

    if (side1 === side2 && side1 === side3) {
        answer = "equilateral"
        return alert(answer);
    }
    if (side1 === side2 || side1 === side3 || side2 === side3) {
      answer = "isosceles"
      return alert(answer);
    }

    if (side1 !== side2) {
      if (side2 !== side3) {
      }
        answer = "scalene";
        return alert(answer);
    }

    $("#answer").empty().append(answer);
      $(".answer-box").show();

    event.preventDefault();
  });
});