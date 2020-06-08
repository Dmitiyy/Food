function card(){
    const wrapper = document.querySelector('.menu__field .container');
    const cards = document.querySelectorAll('.menu__item');
    function hide(){
        cards.forEach(item => {
            item.classList.add('hide');
        });
    }
    hide();

    class MakeCards{
        constructor(img, title, description, price, ...classes){
            this.img = img;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;
        }

        structure(){
            let cardOne = document.createElement('div');

            if(this.classes.length === 0){
                this.elment = 'menu__item';
                cardOne.classList.add(this.elment);
            } else {
                this.classes.forEach(className => {
                    cardOne.classList.add(className);
                }); 
            }
            
            cardOne.innerHTML = `
                <img src="${this.img}" alt="vegy">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price * 27}</span> грн/день</div>
                </div>
            `;
            wrapper.append(cardOne);
        }
    }

    async function postAllData(url){
        let response = await fetch(url);

        if(!response.ok){
            throw new Error(`Could not fetch, url: ${url}, status: ${response.status}`);
        }

        return await response.json();
    }
    postAllData('http://localhost:3000/menu')
        .then(result => {
            result.forEach(({img, title, descr, price}) => {
                new MakeCards(img, title, descr, price).structure();
            });
        });
}
export default card;