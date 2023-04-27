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


// object in typescript
interface usersTyped{
    name:string,
    age:number,
    address:any,
    getName:()=>string
}  
let users:usersTyped={
    name: 'shangy',
    age: 10,
    address: 'sdfghjk',
    getName:function(){
       return 'mangal'
    }
    
}
users.age=18
console.log(users)
console.log(users.getName())

//union types
let s:string|number|boolean='hello'
s=30
s=true
s='dhangy'
console.log(s)

// functions

// #1
function cal(){
    return 10+20
}
console.log(cal())

// #2
function cals(a: string)
{
    return a
}
console.log(cals('wow'))

// #3
function calc():number
{
 return 100
}
console.log()

// #4         optional parameter
function calt(j:number , k?:number)
{
    return k?j+k:j;
}
console.log(calt(100))

// class in typescirpt

class dot{
    name:string='mangal'
    constructor(name:string)
    {
        this.name = name
    }
    get_name():string
    {
        return this.name
    }
}
let d1 = new dot('shangy')
console.log(d1.get_name())

// inhertiance
 class parent{
  name:string
  set_n(name):void
  {
    this.name=name
  }
 }
 class child extends parent{ 
   get_n():string
   {
    return this.name
   }
 }
 let c1 = new child()
 c1.set_n('peter')
 console.log(c1.get_n())

//  Generics

function user_ <T>(detail:T):T
{
  return detail
}
console.log(user_({name:'sanga',age:50}).name)

// enum
enum Days{
    sun='sun',mon='mon',tue='tue',wed='wed',thu='thu',fri='fri',sat='sat'
}

function whichday(day:Days)
{
  return 'today is '+day
}
console.log(Days.tue)

// Symbol

let grt_sym:any

class demo{
    [grt_sym](){
        return 'some data with symbol'
    }
}
let s1 =new demo
console.log(s1[grt_sym]())