const body = document.querySelector("body");
const link_rede = document.querySelector(".link-rede");
const link_rede2 = document.querySelector(".link-rede2");
const link_rede3 = document.querySelector(".link-rede3");

function changeMode(color) {
    console.log(body.style.backgroundColor)

    if (body.style.backgroundColor == 'rgb(255, 255, 255)') {
        body.style.backgroundColor = '#acacac ';
        body.style.color = '#f6f6f6';
        link_rede.style.color = '#f6f6f6';
        link_rede2.style.color = '#f6f6f6';
        link_rede3.style.color = '#f6f6f6';
    }
    else {
        body.style.backgroundColor = color;
        body.style.color = "#000";
        link_rede.style.color = '#000';
        link_rede2.style.color = '#000';
        link_rede3.style.color = '#000';
    }
}