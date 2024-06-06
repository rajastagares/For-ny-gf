
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = './status.html';
}

