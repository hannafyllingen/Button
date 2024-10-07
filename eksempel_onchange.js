//     <h1>Input-felt med onchange</h1>
//     <label for="inputFraBruker"> Skriv inn navnet ditt</label>
//     <input type="text" onchange="velkomstMelding(this.value)" id="inputFraBruker">


function velkomstMelding (navn) {
    document.write("Hei, " + navn + "!")
}

