// "use strict";

// const encrypKey =
//   "w*+=ecv'bnmi;opaqsdfgIjkMhVCBGFD_-SAPXZLK!JHN#O67845~U19rtyu.l@zx%^YT20$3,REWQ@:".split(
//     ""
//   );

// const alpha =
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&0123456789~!@#$%^*_-+=';,. ".split(
//     ""
//   );

// const encryptFild = document.querySelector("#encry");
// const decryptFild = document.querySelector("#decry");
// const resultFild = document.querySelector("#result");

// const encryptBtn = document.querySelector("#ebtn");
// const decryptBtn = document.querySelector("#dbtn");
// const encryptcBtn = document.querySelector("#ecbtn");
// const decryptcBtn = document.querySelector("#dcbtn");
// const resultcBtn = document.querySelector("#rcbtn");
// const resetbtn = document.querySelector("#rbtn");

// const copyTxt = function (textfild) {
//   if (textfild.value) {
//     textfild.select();
//     textfild.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//   }
// };

// encryptBtn.addEventListener("click", function () {
//   if (encryptFild.value) {
//     let resultText = [];
//     const txt = encryptFild.value.trim().split("");
//     txt.forEach(function (c, i) {
//       let n = alpha.findIndex((val) => val == c);
//       if (n >= 0) {
//         resultText.push(encrypKey[n]);
//       } else {
//         resultText.push(txt[i]);
//       }
//       encryptFild.value = "";
//       resultFild.value = resultText.join("");
//       copyTxt(resultFild);
//     });
//   } else {
//     encryptFild.focus();
//   }
// });

// decryptBtn.addEventListener("click", function () {
//   if (decryptFild.value) {
//     let resultText = [];
//     const txt = decryptFild.value.trim().split("");
//     txt.forEach(function (c, i) {
//       let n = encrypKey.findIndex((val) => val == c);
//       if (n >= 0) {
//         resultText.push(alpha[n]);
//       } else {
//         resultText.push(txt[i]);
//       }
//       // decryptFild.value = "";
//       resultFild.value = resultText.join("");
//       copyTxt(resultFild);
//     });
//   } else {
//     decryptFild.focus();
//   }
// });

// encryptcBtn.addEventListener("click", function () {
//   copyTxt(encryptFild);
// });

// decryptcBtn.addEventListener("click", function () {
//   copyTxt(decryptFild);
// });

// resultcBtn.addEventListener("click", function () {
//   copyTxt(resultFild);
// });

// resetbtn.addEventListener("click", function () {
//   encryptFild.value = "";
//   decryptFild.value = "";
//   resultFild.value = "";
// });

"use strict";

var encrypKey =
  "w*+=ecv'bnmi;opaqsdfgIjkMhVCBGFD_-SAPXZLK!JHN#O67845~U19rtyu.l@zx%^YT20$3,REWQ@ʤ".split(
    ""
  );

var alpha =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&0123456789~!@#$%^*_-+=';,. ".split(
    ""
  );

var encryptFild = document.querySelector("#encry");
var decryptFild = document.querySelector("#decry");
var resultFild = document.querySelector("#result");

var encryptBtn = document.querySelector("#ebtn");
var decryptBtn = document.querySelector("#dbtn");
var encryptcBtn = document.querySelector("#ecbtn");
var decryptcBtn = document.querySelector("#dcbtn");
var resultcBtn = document.querySelector("#rcbtn");
var resetbtn = document.querySelector("#rbtn");

var copyTxt = function copyTxt(textfild) {
  if (textfild.value) {
    textfild.select();
    textfild.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
};

encryptBtn.addEventListener("click", function () {
  if (encryptFild.value) {
    (function () {
      var resultText = [];
      var txt = encryptFild.value.trim().split("");
      txt.forEach(function (c, i) {
        var n = alpha.findIndex(function (val) {
          return val == c;
        });
        if (n >= 0) {
          resultText.push(encrypKey[n]);
        } else {
          resultText.push(txt[i]);
        }
        encryptFild.value = "";
        resultFild.value = resultText.join("");
        copyTxt(resultFild);
      });
    })();
  } else {
    encryptFild.focus();
  }
});

decryptBtn.addEventListener("click", function () {
  if (decryptFild.value) {
    (function () {
      var resultText = [];
      var txt = decryptFild.value.trim().split("");
      txt.forEach(function (c, i) {
        var n = encrypKey.findIndex(function (val) {
          return val == c;
        });
        if (n >= 0) {
          resultText.push(alpha[n]);
        } else {
          resultText.push(txt[i]);
        }
        // decryptFild.value = "";
        resultFild.value = resultText.join("");
      });
    })();
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

resetbtn.addEventListener("click", function () {
  encryptFild.value = "";
  decryptFild.value = "";
  resultFild.value = "";
});
