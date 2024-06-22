const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
1. email 정규표현식을 사용한 validation
 //   - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
//  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')
2. pw 정규표현식을 사용한 validation

//   - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
//  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')

3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

const loginForm = document.querySelector(".login-form");
const email = document.querySelector("#userEmail");
const password = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");
let isEmail = false;
let isPassword = false;

function checkInput(target, isValid, className) {
  if (target.value.length === 0) {
    target.classList.remove(className);
    return false;
  } else if (!isValid) {
    target.classList.add(className);
    return false;
  } else {
    target.classList.remove(className);
    return true;
  }
}
// 이벤트 위임을 통한 코드도 작성해보았습니다

// loginForm.addEventListener("input", (e) => {
//   const target = e.target;
//   const value = target.value;

//   if (target.id === "userEmail") {
//     const em = emailReg(value);
//     isEmail = checkInput(target, em, "is--invalid");
//   } else if (target.id === "userPassword") {
//     const pw = pwReg(value);
//     isPassword = checkInput(target, pw, "is--invalid");
//   }
// });

email.addEventListener("input", (e) => {
  value = e.target.value;
  const em = emailReg(value);
  isEmail = checkInput(e.target, em, "is--invalid");
});

password.addEventListener("input", (e) => {
  value = e.target.value;
  const pw = pwReg(value);
  isPassword = checkInput(e.target, pw, "is--invalid");
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (isEmail && isPassword) window.location.href = "welcome.html";
  else {
    alert("아이디와 비밀번호를 확인해 주세요");
  }
});

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
