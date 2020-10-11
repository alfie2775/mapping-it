
var data_list = new Array();

function delete_data() {
    localStorage.clear();
}


function get_data() {
    var str = localStorage.getItem("db");
    if(str != null)
        data_list = JSON.parse(str);
}

function add_data() {
    
    get_data();

    data_list.push({
        eid:document.getElementById("e-id").value,
        ename:document.getElementById("e-name").value,
        eemail:document.getElementById("e-email").value,
        etel:document.getElementById("e-tel").value,
        esal:document.getElementById("e-sal").value,
        eloc:document.getElementById("e-loc").value
    });

    localStorage.setItem("db", JSON.stringify(data_list));
    show_data();
}

function show_data() {
    get_data();
    var table = document.getElementById("e-data");
    
    var n = table.rows.length;

    if(n>0)
        while(--n) 
            table.deleteRows(x);

    for(let i=0; i<data_list.length; i++) {
        var r = table.insertRow();

        r.insertCell().innerHTML = data_list[i].eid;
        r.insertCell().innerHTML = data_list[i].ename;
        r.insertCell().innerHTML = data_list[i].eemail;
        r.insertCell().innerHTML = data_list[i].etel;
        r.insertCell().innerHTML = data_list[i].esal;
        r.insertCell().innerHTML = data_list[i].eloc;

        if(i%2!=0)
            r.style.background = "white";
        else
            r.style.background = "lightgrey";
    } 
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#data-form").addEventListener("submit", add_data);
    show_data();
});