import ImageExpand from './images/expand.png'
import ImageScrollVerticalArrows from './images/scroll-vertical-arrows.png'
import ImageRollUp from './images/roll-up.png'

export default class TestInterfaceImitator {

    constructor() {
        this.include_elements = ''
        this.exclude_elements = ''
        this.exclude_blocks = ''
        this.interval_timer = null
        this.interval = 0
        this.total_duration = 0
        this.inner_element_listners = []
        this.actually_target = ''
    }

    set _include_elements(newVal) {
        this.include_input.value = this.include_elements = newVal
    }
    get _include_elements() {
        return this.include_elements
    }

    set _exclude_elements(newVal) {
        this.exclude_input.value = this.exclude_elements = newVal
    }
    get _exclude_elements() {
        return this.exclude_elements
    }

    set _exclude_blocks(newVal) {
        this.exclude_blocks_input.value = this.exclude_blocks = newVal
    }
    get _exclude_blocks() {
        return this.exclude_blocks
    }

    set _interval(newVal) {
        this.interval = newVal
    }
    set _total_duration(newVal) {
        this.total_duration = newVal
    }

    init() {
        let head = document.head
        let body = document.body

        this.plugin_wrapper = document.createElement('div')
        this.plugin_wrapper.id = 'test-interface-imitator-wrapeer'
        this.plugin_wrapper.classList.add('tii-right-position')
        body.appendChild(this.plugin_wrapper)

        let img_expand = document.createElement('img')
        img_expand.src = ImageExpand
        img_expand.id = 'tii-img-expand'
        this.expand = document.createElement('div')
        this.expand.classList.add('tii-expand')
        this.expand.classList.add('display-none')
        this.expand.title = 'Expand plugin'
        this.expand.appendChild(img_expand)
        body.appendChild(this.expand)
        this.inner_element_listners.push(this.expand)

        // create header
        let img_toggle_position = document.createElement('img')
        img_toggle_position.src = ImageScrollVerticalArrows
        img_toggle_position.id = 'tii-img-toggle-position'
        this.image_toggle_position_wrapper = document.createElement('div')
        this.image_toggle_position_wrapper.classList.add('tii-img-toggle-position-wrapper')
        this.image_toggle_position_wrapper.appendChild(img_toggle_position)
        this.inner_element_listners.push(this.image_toggle_position_wrapper)

        let roll_up = document.createElement('img')
        roll_up.src = ImageRollUp
        roll_up.id = 'tii-roll-up'
        this.roll_up_wrapper = document.createElement('div')
        this.roll_up_wrapper.classList.add('tii-roll-up-wrapper')
        this.roll_up_wrapper.title = 'Roll up plugin'
        this.roll_up_wrapper.appendChild(roll_up)
        this.inner_element_listners.push(this.roll_up_wrapper)

        let header_wrapper = document.createElement('div')
        header_wrapper.classList.add('tii-header')
        this.plugin_wrapper.appendChild(header_wrapper)
        header_wrapper.appendChild(this.image_toggle_position_wrapper)
        header_wrapper.appendChild(this.roll_up_wrapper)

        // create body
        let body_wrapper = document.createElement('div')
        body_wrapper.classList.add('tii-body-wrapper')
        this.plugin_wrapper.appendChild(body_wrapper)

        // create include input
        let include_input_wrapper = document.createElement('div')
        include_input_wrapper.classList.add('tii-include-input-wrapper')
        body_wrapper.appendChild(include_input_wrapper)
        let include_label = document.createElement('label')
        include_label.for = 'tii-include-elements'
        include_label.innerHTML = 'Include elements'
        include_input_wrapper.appendChild(include_label)
        this.include_input = document.createElement('textarea')
        this.include_input.name = this.include_input.id = 'tii-include-elements'
        this.include_input.placeholder = 'Enter selectors'
        include_input_wrapper.appendChild(this.include_input)
        this.inner_element_listners.push(this.include_input)

        // create exclude elements input
        let exclude_input_wrapper = document.createElement('div')
        exclude_input_wrapper.classList.add('tii-exclude-input-wrapper')
        body_wrapper.appendChild(exclude_input_wrapper)
        let exclude_label = document.createElement('label')
        exclude_label.for = 'tii-exclude-elements'
        exclude_label.innerHTML = 'Exclude elements'
        exclude_input_wrapper.appendChild(exclude_label)
        this.exclude_input = document.createElement('input')
        this.exclude_input.name = this.exclude_input.id = 'tii-exclude-elements'
        this.exclude_input.placeholder = 'Enter selectors'
        exclude_input_wrapper.appendChild(this.exclude_input)
        this.inner_element_listners.push(this.exclude_input)

        // create exclude blocks input
        let exclude_blocks_input_wrapper = document.createElement('div')
        exclude_blocks_input_wrapper.classList.add('tii-exclude-block-input-wrapper')
        body_wrapper.appendChild(exclude_blocks_input_wrapper)
        let exclude_blocks_label = document.createElement('label')
        exclude_blocks_label.for = 'tii-exclude-blocks'
        exclude_blocks_label.innerHTML = 'Exclude element and all children'
        exclude_blocks_input_wrapper.appendChild(exclude_blocks_label)
        this.exclude_blocks_input = document.createElement('input')
        this.exclude_blocks_input.name = this.exclude_blocks_input.id = 'tii-exclude-blocks'
        this.exclude_blocks_input.placeholder = 'Enter selectors'
        exclude_blocks_input_wrapper.appendChild(this.exclude_blocks_input)
        this.inner_element_listners.push(this.exclude_blocks_input)

        // create timers wrapper
        let timers_wrapper = document.createElement('div')
        timers_wrapper.classList.add('tii-timers-wrapper')
        body_wrapper.appendChild(timers_wrapper)

        // create intervar input
        let interval_input_wrapper = document.createElement('div')
        interval_input_wrapper.classList.add('tii-interval-input-wrapper')
        timers_wrapper.appendChild(interval_input_wrapper)
        let interval_label = document.createElement('label')
        interval_label.for = 'tii-interval-input'
        interval_label.innerHTML = 'Interval run listners'
        interval_input_wrapper.appendChild(interval_label)
        this.interval_input = document.createElement('input')
        this.interval_input.name = this.interval_input.id = 'tii-interval-input'
        this.interval_input.type = 'number'
        this.interval_input.step = '100'
        this._interval = this.interval_input.value = 1000
        interval_input_wrapper.appendChild(this.interval_input)
        this.inner_element_listners.push(this.interval_input)
        
        let format_interval = document.createElement('div')
        format_interval.classList.add('tii-format-time')
        format_interval.innerHTML = 'ms'
        interval_input_wrapper.appendChild(format_interval)

        // create total duration input
        let total_duration_input_wrapper = document.createElement('div')
        total_duration_input_wrapper.classList.add('tii-total-duration-input-wrapper')
        timers_wrapper.appendChild(total_duration_input_wrapper)
        let total_duration_label = document.createElement('label')
        total_duration_label.for = 'tii-total-duration-input'
        total_duration_label.innerHTML = 'Total duration test'
        total_duration_input_wrapper.appendChild(total_duration_label)
        this.total_duration_input = document.createElement('input')
        this.total_duration_input.name = this.total_duration_input.id = 'tii-total-duration-input'
        this.total_duration_input.type = 'number'
        this.total_duration_input.step = '100'
        this._total_duration = this.total_duration_input.value = 10000
        total_duration_input_wrapper.appendChild(this.total_duration_input)
        this.inner_element_listners.push(this.total_duration_input)

        let format_duration = document.createElement('div')
        format_duration.classList.add('tii-format-time')
        format_duration.innerHTML = 'ms'
        total_duration_input_wrapper.appendChild(format_duration)

        // create button start test
        let button_wrapper = document.createElement('div')
        button_wrapper.classList.add('tii-button-wrapper')
        this.plugin_wrapper.appendChild(button_wrapper)
        this.button_start = document.createElement('button')
        this.button_start.classList.add('tii-button')
        this.button_start.innerHTML = 'Start test'
        button_wrapper.appendChild(this.button_start)
        this.inner_element_listners.push(this.button_start)

    }

    addListners() {
        this.image_toggle_position_wrapper.addEventListener('click', function() {
            if(this.plugin_wrapper.classList[0] === 'tii-right-position') {
                this.plugin_wrapper.classList.remove('tii-right-position')
                this.plugin_wrapper.classList.add('tii-left-position')
            }
            else if(this.plugin_wrapper.classList[0] === 'tii-left-position') {
                this.plugin_wrapper.classList.add('tii-right-position')
                this.plugin_wrapper.classList.remove('tii-left-position')
            }
        }.bind(this))

        this.include_input.addEventListener('input', function(event) {
            this.include_elements = event.target.value
        }.bind(this))
        this.include_input.addEventListener('focus', function(event) {
            this.actually_target = 'include'
        }.bind(this))

        this.exclude_input.addEventListener('input', function(event) {
            this.exclude_elements = event.target.value
        }.bind(this))
        this.exclude_input.addEventListener('focus', function(event) {
            this.actually_target = 'exclude'
        }.bind(this))

        this.exclude_blocks_input.addEventListener('input', function(event) {
            this.exclude_blocks = event.target.value
        }.bind(this))
        this.exclude_blocks_input.addEventListener('focus', function(event) {
            this.actually_target = 'exclude_blocks'
        }.bind(this))

        this.interval_input.addEventListener('input', function(event) {
            this.interval = event.target.value = parseInt( Math.round(event.target.value) )
        }.bind(this))

        this.total_duration_input.addEventListener('input', function(event) {
            this.total_duration = event.target.value = parseInt( Math.round(event.target.value) )
        }.bind(this))

        this.button_start.addEventListener('click', this.initTest.bind(this))

        this.roll_up_wrapper.addEventListener('click', function() {
            this.removeContextmenuListners()
            this.plugin_wrapper.classList.add('display-none')
            this.expand.classList.remove('display-none')
        }.bind(this))

        this.expand.addEventListener('click', function() {
            this.addContextmenuListners()
            this.plugin_wrapper.classList.remove('display-none')
            this.expand.classList.add('display-none')
        }.bind(this))

    }

    initTest() {
        let includes = this.include_elements.split(',')
        let excludes = this.exclude_elements.split(',')
        let excludes_blocks = this.exclude_blocks.split(',')

        this.selected_listners = this.allEventListners.filter(function(listner) {

            let listner_include = includes.some(function(selector) {
                if(selector.length === 0) return false
                try {
                    let element = document.querySelector(selector)
                    if(element === listner.target) return true
                    else return false
                }
                catch(error) {
                    console.log('error', error)
                }
            }.bind(this))

            let listner_exclude = excludes.some(function(selector) {
                if(selector.length === 0) return false
                try {
                    let element = document.querySelector(selector)
                    if(element === listner.target) return true
                    else return false
                }
                catch(error) {
                    console.log('error', error)
                }
            }.bind(this))

            let listner_exclude_block = excludes_blocks.some(function(selector) {
                if(selector.length === 0) return false
                try {
                    if(listner.target.closest(selector)) {
                        return true
                    }
                    else {
                        return false
                    }
                }
                catch(error) {
                    console.log('error', error)
                }
            }.bind(this))

            if(listner_include && !listner_exclude && !listner_exclude_block) {
                return listner
            }
        }.bind(this))

        if(this.selected_listners.length > 0 && this.interval > 0) {

            this.not_called_listners = this.selected_listners.map(a => ({...a}))
            clearInterval(this.interval_timer)
            this.interval_timer = null
            this.interval_timer = setInterval(this.randomCallListners.bind(this), this.interval)

            setTimeout(function() {
                clearInterval(this.interval_timer)
                this.interval_timer = null
            }.bind(this), this.total_duration)

        }
    }

    randomCallListners() {
        if(this.not_called_listners.length === 0) {
            this.not_called_listners = this.selected_listners.map(a => ({...a}))
        }
        let random_number = Math.floor(Math.random()*this.not_called_listners.length)
        try {
            this.not_called_listners[random_number].handler(this.not_called_listners[random_number].target)
        }
        catch(error) {
            console.log('error', error)
        }
        this.not_called_listners.splice(random_number, 1)
    }

    getAllSelectorsOfListner(listner) {
        var selector = ''
        if(listner.target.id && listner.target.id.length > 0) {
            selector += `#${listner.target.id}`
        }
        if(listner.target.classList && listner.target.classList.length > 0 && listner.target.classList[0] !== 'tii-element-with-listner') {
            listner.target.classList.forEach(function(class_name) {
                if(class_name !== 'tii-element-with-listner') {
                    selector += `.${class_name}`
                }
            })
        }
        return selector
    }

    addSelectors(input_type, listner) {
        let selector = this.getAllSelectorsOfListner(listner)

        if(input_type === 'include') {
            if(this._include_elements.length === 0) {
                this._include_elements = selector
            }
            else {
                let regex = new RegExp(selector)
                if(this._include_elements.match(regex)) return
                this._include_elements = `${this._include_elements}, ${selector}`
            }
        }
        else if(input_type === 'exclude') {
            if(this._exclude_elements.length === 0) {
                this._exclude_elements = selector
            }
            else {
                let regex = new RegExp(selector)
                if(this._exclude_elements.match(regex)) return
                this._exclude_elements = `${this._exclude_elements}, ${selector}`
            }
        }
        else if(input_type === 'exclude_blocks') {
            if(this._exclude_blocks.length === 0) {
                this._exclude_blocks = selector
            }
            else {
                let regex = new RegExp(selector)
                if(this._exclude_blocks.match(regex)) return
                this._exclude_blocks = `${this._exclude_blocks}, ${selector}`
            }
        }
    }

    getSelectorByContextMenuAndCtrl(listner, event) {
        event.preventDefault()
        if(event.ctrlKey && this.actually_target) {
            event.stopPropagation()
            this.addSelectors(this.actually_target, listner)
        }
    }

    addContextmenuListners() {
        this.allEventListners.forEach(function(listner) {
            listner.target.classList.add('tii-element-with-listner')
            listner.target.addEventListener('contextmenu', this.getSelectorByContextMenuAndCtrl.bind(this, listner), true)
        }.bind(this))
    }

    removeContextmenuListners() {
        this.allEventListners.forEach(function(listner) {
            listner.target.classList.remove('tii-element-with-listner')
            listner.target.removeEventListener('contextmenu', this.getSelectorByContextMenuAndCtrl.bind(this, listner), true)
        }.bind(this))
    }

    filterListners(all_listners) {
        let init_include_selectors = ''
        this.allEventListners = all_listners.filter(function(listner, index) {
            let exist_inner_element = this.inner_element_listners.includes(listner.target)
            let selector = this.getAllSelectorsOfListner(listner)
            if(!exist_inner_element && listner.target.nodeName !== '#document' && listner.target.nodeName !== 'A' && selector.length > 0) {
                init_include_selectors += index === 0 ? selector : `, ${selector}`
                return true
            }
            else false
        }.bind(this))
        this._include_elements = init_include_selectors
    }

}