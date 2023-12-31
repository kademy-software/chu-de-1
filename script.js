

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Xin chào',
        'name': 'l1.mp4',
        'duration': '11 giây',
    },
    {
        'id': 'a2',
        'title': 'Xin lỗi',
        'name': 'l2.mp4',
        'duration': '11 giây ',
    },
    {
        'id': 'a3',
        'title': 'Cảm ơn',
        'name': 'l3.mp4',
        'duration': '9 giây',
    },

    {
        'id': 'a4',
        'title': 'Bạn thật tuyệt vời',
        'name': 'l4.mp4',
        'duration': '4 giây',
    },
    

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                   
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');


videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            
        }

        selected_video.classList.add('active');
        

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
