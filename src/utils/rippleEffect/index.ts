import "./style.sass";
import { defineColor } from "../index";


const createRipple = (event: any, color: any=null, isSolidColor: boolean=false) => {
    const el = event.currentTarget;

    const rippleContainer = document.createElement("div");
    const ripple = document.createElement("div");

    rippleContainer.className = 'c-ripple-container';

    if (!color) {
        defineColor("color", "#fff", rippleContainer);
    }

    const offset = el.getBoundingClientRect();

    var rippleTime = 0.8;

    if(el.clientWidth > 120) {
        rippleTime = 1.4;
    }

    ripple.style.left = `${event.clientX - offset.left}px`;
    ripple.style.top = `${event.clientY - offset.top}px`;
    ripple.style.transition = `all ${rippleTime}s ease`;

    ripple.classList.add("c-ripple");
    if (isSolidColor) {
        ripple.classList.add("c-ripple--solid");
    }

    rippleContainer.appendChild(ripple);
    el.appendChild(rippleContainer);

    ripple.style.width = ripple.style.height = `${el.clientWidth * 3}px`;
    ripple.style.opacity = `1`;

    function removeRipple(event: any) {
        ripple.style.transition = `all 0.${rippleTime * 800}s ease`;

        setTimeout(() => {
            ripple.style.opacity = '0';
            setTimeout(() => {
                el.removeChild(rippleContainer);
            }, rippleTime * 400)
        }, rippleTime * 300);

        event.target.removeEventListener('mouseup', removeRipple);
        event.target.removeEventListener('mouseleave', removeRipple);
    }

    event.target.addEventListener('mouseup', removeRipple);
    event.target.addEventListener('mouseleave', removeRipple);
}

export default createRipple;
