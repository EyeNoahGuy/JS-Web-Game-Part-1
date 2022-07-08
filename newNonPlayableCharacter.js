function newNonPlayableCharacter(x,y){
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    let direction = null;
//NPC Face Directions
    function moveCharacter(){
        if (direction === 'west'){
            x -= 1
        }
        if (direction === 'east'){
            x += 1
        }
        if (direction === 'north'){
            y += 1
        }
        if (direction === 'south'){
            y -= 1
        }
        element.style.bottom = y + 'px'
        element.style.left = x + 'px'
    }
}
setInterval (moveCharacter, 1)
async function walkEast(time){
    direction = 'east'
    element.src = './assets/red-character/east.gif'
    await sleep(time)
    stop()
}
async function walkWest(time){
    direction = 'west'
    element.src = './assets/red-character/west.gif'
    await sleep(time)
    stop()
}
async function walkNorth(time){
    direction = 'north'
    element.src = './assets/red-character/north.gif'
    await sleep()
    stop()
}
async function walkSouth(time){
    direction = 'south'
    element.src = './assets/red-character/south.gif'
    await sleep(time)
    stop()
}
function stop(){
    direction = null
    element.src = './assets/red-character/static.gif'
}
return{
    element: element,
    walkWest: walkWest,
    walkEast: walkEast,
    walkNorth: walkNorth,
    walkSouth: walkSouth,
    stop: stop
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}