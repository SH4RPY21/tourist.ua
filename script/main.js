'use strict';

const layer = document.querySelector('body'),
    select = document.querySelector('#select');

// select.addEventListener('change', function() {
//     switch(true) {
//         case(this.value === 'Дніпро'): layer.style.cssText = "background: url('./img/Dnipro.jpg'); background-repeat: no-repeat; background-size: cover";
//             break;

        // case(this.value === 'Львів'): layer.style.cssText = "background: url('./img/Lviv.jpg'); background-repeat: no-repeat; background-size: cover";
        //     break;

//         case(this.value === 'Одеса'): layer.style.cssText = "background: url('./img/Odesa.jpg'); background-repeat: no-repeat; background-size: cover";
//             break;

//         case(this.value === 'Херсон'): layer.style.cssText = "background: url('./img/Kherson.jpg'); background-repeat: no-repeat; background-size: cover";
//             break;

//         default: layer.style.cssText = "background: url('./img/Kyiv.png'); background-repeat: no-repeat; background-size: cover";
//     }
// });


cities.forEach(elem => {
    const option = document.createElement('option');
    option.textContent = elem.name;
    option.value = elem.name;

    select.append(option);
});

select.addEventListener('change', function() {
    applyStyles(this.value);
});

function applyStyles(val) {
    cities.forEach(elem => {
        if (val === elem.name) {
            layer.style.cssText = `background: url('${elem.src}'); background-repeat: no-repeat; background-size: cover`;
        } else {
            return;
        };
    });
};

document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Ви обрали місто для подорожі!');
});
