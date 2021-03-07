window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let prog = document.querySelector('.progress-container');
    header.classList.toggle('sticky', window.scrollY > 0);
    prog.classList.toggle('sticky', window.scrollY > 0);
});
window.onscroll = function() {progressBar()};
window.addEventListener('load', () => {
    document.documentElement.className.replace("no-js","js");  
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
    // var switch2toggle = document.getElementsByTagName("input");
    // if(getLocaltime() > "17:00:00"){
    //     console.log("Switched on dark mode because of night.");
    //     sheets[0].href = "./src/css/dark.css";
    //     switch2toggle[0].checked = true;
    //     switch2toggle[1].checked = true;
    //     new Notify({
    //         title: 'Information',
    //         text: 'Vous avez été redirigé vers la version noire du site.',
    //         autoclose: true,
    //         autotimeout: 4000,
    //         gap: 10,
    //         position: 'right bottom',
    //         customIcon: '<i class="fas fa-info-circle" style="font-size:30px"></i>'
    //     });
    // };

    // if(getLocaltime() > "7:00:00"){
    //     sheets[0].href = "./src/css/style.css"
    //     switch2toggle[0].checked = false
    //     switch2toggle[1].checked = false;
    // };

    // var colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    //   var setColorScheme = e => {
    //     if (e.matches && getLocaltime() < "17:00:00") {
    //       sheets[0].href = "./src/css/dark.css";
    //       console.log('Dark mode by user agent dark');
    //       switch2toggle[0].checked = true;
    //       switch2toggle[1].checked = true;
    //       new Notify({
    //         title: 'Information',
    //         text: 'Vous avez été redirigé vers la version noire du site.',
    //         autoclose: true,
    //         autotimeout: 4000,
    //         gap: 10,
    //         position: 'right bottom',
    //         customIcon: '<i class="fas fa-info-circle"></i>'
    //     });
    //     };
    //   };
    //   setColorScheme(colorSchemeQueryList);
    //   colorSchemeQueryList.addListener(setColorScheme);
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

        //   var notif = new Notify({
        //     title: 'Information',
        //     text: 'Vous avez été redirigé vers la version noire du site.',
        //     autoclose: true,
        //     autotimeout: 4000,
        //     gap: 10,
        //     position: 'right bottom'
        // });

     

    



