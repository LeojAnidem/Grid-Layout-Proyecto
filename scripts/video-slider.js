import {videos} from './objects/videos.js';

let videoIndex = 1,
    videoChange = document.querySelector('#videoChange'),
    sectionAllImg = document.querySelectorAll('#VIDEOS img'),
    videoId = document.querySelector('#videoNumber'),
    videoName = document.querySelector('#videoTitle'),
    playBtn = document.querySelector('#playBtn')
;

const plusSlides = (n) => {
    showSlides(videoIndex += n);
}

const showSlides = (n) => {
    (n > videos.length)? videoIndex = 1 : null;

    videos.forEach(video => {
        if(video.id == videoIndex){
            sectionAllImg.forEach(img => {
                img.src = video.img;
            });
            
            videoId.textContent = video.id;
            videoName.textContent = video.name;
            playBtn.href = video.src;
        }
    });
}

const videoFillInfo = () => {
    showSlides(videoIndex);
    videoChange.addEventListener('click', function(){plusSlides(1);});
}

export {videoFillInfo}