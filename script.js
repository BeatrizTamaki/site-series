// MENU HAMBURGUER //
const linksMenu = document.querySelectorAll('.lista__menu-link');

linksMenu.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const alvo = this.getAttribute('data-alvo');
        const secao = document.getElementById(alvo);

        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        document.getElementById('menu').checked = false;
    });
});

// DETALHES //

const detalhesCategoria = document.querySelectorAll('.categoria');

detalhesCategoria.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const alvo = this.getAttribute('data-alvo');
        const secao = document.getElementById(alvo);

        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


