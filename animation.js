document.addEventListener('DOMContentLoaded', () => {
    // 1. 부드러운 스크롤 애니메이션 (등장 효과)
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
    });

    // 2. 패럴랙스 (스크롤 반응형 배경 움직임)
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // 파도 좌우 출렁임
        document.querySelectorAll('.parallax-wave').forEach(el => {
            const speed = el.getAttribute('data-speed');
            el.style.transform = `translateX(-${scrolled * speed}px)`;
        });

        // 글래스 물방울 대각선 이동
        document.querySelectorAll('.parallax-float').forEach(el => {
            const speedX = el.getAttribute('data-speed-x');
            const speedY = el.getAttribute('data-speed-y');
            el.style.transform = `translate(${scrolled * speedX}px, ${scrolled * speedY}px)`;
        });
    });
});