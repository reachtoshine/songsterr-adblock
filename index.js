setInterval(() => {
    let div = document.querySelectorAll('#showroom')
    div.forEach((a, i)=>{
        a.style.display = 'none'
    })

    let Overlay = document.querySelectorAll('#hide-layer-overlay')[0]
    if (Overlay) Overlay.style.display = 'none'

    let box = document.getElementsByClassName('rq25k')[0]
    if (box) box.style.display = "none"
    
    let bler = document.getElementsByClassName('Cip2pk')[0]
    if (bler) bler.style.display = "none"

    let bler2 = document.getElementsByClassName("D5an6")[0]
    if (bler2) bler2.style.backdropFilter = 'none'

    let bler3 = document.getElementsByClassName("Cto1rx")[0]
     if (bler3) bler3.style.backdropFilter = 'none'
}, 1);

