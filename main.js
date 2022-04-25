// Author Md sintaul mahdi siam
// Date 22/6/2021

"use strict";
import SimpleCrypto from "simple-crypto-js";

//setting up crypto

const secretKey = "AlightWas100$Far";
const simpleCrypto = new SimpleCrypto(secretKey);

//fild selection
const encryptFild = document.querySelector("#encry");
const decryptFild = document.querySelector("#decry");
const resultFild = document.querySelector("#result");
const viewer = document.querySelector(".viewer");

//button selection
const encryptBtn = document.querySelector("#ebtn");
const decryptBtn = document.querySelector("#dbtn");
const resetbtn = document.querySelectorAll("#rbtn");

//copy btn section
const encryptcBtn = document.querySelector("#ecbtn");
const decryptcBtn = document.querySelector("#dcbtn");
const resultcBtn = document.querySelector("#rcbtn");

//converter switcher btn
const sencrypt = document.querySelector(".sencrypt");
const sview = document.querySelector(".sview");

//Encrypter view
const converter = document.querySelector(".converter");

//Decrypter view
const txtview = document.querySelector("#txtview");
//copy btn
const txtviewcBtn = document.querySelector("#tvcbtn");

//
sencrypt.classList.add("btn_green");
converter.classList.add("shower");

const copyTxt = function (textfild) {
  if (textfild.value) {
    textfild.select();
    textfild.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
};

encryptBtn.addEventListener("click", function () {
  if (encryptFild.value) {
    const txt = encryptFild.value.trim();
    const resultText = simpleCrypto.encrypt(txt);
    encryptFild.value = "";
    resultFild.value = resultText;
  } else {
    encryptFild.focus();
  }
});

decryptBtn.addEventListener("click", function () {
  if (decryptFild.value) {
    const txt = decryptFild.value.trim();
    console.log(txt);
    let resultText = simpleCrypto.decrypt(txt);

    // decryptFild.value = "";
    txtview.value = resultText;
    // copyTxt(txtview);
  } else {
    decryptFild.focus();
  }
});

encryptcBtn.addEventListener("click", function () {
  copyTxt(encryptFild);
});

decryptcBtn.addEventListener("click", function () {
  copyTxt(decryptFild);
});

resultcBtn.addEventListener("click", function () {
  copyTxt(resultFild);
});

resetbtn.forEach(function (v) {
  v.addEventListener("click", function () {
    encryptFild.value = "";
    decryptFild.value = "";
    resultFild.value = "";
    txtview.value = "";
  });
});

let visible = true;

sencrypt.addEventListener("click", function () {
  if (!visible) {
    sencrypt.classList.add("btn_green");
    sview.classList.remove("btn_green");
    converter.classList.add("shower");
    viewer.classList.remove("shower");
    visible = true;
  }
});

sview.addEventListener("click", function () {
  if (visible) {
    sview.classList.add("btn_green");
    sencrypt.classList.remove("btn_green");
    viewer.classList.add("shower");
    converter.classList.remove("shower");
    visible = false;
  }
});

txtviewcBtn.addEventListener("click", function () {
  copyTxt(txtview);
});
