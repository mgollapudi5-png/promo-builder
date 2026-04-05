document.addEventListener('DOMContentLoaded', () => {
    // 1. Load data from config.js
    document.getElementById('img-scene1').src = promoConfig.scene1.image;
    document.getElementById('s1-title').innerText = promoConfig.scene1.title;
    document.getElementById('s1-subtitle').innerText = promoConfig.scene1.subtitle;
    document.getElementById('s1-tagline').innerText = promoConfig.scene1.tagline;

    document.getElementById('img-scene2').src = promoConfig.scene2.image;
    document.getElementById('s2-title').innerText = promoConfig.scene2.title;
    document.getElementById('s2-subtitle').innerText = promoConfig.scene2.subtitle;

    document.getElementById('s3-logo').innerText = promoConfig.scene3.logoText;
    document.getElementById('s3-cta').innerText = promoConfig.scene3.callToAction;

    // 2. Timeline Control (Total duration is ~10s)
    const scene1 = document.getElementById('scene-1');
    const scene2 = document.getElementById('scene-2');
    const scene3 = document.getElementById('scene-3');

    // Run timeline
    setTimeout(() => {
        scene1.classList.add('is-active');
    }, 100);

    setTimeout(() => {
        scene1.classList.remove('is-active');
        scene1.style.transition = 'opacity 1s ease';
        scene1.style.opacity = '0';
        
        setTimeout(() => {
            scene2.classList.add('is-active');
        }, 500);
    }, 3500);

    setTimeout(() => {
        scene2.classList.remove('is-active');
        scene2.style.transition = 'opacity 1s ease';
        scene2.style.opacity = '0';

        setTimeout(() => {
            scene3.classList.add('is-active');
        }, 500);
    }, 7000);
});
