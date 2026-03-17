// HTML의 onclick 이벤트에서 바로 접근할 수 있도록 window 객체에 할당
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = document.getElementById('modal-backdrop');
    if (!modal || !backdrop) return;
    
    document.body.classList.add('modal-open');
    
    backdrop.classList.remove('hidden');
    setTimeout(() => backdrop.classList.remove('opacity-0'), 10);

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0', 'scale-95');
        modal.classList.add('opacity-100', 'scale-100');
    }, 10);
};

window.closeAllModals = function() {
    const backdrop = document.getElementById('modal-backdrop');
    const modals = document.querySelectorAll('[id^="modal-project-"]');
    
    document.body.classList.remove('modal-open');
    if(backdrop) backdrop.classList.add('opacity-0');
    
    modals.forEach(modal => {
        modal.classList.remove('opacity-100', 'scale-100');
        modal.classList.add('opacity-0', 'scale-95');
    });

    setTimeout(() => {
        if(backdrop) backdrop.classList.add('hidden');
        modals.forEach(modal => modal.classList.add('hidden'));
    }, 300);
};

// ESC 키 누르면 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeAllModals();
});