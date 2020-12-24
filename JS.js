
window.addEventListener('load', () =>{
  const preload=document.querySelector('.preload');
  preload.classList.add('preload-finish');

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.width = "40%";
    document.getElementById("active").style.fontSize = "18px";
    document.getElementById("active2").style.fontSize = "18px";
    document.getElementById("active3").style.fontSize = "18px";
    document.getElementById("scroll").style.opacity = "0";
    
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.width = "30%";
    document.getElementById("active").style.fontSize = "20px";
    document.getElementById("active2").style.fontSize = "20px";
    document.getElementById("active3").style.fontSize = "20px";
    document.getElementById("scroll").style.opacity = "1";
  }
}

  $(function() {
    $(".flexslider").flexslider({
      animation: "slide",
      controlNav: "thumbnails"
      
    });
});	


gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll",{
        
  scrollTrigger: {
      trigger: ".main",
           // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "center center", // end after scrolling 500px beyond the start
      // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
      pin: true,
          
        },
        
      opacity:0,
      ease:"none",
      duration:3000,
      
        
      });

              
// gsap.to(".whale",{
        
//             scrollTrigger: {
//                 trigger: ".main",
//                      // pin the trigger element while active
//                 start: "bottom 30%", // when the top of the trigger hits the top of the viewport
//                 end: "+=100px", // end after scrolling 500px beyond the start
//                 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//                 // markers: true,
//                 // pin: true,
//                 // toggleActions: "restart pause reverse pause"
//                   },
                  
//                 // x:-500,  
//                 // y:-500,
//                 opacity:0,
//                 ease:"none",
//                 duration:3,
                
                  
//                 });

// gsap.to(".boat",{
        
//             scrollTrigger: {
//                 trigger: ".foresea",
//                      // pin the trigger element while active
//                 start: "bottom 50%", // when the top of the trigger hits the top of the viewport
//                 end: "+=100px", // end after scrolling 500px beyond the start
//                 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//                 markers: true,
//                 // pin: true,
//                 // toggleActions: "restart none reverse pause"
                    
//                   },
//                 // x:-500,  
//                 // y:-500,
//                 opacity:0,
//                 ease:"none",
//                 duration:3,

//                 });

                gsap.to(".boat",{

                  scrollTrigger: {
                        trigger: ".foresea",
                         // pin the trigger element while active
                        start: "bottom 30%", // when the top of the trigger hits the top of the viewport
                        end: "+=100px", // end after scrolling 500px beyond the start
                        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                        // markers: true,
                      },
                      opacity:0,
                      x:-500,  
                      y:-500,
                      ease:"none",
                      duration:0.1,
                    });

                    gsap.to(".whale",{

                      scrollTrigger: {
                            trigger: ".foresea",
                             // pin the trigger element while active
                            start: "bottom 50%", // when the top of the trigger hits the top of the viewport
                            end: "+=100px", // end after scrolling 500px beyond the start
                            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                            // markers: true,
                          },
                          opacity:0,
                          ease:"none",
                          duration:0.1,
                        });

                 gsap.to(".trash",{

                      scrollTrigger: {
                            trigger: ".foresea",
                             // pin the trigger element while active
                            start: "bottom 50%", // when the top of the trigger hits the top of the viewport
                            end: "+=100px", // end after scrolling 500px beyond the start
                            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                            // markers: true,
                          },
                          opacity:0,
                          ease:"none",
                          duration:0.1,
                        });

                        gsap.to(".top",{

                          scrollTrigger: {
                                trigger: ".foresea",
                                 // pin the trigger element while active
                                start: "bottom 50%", // when the top of the trigger hits the top of the viewport
                                end: "+=100px", // end after scrolling 500px beyond the start
                                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                // markers: true,
                              },
                              x:-100,  
                              y:-100,
                              ease:"none",
                              duration:0.1,
                            });



                gsap.to(".foresea",{

                  scrollTrigger: {
                        trigger: ".main",
                         // pin the trigger element while active
                        start: "center center", // when the top of the trigger hits the top of the viewport
                        end: "+=30px", // end after scrolling 500px beyond the start
                        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                        // markers: true,
                        
                      },
                    
                      x:-738,
                      ease:"none",
                      duration:1,
                    });



                    gsap.to(".allbox",{

                      scrollTrigger: {
                            trigger: ".main",
                             // pin the trigger element while active
                            start: "center center", // when the top of the trigger hits the top of the viewport
                            end: "+=30px", // end after scrolling 500px beyond the start
                            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                            // markers: true,
                            
                          },
                        
                          y:-300,
                          ease:"none",
                          duration:1,
                        });


                        gsap.to(".box1p5",{

                          scrollTrigger: {
                                trigger: ".box1",
                                 // pin the trigger element while active
                                start: "top center", // when the top of the trigger hits the top of the viewport
                                end: "60% 30%", // end after scrolling 500px beyond the start
                                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                // markers: true,
                                toggleActions: "play none none none"
                              },
                              scale: 1,
                              y:-130,
                              x:-130,
                              ease:"none",
                              duration:1,
                            });

                      
                            gsap.to(".big",{

                              scrollTrigger: {
                                    trigger: ".box1",
                                     // pin the trigger element while active
                                     start: "bottom 60%", // when the top of the trigger hits the top of the viewport
                                     end: "bottom 65%", // end after scrolling 500px beyond the start
                                    scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                    // markers: true,
                                    toggleActions: "play complete reverse reverse"
                                    
                                  },
                                  
                                  x:-1000,
                                  ease:"Linear.easeInOut",
                                  duration:3000,
                                });

                                gsap.to(".big2",{

                                  scrollTrigger: {
                                        trigger: ".box2",
                                         // pin the trigger element while active
                                        start: "bottom 60%", // when the top of the trigger hits the top of the viewport
                                        end: "bottom 65%", // end after scrolling 500px beyond the start
                                        scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                        // markers: true,
                                        toggleActions: "play none none none"
                                      },
                                      
                                      x:1200,
                                      ease:"none",
                                      duration:1,
                                    });

                                    gsap.to(".big3",{

                                      scrollTrigger: {
                                            trigger: ".box3",
                                             // pin the trigger element while active
                                             start: "bottom 70%", // when the top of the trigger hits the top of the viewport
                                             end: "+=50px", // end after scrolling 500px beyond the start
                                            scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                            // markers: true,
                                            toggleActions: "play none none none"
                                            
                                          },
                                          
                                          x:-1000,
                                          ease:"none",
                                          duration:1,
                                        });

                                        gsap.to(".box3water",{

                                          scrollTrigger: {
                                                trigger: ".box3",
                                                 // pin the trigger element while active
                                                 start: "bottom 80%", // when the top of the trigger hits the top of the viewport
                                                 end: "center center", // end after scrolling 500px beyond the start
                                                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                // markers: true,
                                                toggleActions: "play none none none"
                                                
                                              },
                                              opacity:0,
                                              y:-200,
                                              ease:"none",
                                              duration:1,
                                            });
    
                                            gsap.to(".big4",{

                                              scrollTrigger: {
                                                    trigger: ".box4",
                                                     // pin the trigger element while active
                                                    start: "bottom 60%", // when the top of the trigger hits the top of the viewport
                                                    end: "bottom 65%", // end after scrolling 500px beyond the start
                                                    scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                    // markers: true,
                                                    toggleActions: "play none none none"
                                                  },
                                                  
                                                  x:1200,
                                                  ease:"none",
                                                  duration:1,
                                                });

                                                gsap.to(".big5",{

                                                  scrollTrigger: {
                                                        trigger: ".box5",
                                                         // pin the trigger element while active
                                                        start: "bottom 60%", // when the top of the trigger hits the top of the viewport
                                                        end: "bottom 65%", // end after scrolling 500px beyond the start
                                                        scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                        // markers: true,
                                                        toggleActions: "play none none none"
                                                      },
                                                      
                                                      x:-1200,
                                                      ease:"none",
                                                      duration:1,
                                                    });

                                                    gsap.to(".big6",{

                                                      scrollTrigger: {
                                                            trigger: ".box6",
                                                             // pin the trigger element while active
                                                            start: "bottom 60%", // when the top of the trigger hits the top of the viewport
                                                            end: "bottom 65%", // end after scrolling 500px beyond the start
                                                            scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                            // markers: true,
                                                            toggleActions: "play none none none"
                                                          },
                                                          
                                                          x:1200,
                                                          ease:"none",
                                                          duration:1,
                                                        });

                                                // gsap.to(".box4fish",{

                                                //   scrollTrigger: {
                                                //         trigger: ".box4",
                                                //          // pin the trigger element while active
                                                //          start: "bottom 60%", // when the top of the trigger hits the top of the viewport
                                                //         end: "bottom 65%",  // end after scrolling 500px beyond the start
                                                //         scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                                                //         markers: true,
                                                //         toggleActions: "play none none none"
                                                        
                                                //       },
                                                      
                                                //       x: -600,
                                                //       y: -100,
                                                //       ease:"none",
                                                //       duration:1,
                                                //     });
                                           
                                       

                                
















                