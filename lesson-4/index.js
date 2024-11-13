// if(){}else{}

let weather = true;

if (weather) {
  console.log("kun achyk");
} else {
  console.log("kun burkok");
}

const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (input.value === "") {
    console.log("pustoe znachenie");
  } else if (input.value <= 5) {
    console.log(input.value < 5 ? "5ten kichine" : "5ke barabar");

    input.value = "";
  } else if (input.value <= 10) {
    console.log(input.value < 10 ? "10don kichene" : "10go barabar");

    input.value = "";
  } else if(input.value <= 15){ 
  
    console.log(input.value < 15 ? "15den kichine" : "15ge barabar");
    input.value = "";
  }else if (input.value <=20){
    console.log(input.value <20 ? "20dan kichine" : "20ga barabar");
    input.value = "";
  }

});
