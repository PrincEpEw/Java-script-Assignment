let number = 1;
for (let i = 10000; i <= 10050; i++) {
        if (i == 10050) {
                for (let j = 10050; j >10000; j--) {
                        console.log(`Total Count of Numbers   ${number} : ${j}`);
                        number = number+1;
                }
        }
}

