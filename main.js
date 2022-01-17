var mousevent="empty"
var last_mouse_y, last_mouse_x
var current_mouse_y, current_mouse_x
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="black"
lineWidth=1

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mousevent="mousedown"
}
canvas.addEventListener("mousemove",mymousemove )
function mymousemove(e){
    current_mouse_x=e.clientX-canvas.offsetLeft
    current_mouse_y=e.clientY-canvas.offsetTop

    if (mousevent == "mousedown"){
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = color
        ctx.moveTo(last_mouse_x , last_mouse_y)
        ctx.lineTo(current_mouse_x , current_mouse_y)
        ctx.arc(current_mouse_x,current_mouse_y,20,0,2*Math.PI)
        ctx.stroke()
    } 

    last_mouse_x = current_mouse_x
    last_mouse_y = current_mouse_y
    

}

canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
mousevent = "mouseup"
}