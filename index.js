class TestInterfaceImitator {

    init() {
        let head = document.head
        let body = document.body

        this.plugin_wrapper = document.createElement('div')
        this.plugin_wrapper.id = 'test-interface-imitator-wrapeer'
        this.plugin_wrapper.classList.add('tii-right-position')
        body.appendChild(this.plugin_wrapper)

        // create header
        let img_toggle_position = document.createElement('img')
        img_toggle_position.src = './images/scroll-vertical-arrows.png'
        img_toggle_position.id = 'tii-img-toggle-position'
        this.image_toggle_position_wrapper = document.createElement('div')
        this.image_toggle_position_wrapper.classList.add('tii-img-toggle-position-wrapper')
        this.image_toggle_position_wrapper.appendChild(img_toggle_position)

        let header_wrapper = document.createElement('div')
        header_wrapper.classList.add('tii-header')
        this.plugin_wrapper.appendChild(header_wrapper)
        header_wrapper.appendChild(this.image_toggle_position_wrapper)

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
        let include_input = document.createElement('input')
        include_input.name = include_input.id = 'tii-include-elements'
        include_input.placeholder = 'Enter elements'
        include_input_wrapper.appendChild(include_input)

        // create exclude input
        let exclude_input_wrapper = document.createElement('div')
        exclude_input_wrapper.classList.add('tii-exclude-input-wrapper')
        body_wrapper.appendChild(exclude_input_wrapper)
        let exclude_label = document.createElement('label')
        exclude_label.for = 'tii-exclude-elements'
        exclude_label.innerHTML = 'Exclude elements'
        exclude_input_wrapper.appendChild(exclude_label)
        let exclude_input = document.createElement('input')
        exclude_input.name = exclude_input.id = 'tii-exclude-elements'
        exclude_input.placeholder = 'Enter elements'
        exclude_input_wrapper.appendChild(exclude_input)

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
        let interval_input = document.createElement('input')
        interval_input.name = interval_input.id = 'tii-interval-input'
        interval_input.type = 'number'
        interval_input_wrapper.appendChild(interval_input)
        
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
        let total_duration_input = document.createElement('input')
        total_duration_input.name = total_duration_input.id = 'tii-total-duration-input'
        total_duration_input.type = 'number'
        total_duration_input_wrapper.appendChild(total_duration_input)

        let format_duration = document.createElement('div')
        format_duration.classList.add('tii-format-time')
        format_duration.innerHTML = 'ms'
        total_duration_input_wrapper.appendChild(format_duration)

        // create button start test
        let button_wrapper = document.createElement('div')
        button_wrapper.classList.add('tii-button-wrapper')
        this.plugin_wrapper.appendChild(button_wrapper)
        let button_start = document.createElement('button')
        button_start.classList.add('tii-button')
        button_start.innerHTML = 'Start test'
        button_wrapper.appendChild(button_start)

        let style_tag = document.createElement('link')
        style_tag.href = 'style.css'
        style_tag.rel = 'stylesheet'

        head.appendChild(style_tag)
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
    }

}

let example = new TestInterfaceImitator()
example.init()
example.addListners()
example.allEventListners = window.getAllEventListeners()

console.log('example', example)
