import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

function* idGen(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const getId = idGen(10);

console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
