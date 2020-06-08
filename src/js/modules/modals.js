function modals(trigger, selector){
    const btn = document.querySelector(trigger);
    const modal = document.querySelector(selector);
    const btnClose = document.querySelector('.modal__close');

    btn.addEventListener('click', function(){
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    btnClose.addEventListener('click', function(){
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function(e){
        if(e.target && e.target == this || e.target.getAttribute('data-close') == ''){
            modal.classList.remove('show'); 
            this.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(e){
        if(e.code === 'Escape' && modal.classList.contains('show')){
            modal.classList.remove('show');
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    function timeSet(){
        setTimeout(() => {
            modal.classList.add('show');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, 60000);
    }
    timeSet();

    function modalShowDown(){
        let difference = document.documentElement.clientHeight;
        if(window.pageYOffset + difference >= document.documentElement.scrollHeight){
            modal.classList.add('show');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            window.removeEventListener('scroll', modalShowDown);
        }
    }
    window.addEventListener('scroll', modalShowDown);
}
export default modals;