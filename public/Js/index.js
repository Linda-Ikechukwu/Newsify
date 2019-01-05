const header = document.querySelector(".header");
const topBtn = document.querySelector(".top");
const filterForm1 = document.querySelector(".filter-form1");
const filterForm2 = document.querySelector(".filter-form2");
window.addEventListener('scroll', sticky = () => {
  if( window.pageYOffset >= 270){
    header.classList.add('header-sticky');
    filterForm1.style.display = "none";
    filterForm2.style.display = "none";
  }else{
    header.classList.remove('header-sticky');
    filterForm1.style.display = "block";
    filterForm2.style.display = "block";
  }
});

topBtn.addEventListener("click", scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} );


function showTopBtn(){
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000){
    topBtn.style.display = "block";
  }
  else{
    topBtn.style.display = "none";
  }
}






