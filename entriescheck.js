class Boots {
    constructor (brand, color, height){
        this.brand = brand,
        this.color = color,
        this.height = height
    }
    walk(){
        console.log('boots are made for walking')
        return null
    } 
    stomp() {
        return `These ${this.color} boots are stomping through puddles up to ${this.height} high`
    }
    whatis() {
        return this.entries()
    }
}

let acgNikes = new Boots('Nike', 'Black', '10"')

