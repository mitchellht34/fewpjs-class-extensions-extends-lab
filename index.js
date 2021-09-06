// Your code here

class Polygon{
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.count
    }

    get perimeter(){
        let perimeter = 0
        for(const element of this.sides){
            perimeter += element
        }
        return perimeter
    }
}

class Triangle extends Polygon{
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        return ((a + b > c) && (a + c > b) && (b + c > a))
    }
}

class Square extends Polygon{
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        const d = this.sides[3]
        return ((a === b) && (b === c) && (c == d))
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }
}