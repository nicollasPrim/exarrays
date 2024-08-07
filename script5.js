let res5 = document.getElementById('res5')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []

function ex5(){
    let v11 = Number(document.getElementById('v11').value)
    let v12 = Number(document.getElementById('v12').value)
    let v13 = Number(document.getElementById('v13').value)
    let v14 = Number(document.getElementById('v14').value)
    let v15 = Number(document.getElementById('v15').value)
    let v21 = Number(document.getElementById('v21').value)
    let v22 = Number(document.getElementById('v22').value)
    let v23 = Number(document.getElementById('v23').value)
    let v24 = Number(document.getElementById('v24').value)
    let v25 = Number(document.getElementById('v25').value)

    let v1 = v11 + v21
    let v2 = v12 + v22
    let v3 = v13 + v23
    let v4 = v14 + v24
    let v5 = v15 + v25

    let vetor = [v1, v2, v3, v4, v5]

    res5.innerHTML = vetor
}