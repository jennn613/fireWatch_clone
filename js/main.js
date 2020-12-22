'use strict';

const navUl = document.querySelector('ul');
const navMenu = navUl.querySelectorAll('li');

navMenu[0].classList.add('active');

navMenu.forEach((li, i)=> { 

    li.addEventListener('click', (e)=> {
        e.preventDefault();

        navMenu.forEach((l)=> {
          l.classList.remove('active');
        });

        navMenu[i].classList.add('active');
    });


});

const viewBox = document.querySelector('.viewBox');

viewBox.style.height = window.innerHeight + 'px';

for(let i=0; i<9; i++){
    
    const createDiv = document.createElement('div');
    viewBox.append(createDiv);
    
    const imgBox = viewBox.querySelectorAll('div');
    
    imgBox.forEach((div, j)=> {
        
        let imgUrl = `url('../img/parallax${j}.png')`;
        div.style.backgroundImage = imgUrl;
    });
}

const gameIntro = document.querySelector('.game_intro');
const gameIntroTitle = gameIntro.querySelector('h5');

gameIntroTitle.innerHTML = `Firewatch is a mystery set in the Wyoming<br />wilderness, where your only emotional lifeline is<br /> the person on the other end of a handheld<br /> radio.`

const gameIntroLeft = document.querySelector('.game_intro_left');
const gameIntroRight = document.querySelector('.game_intro_right');

gameIntroLeft.innerHTML = `The year is 1989. <br />
<br />
You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe. <br />
<br />

An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to you`

gameIntroRight.innerHTML = `at all times over a small, handheld radio—and is your only contact with the world you've left behind.<br />
<br />

But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.`

const screenshotsWrap = document.querySelector('.screenshots');
const screenshotList = screenshotsWrap.querySelector('ul');
const imgDes = ['turtle', 'forest', 'house', 'map'];
let picNum = 4;

for(let i=0; i<picNum; i++){

    const addList = document.createElement('li');
    let liCode = `<a href="#"><img src="" class="img"/><span class="hidden">${imgDes[i]}</span></a>`;

    addList.innerHTML= liCode;

    screenshotList.append(addList);
}

const screenshots = screenshotList.querySelectorAll('li');

    const img = document.querySelectorAll('.img');

    img.forEach((img, idx)=> {
        img.setAttribute('src', `../img/firewatch_0${idx+1}.jpg`);
    });

