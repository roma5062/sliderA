let texts = ['text1','TEXT2', 'TexT3' ]
let slider = document.querySelector('#slider')

let i = 0

slider.textContent = texts[0]
btn.addEventListener('click', function (e) {
    e.preventDefault()
    i++
    if (i > texts.length - 1) {
        i = 0
    }
    slider.textContent = texts[i]
})
