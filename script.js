let color1 = document.getElementById("input1")
let color2 = document.getElementById("input2")
let body = document.getElementsByTagName("body")[0]

color1.addEventListener("input", function(){
    body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`;
    console.log(body.style.background)
})

color2.addEventListener("input", function(){
    body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`;
    console.log(body.style.background)
})