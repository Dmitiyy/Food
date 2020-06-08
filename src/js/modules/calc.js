function calc(){
    const gender = document.querySelector('#gender');
    const genderButtons = gender.querySelectorAll('.calculating__choose-item');
    const btnsBig = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');
    let inpWeigth = document.querySelector('#weight');
    let inpAge = document.querySelector('#age');
    let inpHeight = document.querySelector('#height'); 
    let inpResult = document.querySelector('.calculating__result span');
    let result = {};

    function filterInputs(selector){
        const p = document.createElement('p');
        p.style.color = 'red';
        p.classList.add('p__s');
        let obj = {};

        selector.addEventListener('input', function(){
            if(/\D/.test(selector.value)){
                p.textContent = 'Введите числовые данные';
                
                let ps = document.querySelectorAll('.p__s');
                if(ps.length > 0){
                    console.log('');
                } else {
                    document.querySelector('.calculating__result').append(p);
                    document.querySelector('.calculating__total').style.width = '670px';
                    document.querySelector('.calculating__result').style.width = '350px';
                }
            } else {
                obj.tr1 = inpHeight.value;
                obj.tr2 = inpWeigth.value;
                obj.tr3 = inpAge.value;

                if(!/\D/.test(obj.tr1) && !/\D/.test(obj.tr2) && !/\D/.test(obj.tr3)){
                    let ps = document.querySelectorAll('.p__s');
                    ps.forEach(item => {
                        item.remove();
                        document.querySelector('.calculating__total').style.width = '490px';
                        document.querySelector('.calculating__result').style.width = '';
                    });
                }
            }
        });
    }
    filterInputs(inpHeight);
    filterInputs(inpWeigth);
    filterInputs(inpAge);

    function hideAll(){
        genderButtons.forEach(btn => {
            btn.classList.remove('calculating__choose-item_active');
        });
    }
    hideAll();

    function hideConcret(){
        btnsBig.forEach(item => {
            item.classList.remove('calculating__choose-item_active');
        }); 
    }
    hideConcret();
    
    function showLocalWm(n = 0){
        genderButtons[n].classList.add('calculating__choose-item_active');
        result.wmItem = n;
        result.wm = genderButtons[n].dataset.wm;
        localStorage.setItem('wm', n);
    }
    showLocalWm();

    function show(selector, name, n = 0){
        selector[n].classList.add('calculating__choose-item_active');
        result[name] = selector[n].dataset[name];
        result.bigItem = n;
        localStorage.setItem('big', n);
    }
    show(genderButtons, 'wm');
    show(btnsBig, 'big');

    function clickOnBtns(selector, foo, name){
        genderButtons.forEach((item, i) => {
            item.addEventListener('click', function(){
                hideAll();
                showLocalWm(i);
                checkInputs();
                localStorage.setItem('wm2', i);
            });
        });
    }
    clickOnBtns();

    btnsBig.forEach((item, i) => {
        item.addEventListener('click', function(){
            hideConcret();
            show(btnsBig, 'big', i);
            checkInputs();
            localStorage.setItem('big2', i);
        });
    });

    function inputResponse(selector, name){
        selector.addEventListener('input', function(){
            result[name] = this.value;
            checkInputs();
        });
    }
    inputResponse(inpWeigth, 'weight');
    inputResponse(inpAge, 'age');
    inputResponse(inpHeight, 'height');

    function sumAllResult(){
        let resInpHeight = inpHeight.value;
        let resInpWeight = inpWeigth.value;
        let resInpAge = inpAge.value;
        let summa;

        if(result.wm == 6000){
            summa = ((9.2 * resInpWeight) + (3.1 * resInpHeight) - (4.3 * resInpAge)) * (+result.big) + 447.6;
        } else {
            summa = ((13.4 * resInpWeight) + (4.8  * resInpHeight) - (5.7 * resInpAge)) * (+result.big) + 88.36;
        }
           
        inpResult.textContent = Math.round(summa);

        if(inpResult.textContent == 'NaN'){
            inpResult.textContent = '00';
        } else if(inpResult.textContent == '00'){
            inpResult.textContent = Math.round(summa);
        }
    }

    function checkInputs(){
        if(inpAge.value == '' || inpHeight.value == '' || inpWeigth.value == ''){
            inpResult.textContent = '00';
        } else {
            sumAllResult();
        }
    }

    hideAll();
    genderButtons[localStorage.getItem('wm2') ||
    localStorage.getItem('wm')].classList.add('calculating__choose-item_active');
    
    hideConcret();
    btnsBig[localStorage.getItem('big2') ||
    localStorage.getItem('big')].classList.add('calculating__choose-item_active');
}
export default calc;    