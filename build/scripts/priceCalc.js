let i = 0;
let bod = [1, 0];


function price__one(){
    let goodsPrice = document.querySelector('.goods__price'),
    onePrice = 20;
    allGoods = document.querySelector('input').value,
    allPrice = onePrice * allGoods;
        

    goodsPrice.innerHTML = allPrice + "$";
}

setTimeout(price__one, 0)


