const characterCard = {
    name:'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'images/snortleblat.webp',
    attacked : function () {
        if(this.health > 0)
        {
            this.health -= 20;
        }
        if(this.health <= 0)
        {
            alert("Character Died");
        }
    },
    levelUp : function () {
        this.level++;
    }
}

document.querySelector('.name').textContent = characterCard.name;
document.querySelector('.class').innerHTML = `<strong>Class</strong>: ${characterCard.class}`;
document.querySelector('.level').innerHTML = `<strong>Level</strong>: ${characterCard.level}`;
document.querySelector('.health').innerHTML = `<strong>Health</strong>: ${characterCard.health}`;
document.querySelector('.image').setAttribute('src', characterCard.image);
document.querySelector('.image').setAttribute('alt', characterCard.name);

document.getElementById("attacked").addEventListener("click", () => {
    characterCard.attacked();
    document.querySelector('.health').innerHTML = `<strong>Health</strong>: ${characterCard.health}`;
});
document.getElementById("level-up").addEventListener("click", () => {
    characterCard.levelUp();
    document.querySelector('.level').innerHTML = `<strong>Level</strong>: ${characterCard.level}`;
});