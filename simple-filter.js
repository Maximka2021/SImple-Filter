let allElements = document.getElementsByClassName('word');
let toyota = document.getElementById('word1');
let apple = document.getElementById('word2');
let red = document.getElementById('word3');
let green = document.getElementById('word4');
let honda = document.getElementById('word5');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');


var myArr = [
    {
        _name: toyota,
        _name2: 'Toyota',
        type: 'car'
    },
    {
        _name: apple,
        _name2: 'Apple',
        type: 'fruit'
    },
    {
        _name: red,
        _name2: 'Red',
        type: 'color'
    },
    {
        _name: green,
        _name2: 'Green',
        type: 'color'
    },
    {
        _name: honda,
        _name2: 'Honda',
        type: 'car'
    }
]

function funcAll(){
    for(let i = 0; i < myArr.length; i++){
        myArr[i]._name.style.display = 'block';
    }
}

function funcCar(){
    toyota.style.display = 'block';
    apple.style.display = 'block';
    red.style.display = 'block';
    green.style.display = 'block';
    honda.style.display = 'block';
    for(let i = 0; i < myArr.length; i++){
        if(myArr[i].type == 'car'){}
        else{
            myArr[i]._name.style.display = 'none';
        }
    }
}

function funcColor(){
    toyota.style.display = 'block';
    apple.style.display = 'block';
    red.style.display = 'block';
    green.style.display = 'block';
    honda.style.display = 'block';
    for(let i = 0; i < myArr.length; i++){
        if(myArr[i].type == 'color'){}
        else{
            myArr[i]._name.style.display = 'none';
        }
    }
}

function funcFruit(){
    toyota.style.display = 'block';
    apple.style.display = 'block';
    red.style.display = 'block';
    green.style.display = 'block';
    honda.style.display = 'block';
    for(let i = 0; i < myArr.length; i++){
        if(myArr[i].type == 'fruit'){}
        else{
            myArr[i]._name.style.display = 'none';
        }
    }
}