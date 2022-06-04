import generateJoke from './generateJoke'
import './styles/main.scss'
import genova from "./assets/genova.svg"

const laughimg = document.getElementById('laughImg');

laughimg.src = genova

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)


generateJoke()


