

let circul = document.querySelector('.circal');

window.addEventListener("mousemove", function (detail) {
    console.log(detail.clientX , detail.clientY)

    let xvalue = detail.clientX ;
    let yvalue = detail.clientY ;

    circul.style.top = `${yvalue}px`
    circul.style.left = `${xvalue}px`

})