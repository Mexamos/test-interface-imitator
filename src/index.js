import './style.css'
import '@ulivz/get-event-listeners'
import TestInterfaceImitator from './tii'

function initOnloadWindow() {
    let tii = new TestInterfaceImitator()
    tii.init()
    tii.addListners()
    tii.filterListners(window.getAllEventListeners())
    tii.addContextmenuListners()
}

export default initOnloadWindow
