          gsap.from("#box1" , {
    
    rotate:360,
    duration:10,
    delay:2,
repeat:8,
borderRadius:"100%",
scale:0
});

gsap.from("#box2" , {
    x:1000,
    rotate:360,
    duration:10,
    delay:2,
repeat:8,
borderRadius:"100%"
});

gsap.to("#box3" , {
    x:-1000,
    y:1000,
    rotate:360,
    duration:10,
    delay:2,
repeat:8,
borderRadius:"100%"
});


gsap.to("#box4" , {
    x:1000,
    y:-500,
    rotate:360,
    duration:10,
    delay:2,
repeat:8,
borderRadius:"100%"
});
