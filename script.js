 function resetInput() {
            document.getElementById("segitiga-alas").value = "";
            document.getElementById("segitiga-tinggi").value = "";
            document.getElementById("luas-segitiga").innerText = "";
            document.getElementById("keliling-segitiga").innerText = "";
            
        }

function hitungLuasSegitiga() {
    var alas = parseFloat(document.getElementById("segitiga-alas").value);
    var tinggi = parseFloat(document.getElementById("segitiga-tinggi").value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Input harus berupa angka");
        return;
    }

    var luas = 0.5 * alas * tinggi;
    document.getElementById("luas-segitiga").innerText
        = "L = 1/2 x a x t \n\n L = 1/2 x " + alas +" x "+ tinggi +"  \n\n L = :" + luas;
            
}

function hitungkelilingsegitiga() {
    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);
    let sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Input harus berupa angka');
        return;
    }

    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Nilai sisi harus lebih besar dari 0');
        return;
    }

    let perimeter = sideA + sideB + sideC;
    document.getElementById('result').textContent = 'Keliling Segitiga: ' + perimeter.;
}

function resetInput() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('result').textContent = '';
}
 

 