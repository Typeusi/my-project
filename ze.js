// دالة تبديل بين الوضع الليلي والنهاري
function toggleDayNight() {
    document.body.classList.toggle('night-mode');

    const icon = document.querySelector('.moon-toggle i');
    if (document.body.classList.contains('night-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}
