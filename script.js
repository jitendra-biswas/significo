(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
var homepageSlide = function(){
    gsap.to(".slide-left", {
        xPercent:90,
        duration: 50,
        yoyo:true,
       repeat:-1
    })
    
     
    gsap.to(".slide-right", {
        xPercent:-100,
        duration: 60,
        yoyo:true,
        repeat:-1
    })
    
}
homepageSlide();

var info = function(){
    gsap.to(".info",{
        scrollTrigger:{
            trigger:".page4-info",
            scroller:"body",
            start:"top 10%",
            end:"bottom 0%",
            scrub:true,
            pin:true
        },
    
        xPercent:-200,
    })
    
}
info();

var page3Background = function(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            start:"top 70%",
            end:"bottom 0",
            scrub:1,
        }
    })
    tl.to(".page3",{
        backgroundColor:"#EF9D71"
    },"a")
    
    tl.to("nav",{
           backgroundColor:"#EF9D71"
    },"a")
}
page3Background();

var page4Background = function(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page4",
            start:"top 90%",
            end:"bottom 0",
            scrub:1,
        }
    })
    tl2.to(".page4",{
        backgroundColor:"#FFFFFF"
    },"b")
    
    tl2.to("nav",{
           backgroundColor:"#FFFFFF"
    },"b")
}
page4Background ();