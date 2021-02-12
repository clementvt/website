window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let prog = document.querySelector('.progress-container');
    header.classList.toggle('sticky', window.scrollY > 0);
    prog.classList.toggle('sticky', window.scrollY > 0);
});
window.onscroll = function() {progressBar()};
window.addEventListener('load', () => {
    document.documentElement.className.replace("no-js","js");
    let loader = document.querySelector('.loader');
    loader.classList.add('fondu-out');    
});
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

window.onload = function(){
    var switch2toggle = document.getElementsByTagName("input");
    if(getLocaltime() > "17:00:00"){
        console.log("Switched on dark mode because of night.");
        sheets[0].href = "./src/css/dark.css";
        switch2toggle[1].checked = true;
    }

    if(getLocaltime() > "7:00:00"){
        sheets[0].href = "./src/css/style.css";
        switch2toggle[1].checked = false;
    }

    // gsap.registerPlugin(ScrollTrigger);
    // gsap.config({
    //     autoSleep: 60,
    //     force3D: false,
    //     nullTargetWarn: false,
    //     units: {left: "%", top: "%", rotation: "rad"}
    // });
    // var img = document.querySelector(".aboutdesc");

//     gsap.to(img, {
//         scrollTrigger: {
//             trigger: img, 
//             toggleActions: "restart pause resume pause",
//             start:"-800px",
//         },
//         z: "400",   
//         duration: 5,
//     });

// gsap.registerPlugin(ScrollTrigger);
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".splittext",
//     toggleActions: "restart none none none"
//   }
// }),
//   mySplitText = new SplitText(img, {
//     type: "words, lines, chars"
//   });

// tl.from(mySplitText.chars, { opacity: 0, y: 50, ease: "power2", stagger: 0.05 });

}

    var sheets = "";
    sheets = document.getElementsByTagName('link');
    
function toggleTheme(checkbox){   
    
    if(checkbox.checked){
            sheets[0].href = "./src/css/dark.css"
        }
        else{
            sheets[0].href = "./src/css/style.css"
        }
    }
  
    function getLocaltime(){
        return new Date().toLocaleTimeString();
      }
      console.log(getLocaltime());

      let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      const setColorScheme = e => {
        if (e.matches) {
          sheets[0].href = "./src/css/dark.css";
          console.log('Dark mode');
        }
      }
      setColorScheme(colorSchemeQueryList);
      colorSchemeQueryList.addListener(setColorScheme);
    



