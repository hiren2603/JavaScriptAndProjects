const input = document.getElementById('email')
    // function to capture change
    const captureChange = function(e){
        console.log(e.target.value)
        if(e.target.value.length >= 3){
            input.style.backgroundColor = "#fff"
        }
    }

    // input event
    // fire on each change.
    // input.addEventListener('input', captureChange)


    // change Event
    // Note : fire after input looses the focus
    // input.addEventListener('change', captureChange)

    // keyup event
    // Note: fire after every kay strokes
    // input.addEventListener('keyup',captureChange)

    // keydown
    input.addEventListener('keydown', function(e){
        // console.log(e.key)
    })

    // focus
    input.addEventListener('focus', function(){
        input.style.backgroundColor = "lightpink"
    })

    // blur
    input.addEventListener('blur', ()=>{
        input.style.backgroundColor = "#fff"
    })

    //mouseover
    input.addEventListener('mouseover', ()=>{
        input.setAttribute('title', 'This field is required!')
    })

    // mouseout

    input.addEventListener('mouseout', ()=>{
        input.style.backgroundColor = "#fff"
    })