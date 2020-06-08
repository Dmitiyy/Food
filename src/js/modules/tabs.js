function tabs(){
    let blocks = document.querySelectorAll('.tabcontent'),
        wrappTitle = document.querySelector('.tabheader__items'),
        title = document.querySelectorAll('.tabheader__item');

    //! active class = tabheader__item_active
    
    function hideTabs(){
        blocks.forEach(block => {
            block.classList.remove('show');
            block.classList.add('hide');
        });

        title.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    hideTabs();

    function showTabs(n = 0){
        blocks[n].classList.remove('hide');
        blocks[n].classList.add('show');
        title[n].classList.add('tabheader__item_active');
    }
    showTabs();

    wrappTitle.addEventListener('click', function(e){
        let target = e.target;

        if(target && target.classList.contains('tabheader__item')){
            for(let i = 0; i < blocks.length; i++){
                if(target == title[i]){
                    hideTabs();
                    showTabs(i);
                }
            }
        }
    });
}
export default tabs;