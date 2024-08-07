let res6 = document.getElementById('res6')

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = []

function ex6(){
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

    let vt1 = v11 - v21
    let vt2 = v12 - v22
    let vt3 = v13 - v23
    let vt4 = v14 - v24
    let vt5 = v15 - v25

    let vetor = [vt1, vt2, vt3, vt4, vt5]
    res6.innerHTML = vetor
}
