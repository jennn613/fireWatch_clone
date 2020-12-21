'use strict';

const gameIntro = document.querySelector('.game_intro');
const gameIntroTitle = gameIntro.querySelector('h5');

gameIntroTitle.innerHTML = `Firewatch is a mystery set in the Wyoming<br />wilderness, where your only emotional lifeline is<br /> the person on the other end of a handheld<br /> radio.`

const gameIntroLeft = document.querySelector('.game_intro_left');
const gameIntroRight = document.querySelector('.game_intro_right');

gameIntroLeft.innerHTML = `The year is 1989. <br />

You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe. <br />

An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to you`

gameIntroRight.innerHTML = `at all times over a small, handheld radio—and is your only contact with the world you've left behind.<br />

But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.`