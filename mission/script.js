
let selectElem = document.querySelector('select');
let contentElem = document.querySelector('div');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        logo.src = "images/byui-logo-white.png";
        document.body.style.backgroundColor = '#121212';
        contentElem.style.color = 'white';
    } else {
        // code for changes to colors and logo
        logo.src = "images/byui-logo-blue.webp";
        document.body.style.backgroundColor = 'white';
        contentElem.style.color = 'black';
    }
}           
                    