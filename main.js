


let circul = document.querySelector(".circal");
const btn = document.querySelector("#btn");
const tl = gsap.timeline();

window.addEventListener("mousemove", function (detail) {
  console.log(detail.clientX, detail.clientY);

  let xvalue = detail.clientX;
  let yvalue = detail.clientY;

  circul.style.top = `${yvalue}px`;
  circul.style.left = `${xvalue}px`;
});

// 1 window me mousemove event lagaker mouse ki x and y position get kiye
// fir prticula div ko document.queryselector ki maddat se select kr ke div ki position ko mouse ke moveing
//  positon se set kiya x and y acces me

// circul.style.top = `${yvalue}px`
// circul.style.left = `${xvalue}px`
btn.addEventListener("click", function () {
    tl.reverse();
});




tl.from("#warapar", {
  opacity: 0,
  scale: 0.8,
  duration: 3,
});
tl.from(
  ".whitecard",
  {
    duration: 2,
    width: 0,
  },
  "-=2"
)
  .from(
    ".blackcard",
    {
      opacity: 0,
      x: 50,
      duration: 2,
    },
    "-=0.5"
  )

  .from(
    ".whitecard .line",
    {
      duration: 1,
      width: 0,
      opacity: 0,
    },
    "-=1"
  )

  .from(
    ".blackcard p",
    {
      opacity: 0,
      y: 50,
      duration: 0.8,
    },
    "-=.5"
  )

  .from(
    "h4",
    {
      opacity: 0,
      y: 50,
      duration: 1.5,
    },
    "-=1"
  );
