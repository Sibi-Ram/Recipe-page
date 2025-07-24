const headerEl=document.getElementById('header-img')
const mediaQuery=window.matchMedia('(min-width:37.5em)')

mediaQuery.addEventListener("change" , function(mediaQuery){

if(mediaQuery.matches){
  headerEl.classList.add('container')
}
else{
   headerEl.classList.remove('container')

}

})


