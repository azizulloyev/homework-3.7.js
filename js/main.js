var elInp =document.querySelector('.inp')

function fn(){
    var soz =elInp.value
    if(soz == soz.trim()){
        console.log('probel yoq')
    }
    else{
        console.log('probel bor')
    }
}