// dom elements
const bill = document.querySelector("#bill");

const tips = [...document.querySelectorAll("#select_tip")];

const numberFields = [...document.querySelectorAll("input[type=number]")];

const tipAmount = document.querySelector(".tip_amount > strong");

const totalTip = document.querySelector(".total_tip > strong");

const resetBtn = document.querySelector(".reset");




// global variables
let tipValue;


// bill
let billAmount = () => bill.valueAsNumber;

// get tip
tips.forEach((tip) => {

    tip.addEventListener("click", (e) => {
        toggleStyle(e);
        document.querySelector(".custom_tip").value = "";
        tipValue = e.target.value.slice(0, -1);
        

        let eachPersonsBill = billAmount() / document.querySelector("#no_of_people").valueAsNumber;
           
            let tip_amount = eachPersonsBill * (Number(tipValue) / 100);

            let total = eachPersonsBill + tip_amount;

            if (!tip_amount){
                tipAmount.textContent = `$0.00`;
                totalTip.textContent = `$0.00`;
            } else {
            tipAmount.textContent = `$${tip_amount.toFixed(2)}`;
            totalTip.textContent = `$${total.toFixed(2)}`;
            }
            
    }
)});



numberFields.forEach((field) => {
    field.addEventListener("input", (e) => {
      
        if (e.target.value == "") {
            e.target.classList.remove("no_error");
            e.target.classList.add("error");
           
            
        } else {
            e.target.classList.add("no_error");
            
        }

        if (field['id'] == "no_of_people"){
            // display error message
            let errorMessage = document.querySelector(".error_message");

            if(field.value == "") {
                
                errorMessage.style.visibility = "visible";
            } else {
               errorMessage.style.visibility = "hidden";  
            }


            let eachPersonsBill = billAmount() / e.target.valueAsNumber;
           
            let tip_amount = eachPersonsBill * (Number(tipValue) / 100);
            console.log(tip_amount)

            let total = eachPersonsBill + tip_amount;

            if (!tip_amount){
                tipAmount.textContent = `$0.00`;
                totalTip.textContent = `$0.00`;
            } else {
            tipAmount.textContent = `$${tip_amount.toFixed(2)}`;
            totalTip.textContent = `$${total.toFixed(2)}`;
            }
            
            
        }

        if (field['id'] === "custom_tip") {
            
            tipValue = document.querySelector(".custom_tip").valueAsNumber;
           

          
            let eachPersonsBill = billAmount() / document.querySelector("#no_of_people").valueAsNumber;
    
           
            let tip_amount = eachPersonsBill * (Number(tipValue) / 100);

            let total = eachPersonsBill + tip_amount;

            if (!tip_amount){
                tipAmount.textContent = `$0.00`;
                totalTip.textContent = `$0.00`;
            } else {
            tipAmount.textContent = `$${tip_amount.toFixed(2)}`;
            totalTip.textContent = `$${total.toFixed(2)}`;
            }
        }
    });
});


//toggle button background
function toggleStyle(event) {

    tips.forEach((tip) => {
        if (tip == event.target) {
            tip.classList.add("button_color");
            } else {
                tip.classList.remove("button_color");
            }
    });
    
};


//remove style when field is clicked
document.querySelector(".custom_tip").addEventListener("click", ()=>{
    tips.forEach(tip => {
        tip.classList.remove("button_color");
    })
  })


// reset button
resetBtn.addEventListener ("click", ()=> {
    
    bill.value = "";
    // tipValue = 0;
    document.querySelector(".no_of_people").value = "";
    document.querySelector(".custom_tip").value = "";
    window.location.reload();
})
