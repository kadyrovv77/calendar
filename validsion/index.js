const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function checkRequired(inputs) {
    inputs.forEach((input) =>{
        if(input.value.trim()=== ""){
            alert("No value")
        }else{
            console.log(input.value)
        }
    });
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    checkRequired([username,email,password,password2])
});


