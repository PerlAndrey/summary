function loader(){
    document.getElementById("article__design__name").style.display = 'none'

   document.getElementById("article__design__maket").style.display = 'none'

   document.getElementById("article__design__icon").style.display = 'none'

   document.getElementById("article__design__list").style.display = 'none'

   document.getElementById("circularG").style.display = 'block'

    

   setInterval(
       ()=>{document.getElementById("circularG").style.display = 'none'},3000)
   setTimeout(()=>{document.getElementById("article__design__list").style.display = 'block'},3200)
    return true}


    


function loader__frontend(){
   document.getElementById("article__frontend__name").style.display = 'none'
   document.getElementById("article__frontend__verstka").style.display = 'none'
    document.getElementById("article__frontend__app").style.display = 'none'
    document.getElementById("article__frontend__icon__html").style.display = 'none'
    document.getElementById("circularGS").style.display = 'block'
    setInterval(
        ()=>{document.getElementById("circularGS").style.display = 'none'},3000)
    setTimeout(()=>{document.getElementById("article__verstka__list").style.display = 'block'},3200)
     return true}

     function loader__frontend__app(){
   document.getElementById("article__frontend__name").style.display = 'none'
   document.getElementById("article__frontend__verstka").style.display = 'none'
    document.getElementById("article__frontend__app").style.display = 'none'
    document.getElementById("article__frontend__icon__html").style.display = 'none'
    document.getElementById("circularGS").style.display = 'block'
    setInterval(
        ()=>{document.getElementById("circularGS").style.display = 'none'},3000)
    setTimeout(()=>{document.getElementById("article__app__list").style.display = 'block'},3200)
     return true}

function  launch(){
    document.getElementById("footer_photo__message").style.display = "none"
    document.getElementById("launch").style.display = "none"
    return false
}




setInterval(() => {
    document.getElementById("gmailone").style.display = 'block'
    document.getElementById("gmailtwo").style.display = 'none'
},1000);



setInterval(() => {
    document.getElementById("gmailone").style.display = 'none'
    document.getElementById("gmailtwo").style.display = 'block'
},800);


function myFunction() {
    document.getElementById("tooltiptext").innerHTML = "Скопировано"
 let copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
  }

  