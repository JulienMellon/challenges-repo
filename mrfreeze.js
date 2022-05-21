//There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

const MrFreeze = {
    name: 'Freeze', 
    enemy: 'Batman',
    taunt(){
        console.log(`You can't stop my Freeze Ray!`)
    }
}
Object.freeze(MrFreeze)

MrFreeze.height = 6 // property not added
