let res3 = document.getElementById('res3')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []

function ex3(){
    for(i=0; i < 5; i++){
        vetor2[i] = vetor1[i] + 7
    }
    res3.innerHTML = vetor2
}