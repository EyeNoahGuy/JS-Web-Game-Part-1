function move(element){
    element.style.position = 'fixed'


function moveToCoordinates(left,bottom){
    element.style.left = left + 'px'
    element.syle.bottom = bottom + 'px'
}

return{
    to: moveToCoordinates
}
}