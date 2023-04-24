export {}
let a = 'lets gooooo'
console.log(a)

class app{
    test(){
        console.log('hello shangy')
    }
    num(){
        let n:number=7
        console.log(n)
    }
    str(){
        let s:string='shangy'
        console.log(s)
    }
    bool(){
        let bl:boolean=true
        console.log(bl)
    }
}
let b= new app
b.test()
b.num()
b.str()
b.bool()
class day{
    test1(){
        let data:string[]=['one','two']
        data.push('three')
        console.log(data)
    }
}
let c= new day
c.test1()