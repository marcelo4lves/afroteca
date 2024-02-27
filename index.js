const menuItens = document.querySelectorAll('.links-a a[href^="#"]');

console.log(menuItens);

menuItens.forEach( item =>{
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');

    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to-48,
        behavior: "smooth"
    })
    console.log(id);
};

// Slider
let count =1;
document.getElementById("radio1").checked=true;

setInterval(function(){
 nextImage();
},5000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}