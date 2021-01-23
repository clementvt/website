window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};
//     document.getElementById('switch1').addEventListener("change", function(){
//     if (this.checked){window.location = './dark.html';};
// });

    var sheets = "";
     
function toggleTheme(checkbox){   
    sheets = document .getElementsByTagName('link');
    if(checkbox.checked){
            sheets[0].href = "./src/css/dark.css"
        }
        else{
            sheets[0].href = "./src/css/style.css"
        }
    }
