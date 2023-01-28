var numbers = [45, 48, 85, 25, 66, 99, 86, 33, 89, 100, 66, 59];
for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        continue;
    }
    console.log(number);
}