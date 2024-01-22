const list = document.querySelectorAll('[data-lista]');


function choosePrice(name, value) {
    list.forEach(item => {
        if(item.id === name) printPrice(item, name, value);
    });
}

function printPrice(list, name, value) {
    list.innerHTML = '';

    const currencies = {
        dolar: {
            singular: 'Dólar',
            plural: 'Dólares'
        },
        iene: {
            singular: 'Iene',
            plural: 'Ienes'
        },
        euro: {
            singular: 'Euro',
            plural: 'Euros'
        }
    }

    for(let multiplier = 1;multiplier <= 1000; multiplier *= 10) {
        const listItem = document.createElement('li');
        const label = multiplier === 1 ? currencies[name].singular : currencies[name].plural;

        listItem.innerHTML = `${multiplier} ${label}: R$${(multiplier * value).toFixed(2)}`;
        list.appendChild(listItem);
    }
}

export default choosePrice;