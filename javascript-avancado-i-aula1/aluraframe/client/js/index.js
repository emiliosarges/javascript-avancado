let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos); //TESTE: inspecionar console.

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o comportamento padrão (recarregar a página)

    let tr = document.createElement('tr');

    campos.forEach(function(campo){

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    caompos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
    
});