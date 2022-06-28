/*
class Video{
    static objects = [];

    constructor(id, name, src){
        this.id = id;
        this.name = name;
        this.src = src;
        this.img = `../../Assets/img/desk-video-thumbnail-${name.toLowerCase()}.jpg`;

        if(Video.objects){
            Video.objects.push(
                {
                    id: this.id,
                    name: this.name,
                    src: this.src,
                    img: this.img,
                }
            );
        }
        else{
            Video.objects = [];
        }
    }
}

let
    openingVideo = new Video(
        '01',
        'Opening',
        'https://www.youtube.com/watch?v=VuuGW9Pp2mI'
    ),

    endingVideo = new Video(
        '02',
        'Ending',
        'https://www.youtube.com/watch?v=8jdubuXqOGA'
    ),
;
*/

let
    videos = [
        {
            id: '01',
            name: 'Opening',
            src: 'https://www.youtube.com/watch?v=VuuGW9Pp2mI',
            img: '../../Assets/img/desk-video-thumbnail-opening.jpg'
        },

        {
            id: '02',
            name: 'Ending',
            src: 'https://www.youtube.com/watch?v=8jdubuXqOGA',
            img: '../../Assets/img/desk-video-thumbnail-ending.jpg'
        }
    ],

    videoIndex = 1
;

const plusSlides = (n) => {
    showSlides(videoIndex += n);
}

const showSlides = (n) => {
    let sectionAllImg = document.querySelectorAll('#VIDEOS img'),
        videoId = document.querySelector('#videoNumber'),
        videoName = document.querySelector('#videoTitle'),
        playBtn = document.querySelector('#playBtn');
    ;

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
    let videoChange = document.querySelector('#videoChange');
    showSlides(videoIndex);
    videoChange.addEventListener('click', function(){plusSlides(1);});
}

export {videoFillInfo}