

var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {

        var mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

        }
        

        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("c1");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
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
        
//
        var modal2 = document.getElementById("myModal2");

        // Get the button that opens the modal
        var btn2 = document.getElementById("c2");
        
        // Get the <span> element that closes the modal
        var span2 = document.getElementsByClassName("close2")[0];
        
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
          if (event.target == modal) {
            modal2.style.display = "none";
          }
        }

//

        var modal3 = document.getElementById("myModal3");

        // Get the button that opens the modal
        var btn3 = document.getElementById("c3");
        
        // Get the <span> element that closes the modal
        var span3 = document.getElementsByClassName("close3")[0];
        
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
          if (event.target == modal) {
            modal3.style.display = "none";
          }
        }

//

        var modal4 = document.getElementById("myModal4");

        // Get the button that opens the modal
        var btn4 = document.getElementById("c4");
        
        // Get the <span> element that closes the modal
        var span4 = document.getElementsByClassName("close4")[0];
        
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
          if (event.target == modal) {
            modal4.style.display = "none";
          }
        }

//

        var modal5 = document.getElementById("myModal5");

        // Get the button that opens the modal
        var btn5 = document.getElementById("c5");
        
        // Get the <span> element that closes the modal
        var span5 = document.getElementsByClassName("close5")[0];
        
        // When the user clicks on the button, open the modal
        btn5.onclick = function() {
          modal5.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span5.onclick = function() {
          modal5.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal5.style.display = "none";
          }
        }
//
        var modal6 = document.getElementById("myModal6");

        // Get the button that opens the modal
        var btn6 = document.getElementById("c6");
        
        // Get the <span> element that closes the modal
        var span6 = document.getElementsByClassName("close6")[0];
        
        // When the user clicks on the button, open the modal
        btn6.onclick = function() {
          modal6.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span6.onclick = function() {
          modal6.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal6.style.display = "none";
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

        gsap.to(".st0",{
        
        scrollTrigger: {
            trigger: ".main2-text1",
             // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "bottom bottom", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            pin: true,
            toggleAction: "restart none none none"
          },
          scaleY:1.5,
          ease:"none",
          duration:5,
          
        });



        gsap.to(".taiwan",{
        
            scrollTrigger: {
                trigger: ".main2-text1",
                 // pin the trigger element while active
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "center center", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pin: true,
              },
              y:-450,
              opacity: 1,
              ease:"none",
              duration:1000,
              
            });


            gsap.to(".st1",{
        
        scrollTrigger: {
            trigger: ".main2-text1",
             // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "bottom bottom", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            pin: true,
          },
          scaleY:0.7,
          ease:"none",
          duration:5,
          
        });

        gsap.to(".barbar",{
        
          scrollTrigger: {
              trigger: ".rect2",
               // pin the trigger element while active
              start: "30% top", // when the top of the trigger hits the top of the viewport
              end: "+=100px", // end after scrolling 500px beyond the start
              scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              pin: true,
              toggleAction: "restart none none none",
              // markers: true,
            },
            y:-350,
            ease:"none",
            duration:3,
            
          });

          gsap.to(".bargray",{
        
            scrollTrigger: {
                trigger: ".rect2",
                 // pin the trigger element while active
                start: "30% top", // when the top of the trigger hits the top of the viewport
                end: "+=100px", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pin: true,
                toggleAction: "restart none none none",
                // markers: true,
              },
              y:-350,
              ease:"none",
              duration:3,
              
            });

        gsap.to(".earth",{
        
            scrollTrigger: {
                trigger: ".main2-text1",
                 // pin the trigger element while active
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "center center", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pin: true,
              },
              y:-250,
              opacity: 1,
              ease:"none",
              duration:250,
              
            });

            gsap.to(".main4-pic1",{
        
                scrollTrigger: {
                    trigger: ".main4",
                     // pin the trigger element while active
                    start: "top top", // when the top of the trigger hits the top of the viewport
                    end: "center center", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    pin: true,
                  },
                  y:-5,
                  opacity: 1,
                  ease:"none",
                  duration:250,
                  
                });        

               

                // $("#1").waypoint(
                //     function () {
                //       increment(1, 87);
                //     },
                //     { offset: "75%" }
                //   );


                //   function increment(elem, finalVal) {
                //     var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
                //     if (currVal < finalVal) {
                //       currVal++;
                //       document.getElementById(elem).innerHTML = currVal + "%";
                  
                //       setTimeout(function () {
                //         increment(elem, finalVal);
                //       }, 40);
                //     }
                //   }
                

    $(window).mousemove(function(evt){
        var pagex=evt.pageX;
        var pagey=evt.pageY;


        $(".main4-pic2").css("transform","translateX("+(pagex/-20+50)+"px)")
        $(".main4-pic3").css("transform","translateX("+(pagex/-10+50)+"px)")
        $(".main4-pic4").css("transform","translateX("+(pagex/-15+20)+"px)")
        $(".main4-pic1").css("transform","translateX("+(pagex/-40+20)+"px)")
        // $(".main4-text1").css("transform","translateX("+(pagex/-40+20)+"px)")
    })

    $('#1').waypoint(function() {
      increment(1, 90);
    }, {offset: '100%'});

    function increment(elem, finalVal) {
      var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
      if (currVal < finalVal) {
        currVal++;
        document.getElementById(elem).innerHTML = currVal + "%";
    
        setTimeout(function() {
          increment(elem, finalVal);
        }, 40)
      }
    };