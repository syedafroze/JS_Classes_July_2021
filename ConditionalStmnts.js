
///if, else , else if 
//ternarary operator 
// switch case 

let num = 15 ;

/*
if(condition){
    //code 
}
else{
    
}


*/
if(num<10){
    console.log("fail");
}
else if(num==10){
    console.log("promoted");
}
else{
    console.log("pass")
}


//ternarary Operator  

/*
(condition)?console.log("true"):console.log("false")
*/

(num<5)?console.log("fail") : console.log("pass")



//switch case 

// + -*

// 6 +7 (+ => operator , 6, 7 operands )


let num1 = 6;
let num2 = 7;

let opr ="$" ;

switch(opr){
    case "+" : console.log(num1+num2) ; break;
    case "-" : console.log(num1-num2);break ;
    default : console.log("invalid operation");
}




