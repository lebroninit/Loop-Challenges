//Print odds

for(var i = 1; i < 21; i++){
    if(i%2==1){
        console.log(i);
    }
}

// Decreasing Multiples of 3\

for(var i = 100; i > -1; i--){
    if(i%3==0){
        console.log(i);
    }
}

//Print the sequence

for(var i = 4; i > -4; i-=1.5){
    console.log(i);
}

//Sigma
var sum = 0;
for(var i = 1; i < 101; i++){
    sum += i;
}
console.log(sum);

//Factorial
var fac = 1;
for(var i = 1; i < 13; i++){
    fac*=i;
}
console.log(fac);