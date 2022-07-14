function add_data(){
    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let email=document.getElementById("email").value;

    let table=document.getElementsByTagName("table")[0];
    let row=table.insertRow(table.rows.length/2+1);

    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=roll;
    cell3.innerHTML=email;

}
