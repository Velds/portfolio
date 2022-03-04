

function closeMenu() {
    this.document.getElementById("menu").style.zIndex = "0";
    this.document.getElementById("menu").style.opacity = "0";
    this.document.getElementById("menu-bar").style.opacity = "100";
    console.log("close");
}

function openMenu(){
    this.document.getElementById("menu").style.zIndex = "10000";
    this.document.getElementById("menu").style.opacity = "100";
    this.document.getElementById("menu-bar").style.opacity = "0";
    console.log("open");
}


// var about = document.getElementById("about");
y = window.scrollY + document.querySelector('#btn').getBoundingClientRect().top
// y = getOffset(about).top
console.log(y)
let bg = document.getElementById("bg");
let bird = document.getElementById("bird");
let tree = document.getElementById("tree");
let text = document.getElementById("text");
window.addEventListener('scroll', function(){
    var value = this.window.scrollY;
    
    bg.style.top = value * 0.5 + 'px';
    bird.style.right = -value * 0.25 + 'px';
    // console.log(value);
    if(value > y){
       this.document.getElementById("up").style.display = "block";
    }
    else{
        this.document.getElementById("up").style.display = "none";
    }
})


