const text = document.getElementById('text')
const box = document.getElementById('box')
console.log(text)
console.log(box)

function changeColor() {
    text.style.color = 'red'
    text.style.backgroundColor = 'lightblue'
}

function changeBox() {
    box.style.borderRadius = '50%'
    box.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaPVowAefI7MPAwzJdYumiYfpoXoyDL-tCMkO4neM5B_kwBIPTZ6y3kbD&s=10)'
}

function darkMode() {
    document.body.style.backgroundColor = 'darkblue'
}