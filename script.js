//1
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const res1 = document.querySelector("#result1");
const resuslt1 = document.querySelector(".Res1");

resuslt1.addEventListener("click", ()=> {
    if (inp1.value === "" && inp2.value === "") {
        res1.textContent = "add something in inputs";
    } else {
        res1.textContent = "all inputs with content";
    }
});``

//2
let num1 = null;
let num2 = null;
const res2 = document.querySelector("#result2");
const result2 = document.querySelector(".Res2");

result2.addEventListener("click", ()=> {
    num1 = document.querySelector("#num1");
    num2 = document.querySelector("#num2");
    if (Number(num1.value) + Number(num2.value) >= 10) {
        res2.textContent = "1st num + 2nd num >= 10";
    } else {
        res2.textContent = "1st num + 2nd num <= 10";
    }
});

//3
let js = null;
const res3 = document.querySelector("#result3");
const result3 = document.querySelector(".Res3");

result3.addEventListener("click", ()=> {
    console.log(123);
    js = document.querySelector("#js");
    console.log(js.value);
    
    if (js.value.includes("javascript")) {
        res3.textContent = "javascript finde in text";
    } else {
        res3.textContent = "javascript not finde in text";
    }
});

//4
let num4 = document.querySelector("#num4");
const res4 = document.querySelector("#result4");
const result4 = document.querySelector(".Res4");

result4.addEventListener("click", ()=> {

    if (Number(num4.value) > 10 && Number(num4.value) < 20) {
        res4.textContent = "num > 10 and < 20";
    } else {
        res4.textContent = "num dont > 10 and < 20";
    }
});

//5
const submit = document.querySelector(".submit");
const nameF = document.querySelector("#nameF");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const result5 = document.querySelector("#Res5");

submit.addEventListener("click", ()=> {
    if (nameF.value.length >= 3) { //&&
        //email.value.includes("@") &&
        //pass.value.length >= 6) {
        location.href = "./second.html";
    } else {
        result5.textContent = "error";
    }
});