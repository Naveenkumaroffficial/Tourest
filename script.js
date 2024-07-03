
gsap.from(".section-1 h1",{
    y:50,
    duration:1,
    delay:1,
    opacity:0

})
gsap.from(".section-1 h2",{
    y:50,
    duration:1,
    delay:1,
    opacity:0
})
var tl=gsap.timeline()
tl.from(".logo h1",{
    x:50,
    duration:1,
    opacity:0,


})
tl.from(".menu h2",{
    x:50,
    duration:1,
    stagger:0.2,
    opacity:0,


})
tl.from(".button button",{
    x:50,
    duration:1,
    opacity:0,


})