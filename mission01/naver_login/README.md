# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

재사용이 가능한 함수를 분리하고 각각의 input에 넣었습니다

```javascript
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
```

### 아쉬운 점

이메일과 비밀번호를 정상 입력후 welcome.html로 넘어간 상태에서
뒤로 가기를 눌렀을 때
이메일 input에 아이디가 입력 돼있는걸 보고
비밀번호만 입력후 로그인 버튼을 눌렀지만
로그인이 되지 않았습니다

그 이유가 input에 입력 이벤트가 발생하지 않은 상태이기 때문에
input에 value값을 찾아오지 못하였고

그로인해 checkInput 함수가 작동하지 않아
welcome.html로 넘어갈 수 없다는걸 알았지만

뒤로가기를 클릭 후에도 input에 값을 가져와
비밀번호만 입력해도 로그인되게 하려 했지만

그 부분은 해결하지 못하였다
