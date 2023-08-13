

let circul = document.querySelector('.circal');

window.addEventListener("mousemove", function (detail) {
    console.log(detail.clientX , detail.clientY)

    let xvalue = detail.clientX ;
    let yvalue = detail.clientY ;

    circul.style.top = `${yvalue}px`
    circul.style.left = `${xvalue}px`

})

// 1 window me mousemove event lagaker mouse ki x and y position get kiye 
// fir prticula div ko document.queryselector ki maddat se select kr ke div ki position ko mouse ke moveing 
//  positon se set kiya x and y acces me

                // circul.style.top = `${yvalue}px`
                // circul.style.left = `${xvalue}px`

