function display(){
    let num=prompt("Enter your mobile number")
    try{
        if(isNaN(num))
            throw "Enter only number"
    }
    catch(error){
        document.getElementById('err').innerHTML=error
    }
    
}