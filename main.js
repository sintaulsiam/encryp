"use strict";

const encryptFild = document.querySelector("#encry");
const decryptFild = document.querySelector("#decry");
const resultFild = document.querySelector("#result");

const encryptBtn = document.querySelector("#ebtn");
const decryptBtn = document.querySelector("#dbtn");
const encryptcBtn = document.querySelector("#ecbtn");
const decryptcBtn = document.querySelector("#dcbtn");
const resultcBtn = document.querySelector("#rcbtn");
const resetbtn = document.querySelectorAll("#rbtn");

const sencrypt = document.querySelector(".sencrypt");
const sview = document.querySelector(".sview");

const converter = document.querySelector(".converter");
const viewer = document.querySelector(".viewer");

const txtview = document.querySelector("#txtview");
const txtviewcBtn = document.querySelector("#tvcbtn");

sencrypt.classList.add("btn_red");
converter.classList.add("shower");

const encrypKey =
  "w*+=ecv'bnmi;opaqsdfgIjkMhVCBGFD_-SAPXZLK!JHN#O67845~U19rtyu.l@zx%^YT20$3,REWQ@:".split(
    ""
  );

const alpha =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&0123456789~!@#$%^*_-+=';,. ".split(
    ""
  );

const copyTxt = function (textfild) {
  if (textfild.value) {
    textfild.select();
    textfild.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
};

encryptBtn.addEventListener("click", function () {
  if (encryptFild.value) {
    let resultText = [];
    const txt = encryptFild.value.trim().split("");
    txt.forEach(function (c, i) {
      let n = alpha.findIndex((val) => val == c);
      if (n >= 0) {
        resultText.push(encrypKey[n]);
      } else {
        resultText.push(txt[i]);
      }
      encryptFild.value = "";
      resultFild.value = resultText.join("");
      copyTxt(resultFild);
    });
  } else {
    encryptFild.focus();
  }
});

decryptBtn.addEventListener("click", function () {
  if (decryptFild.value) {
    let resultText = [];
    const txt = decryptFild.value.trim().split("");
    txt.forEach(function (c, i) {
      let n = encrypKey.findIndex((val) => val == c);
      if (n >= 0) {
        resultText.push(alpha[n]);
      } else {
        resultText.push(txt[i]);
      }
      // decryptFild.value = "";
      txtview.value = resultText.join("");
      // copyTxt(txtview);
    });
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
    sencrypt.classList.add("btn_red");
    sview.classList.remove("btn_red");
    converter.classList.add("shower");
    viewer.classList.remove("shower");
    visible = true;
  }
});

sview.addEventListener("click", function () {
  if (visible) {
    sview.classList.add("btn_red");
    sencrypt.classList.remove("btn_red");
    viewer.classList.add("shower");
    converter.classList.remove("shower");
    visible = false;
  }
});

txtviewcBtn.addEventListener("click", function () {
  copyTxt(txtview);
});
