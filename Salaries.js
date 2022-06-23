let  salary = prompt("enter salary");

        if (salary >= 1 || salary <=5000) {
            console.log('proposed increase is : ', salary*0.05);
        }else if (salary >= 5001 || salary <=10000) {
            console.log('proposed increase is : ', salary*0.042);
        }else if (salary >= 10001 || salary <=100001) {
            console.log('proposed increase is : ', salary*0.035);
        }else{
            console.log('proposed increase is : ', salary*0.02)