let username;
let password;

function login(){
    
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if((username=="samiksha")&&(password=="123")){
        alert("Login Successful");
    }
    else{
        alert("Login failed");
    }

}