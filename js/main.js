const header = document.querySelector('.header');
const hasSubMenu = document.querySelectorAll('.has-sub-menu');
const headerMenuIcon = document.querySelector('.header-menu__icon');
const menuIcon = document.querySelector('.menu-icon');
const headerMenuMobi = document.querySelector('.header-menu__mobi');
const hasSubMenuMobi = document.querySelectorAll('.has-sub-menu__mobi');
const subMenuBackLink = document.querySelectorAll('.sub-menu__back-link');

headerMenuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('menu-icon-active');
    headerMenuMobi.classList.toggle('active');
    header.classList.toggle('active');
});

for(item of hasSubMenu) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for(el of hasSubMenu) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}

for(item of hasSubMenuMobi) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const subMmenuMobi = this.nextElementSibling;
        subMmenuMobi.classList.add('active');
        for(el of subMenuBackLink) {
            el.addEventListener('click', function() {
                document.querySelector('.sub-menu__mobi.active').classList.remove('active');
            });
        }
        
    })
}

$(document).ready(function() {
    $(".nano").nanoScroller({ sliderMaxHeight: 115 });

    $('input[type="tel"]').mask('+7 (000) 000-00-00');
});