let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
console.log({ buttons });
let arr = Array.from(buttons);
console.log({ arr });
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})
