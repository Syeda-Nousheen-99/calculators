let screen = document.getElementById('display');
let button = document.querySelectorAll('button');

let string = "";
for(item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerHTML;
        console.log('button is ', buttonText);
        if (buttonText == '='){
           string = eval(string);
            screen.value = string;
        }
        else if(buttonText == 'AC'){
            string = "";
            screen.value = string;
        }
        else if (buttonText == 'DEL'){
            string =  string.substring(0, string.length-1);
            screen.value = string;
        }
        else {
            string += buttonText;
            screen.value = string
        }
    })
}