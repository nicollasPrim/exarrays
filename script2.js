let res2 = document.getElementById('res2')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []

function ex2(){
    let n1 = Number(document.getElementById('n1').value)

    for(i=0; i < 5; i++){
        vetor2[i] = vetor1[i] * n1
    }
    res2.innerHTML = vetor2
}