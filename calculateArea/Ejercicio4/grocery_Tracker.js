let grocery1, grocery2, grocery3;

function calculateArea() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
   
    let totalMount = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `El monto total es: ${totalMount}`;
}
