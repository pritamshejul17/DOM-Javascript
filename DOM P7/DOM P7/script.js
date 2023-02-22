const node = document.querySelectorAll('a');
for(const n of node){
    const str = n.innerText;
    if (str.includes("2.0"))
        n.remove();
}

const but = document.querySelector('.main__form-btn');
but.disabled = false;
const inp = document.querySelector('.main__form-input');
inp.disabled = false;