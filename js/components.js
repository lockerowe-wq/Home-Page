(function () {
    'use strict';

    function loadComponent(placeholderId, url, onLoaded) {
        var el = document.getElementById(placeholderId);
        if (!el) return;
        fetch(url)
            .then(function (r) { return r.text(); })
            .then(function (html) {
                el.outerHTML = html;
                if (typeof onLoaded === 'function') onLoaded();
            });
    }

    function setActiveNav() {
        var path = window.location.pathname.replace(/\/+$/, '') || '/';
        var links = document.querySelectorAll('.primary-nav a');
        links.forEach(function (link) {
            var href = link.getAttribute('href').replace(/\/+$/, '') || '/';
            if (href === path) {
                link.classList.add('active');
            }
        });
    }

    loadComponent('site-header', '/components/site-header.html');
    loadComponent('site-nav',    '/components/site-nav.html', setActiveNav);
    loadComponent('site-footer', '/components/site-footer.html');
}());
