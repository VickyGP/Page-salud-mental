addEventListener('load', ()=> {

    let elements = document.querySelectorAll('.scrollReveal');

    elements.forEach(element => {
        ScrollReveal().reveal(element, {
            duration: 1000,
            opacity: '0%',
            origin: 'left',
            reset: true,
            distance: '200px',
            viewFactor: 0.1
        })
    })
    
})