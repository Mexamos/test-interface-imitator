import './style.css'
import '@ulivz/get-event-listeners'
import TestInterfaceImitator from './tii'

function initOnloadWindow(delay_time) {
    setTimeout(function() {
        var tii = new TestInterfaceImitator()
        tii.init()
        tii.addListners()
        tii.filterListners(window.getAllEventListeners())
        tii.addContextmenuListners()
    }.bind(this), delay_time)
}

export default initOnloadWindow
