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

const ages = ["a", "ab", "ac", "dc" ];

const myArr = [1, [2, 3], 4,[5,[6]]];



console.log(
    ages.filter((it) => it != "a",
    )
    ,
    myArr.flatMap(v => v)
);


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log({
    year
});

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const nums = [4,8,6,4,65,548,4154,54,4];

console.log(fruits,nums);
console.log(nums.reverse());

fruits.sort();
console.log(fruits);
nums.sort((a,b) => b - a)
console.log(nums);



