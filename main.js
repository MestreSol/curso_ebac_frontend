document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        document.getElementById("valueA").value = document.getElementById("valueA").value.replace(/[^0-9]/g, '');
        document.getElementById("valueB").value = document.getElementById("valueB").value.replace(/[^0-9]/g, '');

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
        // Your form submission logic here
        console.log('Form submitted!');
    });
});