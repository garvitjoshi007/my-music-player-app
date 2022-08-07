console.log("Yo Nigga")
//initializing index
let songIndex = 0;
let audioElement = new Audio('filename.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById(myProgressBar);

let songs = [
    {
        fileName: 'Blinding Lights', songPath: '1.mp3', coverPath: 'afterhours.png'
    },
    {
        fileName: 'name', songPath: '', coverPath: ''
    },
    {
        fileName: 'name', songPath: '', coverPath: ''
    },
    {
        fileName: 'name', songPath: '', coverPath: ''
    },
    {
        fileName: 'name', songPath: '', coverPath: ''
    },
    {
        fileName: 'name', songPath: '', coverPath: ''
    },
    {
        fileName: 'name', songPath: '', coverPath: ''
    }
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

    }
})

//listen to event

myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //Update Seekbar
})
