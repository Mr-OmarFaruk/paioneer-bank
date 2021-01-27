const loginBtn=document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('transection-area');
    transactionArea.style.display='block';
});
//login button event handler

const depositBtn=document.getElementById('add-deposit');
depositBtn.addEventListener('click', function(){
    const depositNum=getInputNumber('depositAmount');
    // const depositamount=document.getElementById('depositAmount').value;
    // const depositNum=parseFloat(depositamount);


    // const currentDeposit=document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber=parseFloat(currentDeposit);
    // const totalDeposit= depositNum+currentDepositNumber;
    // document.getElementById('currentDeposit').innerText=totalDeposit;

    spanTextUpdate('currentDeposit', depositNum);
    spanTextUpdate('currentBalance', depositNum);

    document.getElementById('depositAmount').value="";
});

//deposit button event handler

const withdrawBtn=document.getElementById('add-withdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber=getInputNumber('withdrawAmount');

    spanTextUpdate('currentWithdraw', withdrawNumber);
    spanTextUpdate('currentBalance',-1* withdrawNumber);

    document.getElementById('withdrawAmount').value="";
});
// withdrawButton event handler


function getInputNumber(id){
    const amount=document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;
}

function spanTextUpdate(id,depositNum){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalBalance=depositNum+currentNumber;
    document.getElementById(id).innerText=totalBalance;
}
