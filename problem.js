//1.

//If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution
//so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

const solution = number => {
    let sum = 0;
    for(let i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    console.log(sum)
}
//solution(10)
// *************************************************************************************

// 2.
// Create a function that takes an integer as an
// argument and returns "Even" for even numbers or "Odd" for odd numbers.

function oddAndEvent(number){
    if( number % 2 === 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
//oddAndEvent(8)

// shortCut way 
const odd_or_even = number => {
    //ternary operator
    return number % 2 === 0 ? 'Even' : 'Odd';
}
//const result = odd_or_even(10);
//console.log(result);

// *************************************************************************************