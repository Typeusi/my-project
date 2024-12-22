// تغيير وضع النهار والليل عند الضغط على القمر
const moonIcon = document.getElementById('moon-icon');
const cloudIcon = document.getElementById('cloud-icon');
const body = document.body;
const rainEffect = document.querySelector('.rain');

// عند الضغط على القمر (الليل)
moonIcon.addEventListener('click', () => {
    body.classList.toggle('night');
    body.classList.remove('day'); // تأكد من إزالة الوضع النهاري
    cloudIcon.style.display = 'block'; // جعل السحابة تظهر بعد التبديل
});

// عند الضغط على السحابة (المطر)
cloudIcon.addEventListener('click', () => {
    rainEffect.style.display = (rainEffect.style.display === 'none' || rainEffect.style.display === '') ? 'block' : 'none';
    body.classList.toggle('day');
});

// تبديل أماكن الأزرار بشكل عشوائي
let buttons = document.querySelectorAll('.register-login-section button');
setInterval(() => {
    buttons[0].style.order = Math.random() > 0.5 ? 1 : 0;
    buttons[1].style.order = Math.random() > 0.5 ? 2 : 1;
    buttons[2].style.order = Math.random() > 0.5 ? 3 : 2;
}, 3000);
