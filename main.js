document.getElementById("burger-lines").addEventListener("click", function(){
    document.getElementById("burger").classList.add("open")
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("burger").classList.remove("open")
})

document.getElementById("plus").addEventListener("click", function(){
    document.getElementById("point").classList.add("green")
    document.getElementById("hidden").classList.add("hidden-block-visible")
    document.getElementById("minus").classList.add("hidden-block-visible")
    document.getElementById("plus").classList.add("plus-hidden")
})

document.getElementById("minus").addEventListener("click", function(){
    document.getElementById("point").classList.remove("green")
    document.getElementById("hidden").classList.remove("hidden-block-visible")
    document.getElementById("minus").classList.remove("hidden-block-visible")
    document.getElementById("plus").classList.remove("plus-hidden")
})