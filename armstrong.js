function CheckIsArmstrongNumber() {
    var number = parseInt(f1.t1.value);
    let sum = 0;
    const numberOfDigits = number.toString().length;

    let temp = number;
    while (temp > 0) {

        let digit = temp % 10;

        sum += Math.pow(digit, numberOfDigits);

        temp = Math.floor(temp / 10);

    }
    let res = document.getElementById('result');
    
    if(sum===number )
        res.innerHTML = 'The number is an Armstrong Number';
    else
        res.innerHTML = 'The number is Not an Armstrong Number';
    
}
