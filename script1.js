// gsap.from('.navbar-brand', {opacity:0, duration:2, y:-50, ease:"bounce.out"});
// gsap.from('.tag', {opacity:0, duration:2, x:-50, delay:1.4});

gsap.registerPlugin(ScrollTrigger);

gsap.timeline().from('.bg1', {scale:0, duration:2})
.from('.navbar-brand', {opacity:0, scale: 0, ease:"back"})
.from('.tag', {opacity:0, y: 10, ease:"back"});

gsap.from(".about-text", {
    duration:2,
    y:250,
    opacity:0,
    scrollTrigger:{
       trigger:".container h2",
    scrub:1, //4 seconds of smooting
}
});

    