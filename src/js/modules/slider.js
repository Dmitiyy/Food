function slider(){
    const images = document.querySelectorAll('.offer__slide');
    const btnNext = document.querySelector('.offer__slider-next');
    const btnPrev = document.querySelector('.offer__slider-prev');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slideField = document.querySelector('.offer__slider-inner');
    const sliderDot = document.querySelector('.carousel-indicators');
    
    const width = window.getComputedStyle(slidesWrapper).width;
    let input = document.querySelector('#current');
    let count = 1;
    let offset = 0;

    slideField.style.width = images.length * 100 + '%';
    slideField.style.display = 'flex';
    slideField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    document.querySelector('.offer__slider').style.position = 'relative';

    input.textContent = `0${count}`;

    images.forEach(img => {
        img.style.width = width;
    });

    function removeNotDigits(name){
        return +name.replace(/\D/g, '');
    }

    btnNext.addEventListener('click', function(){
        if(offset == removeNotDigits(width) * (images.length - 1)){
            offset = 0;
        } else {
            offset += removeNotDigits(width);
        }

        slideField.style.transform = `translateX(-${offset}px)`;

        if(count == images.length){
            count = 1;
        } else {
            count++;
        }
        input.textContent = `0${count}`;
        
        hideActiveClass();
        showActiveDot(count - 1);
    });

    btnPrev.addEventListener('click', function(){
        if(offset == 0){
            offset = removeNotDigits(width) * (images.length - 1);
        } else {
            offset -= removeNotDigits(width);
        }

        slideField.style.transform = `translateX(-${offset}px)`;

        if(count == 1){
            count = images.length;
        } else {
            count--;
        }
        input.textContent = `0${count}`;

        hideActiveClass();
        showActiveDot(count - 1);
    });

    for(let i = 0; i < images.length; i++){
        let dot = document.createElement('div');
        dot.classList.add('dot');
        sliderDot.append(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function hideActiveClass(){
        dots.forEach(item => {
            item.classList.remove('active-dot');
        });
    }
    hideActiveClass();

    function showActiveDot(n = 0){
        dots[n].classList.add('active-dot');
    }
    showActiveDot();

    dots.forEach((item, i) => {
        item.addEventListener('click', function(){
            hideActiveClass();
            showActiveDot(i);

            offset = removeNotDigits(width) * i;
    
            slideField.style.transform = `translateX(-${offset}px)`;

            count = i + 1;
            input.textContent = `0${count}`;
        });
    });
}
export default slider;