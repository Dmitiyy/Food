function postData(selector){
    const form = document.querySelector(selector);
    const inpForm = form.querySelectorAll('input');
    const message = {
        suceful: 'Спасибо, ожидайте ответ',
        loading: '../../img/original.svg',
        failure: 'Что-то пошло не так'
    };

    function removeDiv(){
        inpForm.forEach(input => {
            input.value = '';
        }); 
    }

    let div = document.createElement('img');
    div.setAttribute('src', '../../../src/img/original.svg'); 
    div.style.display = 'block';
    div.style.margin = '0 auto';

    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        console.log(div);
        
        form.append(div);

        let formData = new FormData(form);
        let obj = {};

        formData.forEach((item, i) => {
            obj[i] = item;
        });

        async function postAllData(url){
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(obj)
            });

            return await response.json();
        }

        postAllData('http://localhost:3000/requests')
            .then(result => {
                createNewPresentModal(message.suceful);
                console.log(result);
                removeDiv();
            })
            .catch((result) => {
                createNewPresentModal(message.failure);
                console.log(result);
                removeDiv();
            });
    });

    function createNewPresentModal(text){
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal__content').classList.add('hide');
        const modal = document.createElement('div');
        modal.classList.add('modal__content');
        modal.innerHTML = `
            <form action="#">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${text}</div>
            </form>
        `;
        document.querySelector('.modal__dialog').append(modal);
        document.querySelector('.modal').addEventListener('click', function(e){
            if(e.target == document.querySelector('.modal__close').getAttribute('data-close') == ''){
                modal.classList.add('hide');
                document.querySelector('.modal__content').classList.remove('hide');
                document.querySelector('.modal__content').classList.add('show');
            }
        });
        div.remove();
    }
}
export default postData;