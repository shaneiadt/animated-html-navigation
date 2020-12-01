const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

enum SLIDE_DIRECTION {
    forward,
    backward
};

function slide(direction: SLIDE_DIRECTION): void {
    overlay?.classList.replace(`overlay-slide-${direction === SLIDE_DIRECTION.forward ? 'left' : 'right'}`, `overlay-slide-${direction === SLIDE_DIRECTION.forward ? 'right' : 'left'}`);

    const remove = direction === SLIDE_DIRECTION.forward ? 'out' : 'in';
    const add = direction === SLIDE_DIRECTION.forward ? 'in' : 'out';

    [nav1, nav2, nav3, nav4, nav5].forEach((el, i) => {
        el?.classList.remove(`slide-${remove}-${i + 1}`);
        el?.classList.add(`slide-${add}-${i + 1}`);
    });
}

function toggleNav() {
    menuBars?.classList.toggle('change');
    overlay?.classList.toggle('overlay-active');

    if (overlay?.classList.contains('overlay-active')) {
        slide(SLIDE_DIRECTION.forward);
    } else {
        slide(SLIDE_DIRECTION.backward);
    }
}

menuBars?.addEventListener('click', toggleNav);
nav1?.addEventListener('click', toggleNav);
nav2?.addEventListener('click', toggleNav);
nav3?.addEventListener('click', toggleNav);
nav4?.addEventListener('click', toggleNav);
nav5?.addEventListener('click', toggleNav);

export { };