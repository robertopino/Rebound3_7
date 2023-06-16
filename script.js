let parrafo = document.getElementById("parrafo");
let patron = /\b(sed|vehicula|vivamus|nam|eros|vestibulum|quam|solicitum|finibus|dictum|morbi)\b/gi;

let contadorSed = 0;
let contadorVehicula = 0;
parrafo.innerHTML = parrafo.innerHTML.replaceAll(patron, function(texto){
    if(texto == "sed"){
        contadorSed ++
        return "<b style='background-color: #ff5500;'>UNO</b>"
    }
    if(texto == "vehicula"){
        contadorVehicula ++
        return "<b style='background-color:#ff99b2;'>DOS</b>"
    }
})

contadorSed ||= (contadorSed == 6)
contadorVehicula ||= (contadorVehicula == 4)

console.log(contadorSed);
console.log(contadorVehicula);

console.log(`%csed: ${contadorSed}`, 'color: #ff5500');
console.log(`%cvehicula: ${contadorVehicula}`, 'color: #ff99b2');