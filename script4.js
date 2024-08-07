let res4 = document.getElementById('res4')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []

function ex4(){
    let n1 = Number(document.getElementById('n1').value)

    for(i=0; i<5; i++){
        vetor2[i] = vetor1[i] + n1
    }
    res4.innerHTML = vetor2
}