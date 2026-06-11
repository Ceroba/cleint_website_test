document.querySelectorAll('.group').forEach(card => {
    const vid = card.querySelector('video');
    vid.play()
    // card.onmouseenter = () => vid.play();
    // card.onmouseleave = () => {
    //     vid.pause();
    //     vid.currentTime = 0;
    // };
});