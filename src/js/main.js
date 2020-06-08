import tabs from './modules/tabs';
import timer from './modules/timer';
import modals from './modules/modals';
import calc from './modules/calc';
import card from './modules/card';
import postData from './modules/postData';
import slider from './modules/slider';
import parser from './modules/parser';

document.addEventListener('DOMContentLoaded', function(){
    tabs();
    timer();
    modals('.btn_white', '.modal');
    modals('.btn_dark', '.modal');
    calc();
    card();
    postData('.modal__content form');
    postData('.order .container form');
    slider();
    parser();
});