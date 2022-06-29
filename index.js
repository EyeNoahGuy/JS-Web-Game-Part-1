let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

function tile(url,left,bottom,width, height){
    for(let h=0; h< height h++){
        for(let w = 0; w < width; w++){
            newImage(url,left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dbclick',() => {
        object.remove()
    })
}

let heightOfSky = window.innerHeight-horizon
let horizon = window.innerHeight / 1
let heightOfGrass = horizon
//Background
tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

//Enviroment 
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200 , 300)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/well.png', 500 , 400)
newImage('assets/pillar.png', 300, 100)
newImage('assets/crate.png', 100 , 200)

//Items
newItem('assets/sword.png', 500, 400)
newItem('assets/shield.png', 150 , 150)
newItem('assets/staff.png', 500 , 100)

//Placement of Player
const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/static.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

//Item Movements
move(newItem('assets/tree.png')).to(200, 450)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/well.png')).to(500, 575)
move(newImage('assets/shield.png')).to(165, 335)
move(newImage('assets/staff.png')).to(600, 250)
move(newImage('assets/sword.png')).to(500, 555)