"use strict";

let quotes = [
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. <br/> -Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. <br/> -Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else. <br/> -Margaret Mead",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. <br/> -Robert Louis Stevenson",
  "The future belongs to those who believe in the beauty of their dreams. <br/> -Eleanor Roosevelt",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn. <br/> -Benjamin Franklin",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. <br/> -Helen Keller",
  "It is during our darkest moments that we must focus to see the light. <br/> -Aristotle",
  "Whoever is happy will make others happy too. <br/> -Anne Frank",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. <br/> -Ralph Waldo Emerson",
  "You will face many defeats in life, but never let yourself be defeated. <br/> -Maya Angelou",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. <br/> -Nelson Mandela",
  "In the end, it's not the years in your life that count. It's the life in your years. <br/> -Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game. <br> -Babe Ruth",
  "Life is either a daring adventure or nothing at all. <br/> -Helen Keller",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.  <br/> -Thomas A. Edison",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. <br/> -Dr. Seuss",
];

function newRandom() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let quote = (document.getElementById("display").innerHTML =
    quotes[randomNumber]);
}
