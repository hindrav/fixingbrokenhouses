const button = document.querySelector('.lamp-bottom');
const light = document.querySelector('.lamp-light');
const container = document.querySelector('.about-text');
const lamp = document.querySelector('.lamp');

light.classList.toggle('open');
light.style.display = 'block';

function turnOn(){
    return container.classList.remove('totl');
}

function turnOff(){
    return container.classList.add('totl');
}

button.addEventListener('click', () => {
    light.classList.toggle('open');
    if(light.classList.contains('open')){
        turnOn();
    }
    else{
        turnOff();
    }
})