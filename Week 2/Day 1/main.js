let email;
let studentname;
let collegename;
let branch;
let phoneno;
let address;

function create(){
    
    email = document.getElementById("email").value;
    studentname = document.getElementById("std_name").value;
    collegename = document.getElementById("clg_name").value;
    branch = document.getElementById("branch").value;
    phoneno = document.getElementById("ph_Number").value;
    address = document.getElementById("address").value;

    document.write(email + "<br/>"+ studentname + "<br/>"+ collegename + "<br/>"+ branch + "<br/>"+ phoneno + "<br/>" +address + "<br/>" )

}


