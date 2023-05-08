var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

function sortProductsById(){
    for(var i = 0; i < products.length-1; i++)
        for(var j = i+1; j < products.length; j++)
            if (products[i].id > products[j].id) {
                var temp = products[i];
                products[i] = products[j];
                products[j] = temp
            }
}

function sort(list, comparer){
    for (var i = 0; i < list.length - 1; i++)
        for (var j = i + 1; j < list.length; j++)
            if (comparer(list[i], list[j]) > 0) {
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp
            }
}

function productComparerById(p1, p2) {
    if (p1.id < p2.id) return -1;
    if (p1.id > p2.id) return 1;
    return 0
}

/* 
function productComparerByIdDesc(p1, p2) {
    return productComparerById(p1, p2) * -1
} 
*/

function productComparerByName(p1, p2) {
    if (p1.name < p2.name) return -1;
    if (p1.name > p2.name) return 1;
    return 0
}

/* 
function productComparerByNameDesc(p1, p2) {
    return productComparerByName(p1, p2) * -1
} 
*/

function productComparerByCost(p1, p2) {
    if (p1.cost < p2.cost) return -1;
    if (p1.cost > p2.cost) return 1;
    return 0
}

/* 
function productComparerByCostDesc(p1, p2) {
    return productComparerByCost(p1, p2) * -1
} 
*/

function getDescComparer(comparer){
    return function (p1, p2) {
        return comparer(p1, p2) * -1
    }
}