let res1 = document.getElementById('res1')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []


function ex1(){
    for(i=0; i< 5; i++){
        vetor2[i] = vetor1[i] * 3
    }
    res1.innerHTML = vetor2
}
