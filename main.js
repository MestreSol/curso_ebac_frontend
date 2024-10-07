document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregamento da página
    validateInput();
});

function validateInput() {
    //Coleta e converte o valor do input em  um Float
    const valueA = parseFloat(document.getElementById('valueA').value);
    const valueB = parseFloat(document.getElementById('valueB').value);
    
    if (!valueA || !valueB) {
        alert('Both fields are required.');
        return false;
    }

    if (isNaN(valueA) || isNaN(valueB)) {
        alert('Please enter valid numbers.');
        return false;
    }

    if(valueA > valueB)
    {
        alert('The first number need to be less than the second number. :(');
        return;
    }

    alert("The secound number is bigger than the first number. :)");
    return true;
}
