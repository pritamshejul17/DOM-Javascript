const elements = document.querySelectorAll('.clash-card__unit-stats.clash-card__unit-stats--barbarian.clearfix')

for(const element of elements){
    element.style.backgroundColor = '#ec9b3b';
    element.style.color = '#ffffff';
}

const archers = document.querySelectorAll('.clash-card__unit-stats.clash-card__unit-stats--archer.clearfix')


for(const archer of archers){
    archer.style.backgroundColor = '#ee5487';
    archer.style.color = '#ffffff';
}

const giants = document.querySelectorAll('.clash-card__unit-stats.clash-card__unit-stats--giant.clearfix')

for(const giant of giants){
    giant.style.backgroundColor = '#f6901a';
    giant.style.color = '#ffffff';
}

const goblins = document.querySelectorAll('.clash-card__unit-stats.clash-card__unit-stats--goblin.clearfix')

for(const goblin of goblins){
    goblin.style.backgroundColor = '#82bb30';
    goblin.style.color = '#ffffff';
}


const wizards = document.querySelectorAll('.clash-card__unit-stats.clash-card__unit-stats--wizard.clearfix')

for(const wizard of wizards){
    wizard.style.backgroundColor = '#4facff';
    wizard.style.color = '#ffffff';
}


const nums = document.querySelectorAll('.clash-card div:nth-child(3)')

for(const num of nums){
    num.style.color =  '#ffffff';
}
