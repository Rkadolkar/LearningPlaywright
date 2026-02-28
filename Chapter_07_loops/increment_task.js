//++a ==change me then use me 
//a++=use me then change me 

let a = 5
// value of a before calc is 5
let b = a++ + ++a
//a++=5 + 6+1=12 
//value of a after b cal is 7 (last calculation of a is 7)

//let c = a++ + ++a + ++a + ++a + a++
let c = ++a + ++a + ++a + ++a + a++

//c=7+(8+1)+(9+1)+(10+1)+11=48
//value of a after c cal is 12 (last calculation of a is 11+1=12)
console.log(a)
console.log(b)
console.log(c)

