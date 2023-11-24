
// 1. [] == true what is the answer true or false?
if ([] == true){
    console.log(true)
}
else{
    console.log(false)
}

// 2. ture === ture 
if (true === true){
    console.log(true)
}
else{
    console.log(false)
}

// 3. only number value is true other than false
const arrowFunction = (value) =>{
    if (typeof value == 'number'){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
arrowFunction('1');