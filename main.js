const nextButton = document.querySelector('.next');
const image = document.querySelector('.image');
const buttonContainer = document.querySelector('.button-container');
const previousButton = document.createElement('button');
let clickCounter = 0;


const imageSources = [
    "photos/photo_1.jpg",
    "photos/photo_2.jpg",
    "photos/photo_3.jpg",
    "photos/photo_4.jpg",
    "photos/photo_5.jpg"
];

nextButton.addEventListener('click', function () {
    clickCounter++;
    if (clickCounter == 5) {
        image.src = imageSources[0];
        clickCounter = 0;
    } else if (clickCounter == 1) {
        if (buttonContainer.contains(previousButton)) {
            previousButton.style.visibility = "visible";
            return;
        } else {
            createPreviousButton();
            image.src = imageSources[clickCounter];
        }
    }
    else {
        image.src = imageSources[clickCounter];
    }
})

previousButton.addEventListener('click', function () {
    clickCounter--;
    if (clickCounter < 0) {
        clickCounter = 5;
        image.src = imageSources[4];
    } else {
        image.src = imageSources[clickCounter];
    }
})

function createPreviousButton() {
    previousButton.classList.add('previous');
    previousButton.textContent = 'Previous';
    buttonContainer.insertBefore(previousButton, nextButton);
    previousButton.style.visibility = "visible";
}