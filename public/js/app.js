(function () {
    app = {
        h1: document.querySelector('h1'),
        h1Color: function (color) {
            this.h1.style.color = color;
        }
    };

    app.h1Color('steelblue');
})();