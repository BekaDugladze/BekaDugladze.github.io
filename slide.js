
/*    const paintings = [document.querySelector("#Fisherman"),
    document.querySelector("#Giraffe"),
    document.querySelector("#Margarita"),
    document.querySelector("#Meezove"),];
    const texts = ["The Fisherman", "Giraffe", "Margarita", "Meezove"];
    const title = document.querySelector("#title")


    setInterval(() => {
        for(let i = 0; i < paintings.length; i++){
        paintings[i].style.opacity = 1;
        paintings[i].style.transition = "1s";
    }
        for(let e = 0; e < paintings.length; e++){
        if (e !== i ){
            paintings[e].style.opacity = 0;
            paintings[e].style.transition = "1s";
        }}
}, 3000) */

const paintings = [
    document.querySelector("#Fisherman"),
    document.querySelector("#Giraffe"),
    document.querySelector("#Margarita"),
    document.querySelector("#Meezove")
];
const texts = ["The Fisherman", "Giraffe", "Margarita", " The Sweeper"];
const titleElement = document.querySelector("#title");
let currentIndex = 0;

function changeImage() {
    paintings.forEach((painting, index) => {
        painting.style.opacity = index === currentIndex ? 1 : 0;
        painting.style.animation = index === currentIndex ? 'simple 2s' : 'none'
    });

    titleElement.innerHTML = texts[currentIndex];

    currentIndex = (currentIndex + 1) % paintings.length;
}

changeImage();

setInterval(changeImage, 5000);