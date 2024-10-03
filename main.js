document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
       validateInputs();
    });
});

function validateInputs() {
    var valueA = document.getElementById("valueA").value;
    var valueB = document.getElementById("valueB").value;

    if (valueA == "" || valueB == "") {
        alert("Please fill in all the fields");
        return;
    }

    if(valueB < valueA){
        alert("Value B need to be greater than Value A");
        return;
    }
    alert("Value A is greater than Value B");
}