let btns = document.querySelectorAll('button.btn');

for (let i = 0; i < btns.length; i++){
    btns[i].onclick = () => {
        document.querySelector('#app').removeChild(btns[i]);
    };
}                                                              let btns = document.querySelectorAll('button.btn');

for (let i = 0; i < btns.length; i++){
    btns[i].onclick = () => {
        document.querySelector('#app').removeChild(btns[i]);
    };
}