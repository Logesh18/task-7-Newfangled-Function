/***************1: Array Slice ******************** */
function slice(modifiedFood,s,e){
    return modifiedFood.slice(s, e);
 }
/*************** 2: Array Splice ******************** */
function splice(foods,position,count){
    let modifiedFood=foods.splice(position,count,'noodles', 'icecream');
    console.log(modifiedFood);
    return foods;
}
/******************3: Filter ********************* */
function isPrime(v){
    let c=0;
    for(i=2;i<v;i++){
        if(v%i==0){
            c++;
            break;
        }
    }
    if(c==0){
        return true;
    }
 }
 function isEven(v){
     if(v%2==0){
         return true;
     }
 }
 /******************4: Reject ******************** */
 function nonPrime(v){
    let c=0;
    for(i=2;i<v;i++){
        if(v%i==0){
            c++;
            break;
        }
    }
    if(c!=0){
        return true;
    }
 }
 /*******************5: Lambda ********************* */
const numberArray = [12,324,213,4,2,3,45,4234]; 
lambda_isEven = (n) => n%2==0;
console.log(numberArray.filter(lambda_isEven));
/********************6: Map ********************** */
function  findSquareOfNumbers(v){
    return v*v;
}
/*******************7: Reduce ********************* */
function multiply(result, item) {
    return result * item;
}
/**************combination of map and reduce**************/