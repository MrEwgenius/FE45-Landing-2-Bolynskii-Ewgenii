const burger = document.querySelector('#nav-burger')
const list = document.querySelector('.navigation-list')
if (
    burger.addEventListener('click', () => {
        console.log('glu');
        const active = list.classList.toggle('navigation-list--active')

    })
) {
}
