let vat = document.getElementById('vat')
let total = document.getElementById('total')
let economy = document.getElementById('economy')
let firstClass = document.getElementById('first_class')
function priceCount(increaseDecrease) {
    var subTotal = document.getElementById('subtotal')
   if(increaseDecrease=='increase'){
    subTotal.innerHTML = parseInt(subTotal.innerHTML) + 150
    vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
    total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
   }else{
    subTotal.innerHTML = parseInt(subTotal.innerHTML) - 150
    vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
    total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
   }
}
function priceCount1(increaseDecrease) {
    var subTotal = document.getElementById('subtotal')
    if(increaseDecrease=='increase'){
     subTotal.innerHTML = parseInt(subTotal.innerHTML) + 100
     vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
     total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
    }else{
     subTotal.innerHTML = parseInt(subTotal.innerHTML) - 100
     vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
     total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
    }
}
function increaseNumber(itemQuantity) {
    var itemValue = document.getElementById(itemQuantity).value
    var newValue = parseInt(itemValue) + 1
    document.getElementById(itemQuantity).value = newValue
    if(itemQuantity=='first_class'){
        priceCount('increase')
    }else{
        priceCount1('increase')
    }
}
function decreaseNumber(itemQuantity) {
    var itemValue = document.getElementById(itemQuantity).value
    if(itemValue<=0){
        itemValue = 0
        alert('Ticket quantity can not be negative value')
    }else{
        var newValue = parseInt(itemValue) - 1
        document.getElementById(itemQuantity).value = newValue
        var subTotal = document.getElementById('subtotal')
        if(itemQuantity=='first_class'){
            priceCount('decrease')
        }else{
            priceCount1('decrease')
        }

    }
}
function bookNow(){
    if(economy.value=='0' && firstClass.value=='0'){
        alert('you have not buy yet')
    }else{
        document.getElementById('main').style.display = 'none'
        document.getElementById('last-msg').innerHTML = 'Congratulation you have brought ' + firstClass.value + ' first class ticket and ' + economy.value + ' economy ticket' 
        document.getElementById('last').style.display = 'flex'
        document.getElementById('last-msg').style.display = 'block'
       
    }
   console.log( document.getElementsByClassName('last'))
}