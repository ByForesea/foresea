var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {

        var mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

        }






// When the user clicks on the button, scroll to the top of the document
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }


        function openNav() {
        document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        }

        function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        }

       
        gsap.registerPlugin(ScrollTrigger);

    //     gsap.to(".main3", {
      
    //   scrollTrigger: {
    //     trigger: ".main3",
    //     toggleActions:"restart none none none ",
    //     start: "top center",
    //     end: "bottom bottom",
        
        
    // },
    //     backgroundColor:"rgba(47,70,100,1)",
    //     duration:0.5, 
    // });
    
    gsap.to(".trash", {
      
      scrollTrigger: {
        trigger: ".main3",
        toggleActions:"restart none reverse none ",
        start: "top center",
        end: "bottom bottom",
        
    },
        y:50,
        duration:2, 
        
    });

gsap.to(".main2-pic5",{

scrollTrigger: {
      trigger: ".main2-pic3",
       // pin the trigger element while active
      start: "center center", // when the top of the trigger hits the top of the viewport
      end: "center center", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    },
    x:-350,
    ease:"none",
    duration:5,
    
  });


  gsap.to(".main2-pic4",{

    scrollTrigger: {
          trigger: ".main2-pic3",
           // pin the trigger element while active
          start: "center center", // when the top of the trigger hits the top of the viewport
          end: "center 60px", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers: true,
        },
        x:-330,
        ease:"none",
        duration:5,
        
      });

  gsap.to(".main2-text",{

    scrollTrigger: {
          trigger: ".main2-pic3",
           // pin the trigger element while active
          start: "center center", // when the top of the trigger hits the top of the viewport
          end: "center 60px", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers: true,
        },
        x:330,
        ease:"none",
        duration:5,
        
      });



gsap.to(".fish",{

scrollTrigger: {
      trigger: ".main5",
       // pin the trigger element while active
      start: "center center", // when the top of the trigger hits the top of the viewport
      end: "+=1300px", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      pin: true,
      // markers: true,
    },
    x:3450,
    ease:"none",
    duration:(5000),
    
  });



  gsap.to(".say",{

scrollTrigger: {
      trigger: ".main5",
       // pin the trigger element while active
      start: "20px 80%", // when the top of the trigger hits the top of the viewport
      end: "bottom bottom", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      
    },
    opacity:1,
    x:1000,
    ease:"none",
    duration:0.1,
  });



gsap.to(".main5-pic2",{

scrollTrigger: {
      trigger: ".fish",
       // pin the trigger element while active
      start: "bottom 30%", // when the top of the trigger hits the top of the viewport
      end: "+=200px", // end after scrolling 500px beyond the start
      scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
      
    },
    opacity:0,
    scale:0.8,
    ease:"Power1.easeInOut",
    duration:3000,
  });


  gsap.to(".poison5",{

    scrollTrigger: {
          trigger: ".fish",
           // pin the trigger element while active
          start: "bottom 30%", // when the top of the trigger hits the top of the viewport
          end: "+=600px", // end after scrolling 500px beyond the start
          scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers: true,
          
        },
        opacity:1,
        ease:"Power1.easeInOut",
        duration:3000,
      });

      gsap.to(".main5-text2",{

        scrollTrigger: {
              trigger: ".fish",
               // pin the trigger element while active
              start: "bottom 30%", // when the top of the trigger hits the top of the viewport
              end: "+=600px", // end after scrolling 500px beyond the start
              scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              // markers: true,
              
            },
            opacity:1,
            ease:"Power1.easeInOut",
            duration:3000,
          });

          gsap.to(".main5-text1",{

            scrollTrigger: {
                  trigger: ".fish",
                   // pin the trigger element while active
                  start: "bottom 30%", // when the top of the trigger hits the top of the viewport
                  end: "+=600px", // end after scrolling 500px beyond the start
                  scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                  // markers: true,
                  
                },
                opacity:0,
                ease:"Power1.easeInOut",
                duration:3000,
              });

              gsap.to(".step1",{

                scrollTrigger: {
                      trigger: ".main4",
                       // pin the trigger element while active
                      start: "center center", // when the top of the trigger hits the top of the viewport
                      end: "+=100px", // end after scrolling 500px beyond the start
                      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                      // markers: true,
                      
                      
                    },
                    opacity:1,
                    ease:"Power1.easeInOut",
                    duration:3000,
                  });

                  gsap.to(".step2",{

                    scrollTrigger: {
                          trigger: ".main4",
                           // pin the trigger element while active
                          start: "center 40%", // when the top of the trigger hits the top of the viewport
                          end: "+=600px", // end after scrolling 500px beyond the start
                          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                          // markers: true,
                          
                        },
                        opacity:1,
                        ease:"Power1.easeInOut",
                        duration:3000,
                      });
                      gsap.to(".step3",{

                        scrollTrigger: {
                              trigger: ".main4",
                               // pin the trigger element while active
                              start: "center center", // when the top of the trigger hits the top of the viewport
                              end: "+=1100px", // end after scrolling 500px beyond the start
                              scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                              // markers: true,
                              pin: true,
                            },
                            opacity:1,
                            ease:"Power1.easeInOut",
                            duration:3000,
                          });
    
      



          var modal = document.getElementById("myModal");
        
        // Get the button that opens the modal
        var btn = document.getElementById("c1");
     
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("circletext")[0];
       
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    
        
        var modal2 = document.getElementById("myModal2");
        
        // Get the button that opens the modal
        var btn2 = document.getElementById("c2");
     
        // Get the <span> element that closes the modal
        var span2 = document.getElementsByClassName("circletext2")[0];
       
        // When the user clicks on the button, open the modal
        btn2.onclick = function() {
          modal2.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span2.onclick = function() {
          modal2.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal2) {
            modal2.style.display = "none";
          }
        }


        var modal3 = document.getElementById("myModal3");
        
        // Get the button that opens the modal
        var btn3 = document.getElementById("c3");
     
        // Get the <span> element that closes the modal
        var span3 = document.getElementsByClassName("circletext3")[0];
       
        // When the user clicks on the button, open the modal
        btn3.onclick = function() {
          modal3.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span3.onclick = function() {
          modal3.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal3) {
            modal3.style.display = "none";
          }
        }


        var modal4 = document.getElementById("myModal4");
        
        // Get the button that opens the modal
        var btn4 = document.getElementById("c4");
     
        // Get the <span> element that closes the modal
        var span4 = document.getElementsByClassName("circletext4")[0];
       
        // When the user clicks on the button, open the modal
        btn4.onclick = function() {
          modal4.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span4.onclick = function() {
          modal4.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal4) {
            modal4.style.display = "none";
          }
        }