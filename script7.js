let res7 = document.getElementById('res7')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []

function ex7(){
    let v1 = Number(document.getElementById('v1').value)
    let v2 = Number(document.getElementById('v2').value)
    let v3 = Number(document.getElementById('v3').value)
    let v4 = Number(document.getElementById('v4').value)
    let v5 = Number(document.getElementById('v5').value)

    let vetor = [v1 + v2 + v3 + v4 + v5]
    res7.innerHTML = vetor
}