function updateproductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product+'-number');
    const productNumber = productInput.value;
    if (isIncreasing == true){
        productInput.value = parseInt( productNumber)+1;
    }
    else if(productNumber >0){
        productInput.value = parseInt( productNumber)-1;
    }

    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = parseInt(productInput.value) * price;


    calculateTotal();
    

}
// calculate Total Price
function calculateTotal(){
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneTotal = parseInt( phoneNumber )* 1219;
    const caseNumber = document.getElementById('case-number').value;
    const caseTotal =  parseInt( caseNumber) * 59;
    const subTotal = phoneTotal + caseTotal; 
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;


}


// Phone

document.getElementById('phone-plus').addEventListener('click',function(){
    updateproductNumber('phone',1219,true)
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateproductNumber('phone',1219,false)
})



// Case

document.getElementById('case-plus').addEventListener('click',function(){
    updateproductNumber('case',59,true)
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateproductNumber('case',59,false)
})













