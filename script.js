
let span = document.querySelector("#my_amount")
let my_amount= localStorage.getItem("my_amount");
if(my_amount === null || my_amount === NaN){
    my_amount=0;
    localStorage.setItem("my_amount",my_amount);
    
}
else{

    span.textContent=my_amount;

}

my_ammount=parseInt(span.textContent);
// localStorage.setItem("my_amount",my_ammount);

function deposit_box(){
btn = document.querySelector("#de");
div = document.querySelector(".deposit")


i = document.querySelector("#i_de")

btn.addEventListener("click",()=>{
    div.style.display="flex";
})

btn2 =document.querySelector("#de_ok")
btn2.addEventListener("click",()=>{
    let dep_amount=document.querySelector("#dep_amount").value;
    dep_amount=parseInt(dep_amount);
    my_ammount = my_ammount+dep_amount;
    localStorage.setItem("my_amount",my_ammount);
    my_amount= localStorage.getItem("my_amount");
    span.textContent=my_amount;

    document.querySelector("#dep_amount").value="";
    div.style.display="none";
})

i.addEventListener("click",()=>{
    div.style.display="none";
})
}



function withdraw_box(){
    btn1 = document.querySelector("#with");
    div1 = document.querySelector(".withdraw")
    i1 = document.querySelector("#i_with")

    btn1.addEventListener("click",()=>{
        div1.style.display="flex";
    })
    
    btn1 =document.querySelector("#with_ok")
    btn1.addEventListener("click",()=>{

        let with_amount=document.querySelector("#with_amount").value;
        with_amount=parseInt(with_amount);
        if(my_amount < with_amount){
            alert("Your Balance is not Suficent, Please Deposit Amount")
        }
        else{
            my_ammount = my_ammount-with_amount;
            localStorage.setItem("my_amount",my_ammount);
            my_amount= localStorage.getItem("my_amount");
            span.textContent=my_amount;
    
        }

    
        document.querySelector("#with_amount").value="";
        div1.style.display="none";
    })

    i1.addEventListener("click",()=>{
        div1.style.display="none";
    
    })

    }

    
function transaction_box(){
    btn3 = document.querySelector("#trans");
    div3 = document.querySelector(".transaction")
    i3 = document.querySelector("#i_tr")

    btn3.addEventListener("click",()=>{
        div3.style.display="flex";
    })
    
    btn3 =document.querySelector("#sub")
    btn3.addEventListener("click",()=>{

        let tran_thing=document.querySelector("#tran_thing").value;
        let tran_amount=document.querySelector("#tran_amount").value;
        tran_amount=parseInt(tran_amount);
         

        if(my_amount < tran_amount){
            alert("Your Balance is not Suficent, Please Deposit Amount")
        }
        else{
            my_ammount = my_ammount-tran_amount;
            localStorage.setItem("my_amount",my_ammount);
            localStorage.setItem(tran_thing,tran_amount);
            my_amount= localStorage.getItem("my_amount");
            span.textContent=my_amount;
    
        }


        
        document.querySelector("#tran_thing").value="";
        document.querySelector("#tran_amount").value="";
        div3.style.display="none";
        
    })

    i3.addEventListener("click",()=>{
        div3.style.display="none";
    
    })

}


const displayLocalStorageData = () => {
    const storageDataDiv = document.getElementById("history");
    const container = document.querySelector('.container');
    container.innerHTML="";

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if(key != "my_amount"){
            const newDiv = document.createElement('div');
            newDiv.classList.add('history');
    
            newDiv.innerHTML=`<h3 id="thing">${key}</h3> <h3 id="amount"> ${value}</h3>`
    
            container.appendChild(newDiv);

        }

   
    }
};



 


function history_button(){
    let btn = document.querySelector("#his")
    btn.addEventListener("click",()=>{
        displayLocalStorageData();
    })
}



function clear_history(){
    let btn = document.querySelector("#clear");
    btn.addEventListener("click",()=>{
        const container = document.querySelector('.container');
        container.innerHTML="";
        let last_amount= localStorage.getItem("my_amount");
        localStorage.clear();
        localStorage.setItem("my_amount",last_amount);

    })
}






function manubtn(){
    let btn= document.querySelector("#manu");
    let ul =document.querySelector("ul")
    btn.addEventListener("click",()=>{
        ul.style.display="block";
    })
}


    function toggleMenu() {
        const navList = document.querySelector('.front .background .nav ul');
        const menuToggle = document.getElementById('menu-toggle');
        
        if (navList.style.display === 'none' || navList.style.display === '') {
            navList.style.display = 'flex';
            menuToggle.textContent = '✕'; // Change to "X" for closing
        } else {
            navList.style.display = 'none';
            menuToggle.textContent = '☰'; // Change back to hamburger icon
        }
    }
















// toggleMenu()
// manubtn();
clear_history();
history_button();
withdraw_box();
deposit_box();
transaction_box();