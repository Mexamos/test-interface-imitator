import './style.css'
import '@ulivz/get-event-listeners'
import TestInterfaceImitator from './tii'

function addTestTemplate(callback) {
    var compile = require("./test.html")
    var template = compile()
    document.body.innerHTML = template


    let test_div = document.querySelector('.test-square')
    test_div.addEventListener('click', function(){
        console.log('wrapper')
    })

    let test_button = document.querySelector('.test-square button')
    test_button.addEventListener('dbclick', function(){
        alert('button')
    })

    callback()
}

function initOnloadWindow() {
    let tii = new TestInterfaceImitator()
    tii.init()
    tii.addListners()
    tii.filterListners(window.getAllEventListeners())
    tii.addContextmenuListners()

    console.log('tii', tii)

//     // TODO
//     // events that block another event
//     // get events from ifames
//     // block all <a>
}

console.log()

addTestTemplate(initOnloadWindow)