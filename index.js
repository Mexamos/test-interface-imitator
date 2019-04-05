;(function(){

    let head = document.head
    let body = document.body

let plugin_wrapper = document.createElement('div')
body.appendChild(plugin_wrapper)

let style_tag = document.createElement('link')
style_tag.href = 'style.css'
style_tag.rel = 'stylesheet'


head.appendChild(style_tag)



}())