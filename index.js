;(function(){


let plugin_wrapper = document.createElement('div')

let style_tag = document.createElement('style')
style_tag.type = 'text/css'
let head = document.head
head.appendChild(style_tag)

let css = require('./style.css')

// import css from "./style.css"

console.log('css', css)

if (style_tag.styleSheet){
    // style_tag.styleSheet.cssText = css
}
else {
    // style_tag.appendChild(document.createTextNode(css))
}

}())