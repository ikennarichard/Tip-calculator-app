
const noOfPeople = document.querySelector("#no_of_people");

const bill = document.querySelector("#bill");

const tips = [...document.querySelectorAll("#select_tip")];

const numberFields = [...document.querySelectorAll("input[type=number]")];



// tip amount and total view
const tipAmount = document.querySelector(".tip_amount > strong");

const totalTip = document.querySelector(".total_tip > strong");



// global variables
let tipValue;


// bill
let billAmount = () => bill.valueAsNumber;

// get tip
tips.map((tip) => {

    if (tip.type === "button") {

    tip.addEventListener("click", (e) => {
        tip.style.cssText = "background-color: var(--strong-cyan); color: var(--very-dark-cyan)";
        document.querySelector(".select_tip").value = "";
        tipValue = e.target.value.slice(0, -1);
    }
)} else if (tip.type === "number") {
    tip.addEventListener("input", (e) => {
        tipValue = e.target.valueAsNumber;
    })
}
});


numberFields.forEach((field) => {
    field.addEventListener("input", (e) => {
    
        if (e.target.value == "") {
            e.target.classList.remove("no_error");
            e.target.classList.add("error");
        } else {
            e.target.classList.add("no_error");
        }

        if (field['id'] == "no_of_people"){
            let eachPersonsBill = billAmount() / e.target.valueAsNumber;
           

            let tip_amount = eachPersonsBill * (Number(tipValue) / 100);
            console.log(tip_amount);

            let total = eachPersonsBill + tip_amount;
            console.log(total)



            console.log(tip_amount.toFixed(2));
            console.log(total.toFixed(2));

        }
    });
});




function getTipTotal(e) {
    let eachPersonsBill = Math.round(billAmount / e.target.value);

    let tip_amount = eachPersonsBill * (tipValue / 100);
     total = eachPersonsBill + tip_amount;

}

