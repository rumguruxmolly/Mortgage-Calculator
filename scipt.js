document.getElementById('calculate').addEventListener('click',calculer)
document.getElementById('R').addEventListener('change', chek);
document.getElementById('I').addEventListener('change', chek);

function calculer() {
    M=0
    P= parseFloat(document.getElementById('amount').value)
    r=parseFloat(document.getElementById('interest').value)
    n=parseInt(document.getElementById('mort').value)
    if (isNaN(P)||isNaN(r)||isNaN(n)||P<=0||n<=0||r<=0||!(document.getElementById('R').checked)&&!(document.getElementById('I').checked)) {
        document.querySelector('.resultat').innerText = 'Error';
        return
    }
    else if( document.getElementById('R').checked){
        r=r/100/12
        n=n*12
        let M = P * r * Math.pow(1 + r, n)/(Math.pow(1 +r,n)-1)
        M=M.toFixed(5)
        document.querySelector('.resultat').innerText = '£'+M
        document.getElementById('totalres').innerText = '£'+M*n
    } else if(document.getElementById('I').checked){
        M=P*(r/(100*12))
        M=M.toFixed(5)
        document.querySelector('.resultat').innerText = '£'+M
        document.getElementById('totalres').innerText = '£'+M*n
    }
}
document.getElementById('clear').addEventListener('click', erase)
function erase() {
    document.getElementById('amount').value=''
    document.getElementById('interest').value=''
    document.getElementById('mort').value=''
    document.getElementById('containerMini').style.backgroundColor = ''
    document.getElementById('containerMini').style.borderColor = ''
    document.getElementById('containerMini1').style.backgroundColor = ''
    document.getElementById('containerMini1').style.borderColor = ''
    document.querySelector('.resultat').innerText = 'Result';

}
function chek() {
    if (document.getElementById('R').checked) {
        document.getElementById('containerMini').style.backgroundColor = '#FAFAE0';
        document.getElementById('containerMini').style.borderColor = '#EAEEBC';
    } else {
        document.getElementById('containerMini').style.backgroundColor = '';
        document.getElementById('containerMini').style.borderColor = '';
    }
    if (document.getElementById('I').checked) {
        document.getElementById('containerMini1').style.backgroundColor = '#FAFAE0';
        document.getElementById('containerMini1').style.borderColor = '#EAEEBC';
    } else {
        document.getElementById('containerMini1').style.backgroundColor = '';
        document.getElementById('containerMini1').style.borderColor = '';
    }
}