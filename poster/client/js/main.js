/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

// 오디오 파일 import
import AudioPlayer from "./audio.js";

const ember = new AudioPlayer("./assets/audio/ember.m4a");
const wade = new AudioPlayer("./assets/audio/wade.m4a");
const clod = new AudioPlayer("./assets/audio/clod.m4a");
const gale = new AudioPlayer("./assets/audio/gale.m4a");

const elemental = [ember, wade, clod, gale];
// 오디오 파일을 배열로 만듦

const typeOf = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

const nav = document.querySelector(".nav"); // nav 태그
const poster = document.querySelector(".visual > div > img"); // poster 이미지
const nickName = document.querySelector(".nickName"); // nickName

function handleClick(e) {
  const li = e.target.closest("li"); // 내가 클릭한 li
  if (!li) return;

  const index = li.dataset.index - 1; // data-index 값을 가져오고 그 값이 1부터 시작하기 때문에 -1을 해주었습니다.

  setBgColor(document.body, data[index].color[0], data[index].color[1]);
  setImage(poster, data[index]);
  setNameText(nickName, data[index]);

  const liList = [...li.closest("ul").children]; // li의 가장 가까운 ul 부모를 찾고 그 자식들을(li) 찾습니다.
  // 전개구문을 사용하여 배열로 만듭니다.

  // liList를 반복하여 각각의 li의 클래스를 제거합니다.
  liList.forEach((li, i) => {
    li.classList.remove("is-active");
    elemental[i].stop();
  });
  // 클릭한 li한테만 클래스를 추가합니다.
  li.classList.add("is-active");
  elemental[index].play();
}

function setBgColor(node, colorA, colorB = "#000") {
  if (typeOf(node) == "string") {
    node = document.querySelector(node);
  }

  node.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}

function setImage(node, data) {
  if (typeOf(node) == "string") {
    node = document.querySelector(node);
  }
  node.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  node.alt = data.alt;
}

function setNameText(node, data) {
  if (typeOf(node) == "string") {
    node = document.querySelector(node);
  }

  node.textContent = data.name;
}

nav.addEventListener("click", handleClick);

// 선생님 코드

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// const nav = document.querySelector('nav');
// const navList = [...document.querySelectorAll('nav li')];
// const visual = document.querySelector('.visual img');
// const nickName = document.querySelector('.nickName');

// function setChangeName(target,index){

//   gsap.fromTo(target,{autoAlpha:0,x:-30},{autoAlpha:1,x:0})
//   // target.textContent = data[index-1].name;

// }

// function setChangeImage(target,index){
//   if(!target.src) return;
//   gsap.fromTo(target,{autoAlpha:0,x:30},{autoAlpha:1,x:0})
//   // target.src = `./assets/${data[index-1].name.toLowerCase()}.jpeg`
// }

// function setChangeBgColor({target,colorA,colorB}){
//   // if(typeof target === 'string') target = document.querySelector(target);
//   // target.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]},${data[index-1].color[1]})`;
//   gsap.to(target,
//     {backgroundImage:`linear-gradient(to bottom, ${colorA}, ${colorB})`,duration:1}
//     )

//   if(!colorB){
//     target.style.background = colorA;
//     return;
//   }
//   target.style.backgroundImage = `linear-gradient(to bottom, ${colorA},${colorB})`;
// }

// const audioList = [
//   new AudioPlayer(`./assets/audio/ember.m4a`),
//   new AudioPlayer(`./assets/audio/wade.m4a`),
//   new AudioPlayer(`./assets/audio/clod.m4a`),
//   new AudioPlayer(`./assets/audio/gale.m4a`),
// ];

// function audio(arr,index){
//   arr.forEach(audio => audio.stop())

//   const target = arr[index-1];

//   if(index === '2' || index === '4'){
//     target.volume = 0.3
//   }

//   target.play()
// }

// function handleNav(e){

//   const target = e.target.closest('li');

//   if(!target) return;

//   const index = e.target.closest('li').dataset.index;
//   const dataIndex = data[index-1];

//   audio(audioList,index)

//   // if(audio.isPlaying()){

//   //   audio.pause()
//   // }

//   setChangeName(nickName,index);
//   setChangeImage(visual,index)
//   setChangeBgColor({
//     target:'body',
//     colorA:dataIndex.color[0],
//     colorB:dataIndex.color[1]
//   })

//   // document.body.style.background = `linear-gradient(to bottom, ${dataIndex.color[0]} , ${dataIndex.color[1]})`

//   navList.forEach( li => li.classList.remove('is-active'));

//   target.classList.add('is-active');

// }

// nav.addEventListener('click',handleNav)
