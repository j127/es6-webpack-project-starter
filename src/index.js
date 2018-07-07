import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}


function* idGen(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const getId = idGen(10);

const result = [...getId].join('_');

document.body.innerHTML = `<h2>${result}</h2>`;

document.body.appendChild(component());
