const slider=document.getElementById("volumeSlider");
const volumeValue=document.getElementById("volumeValue");
const audio=document.getElementById("audio");
const popup=document.getElementById("popup");
const verifyBtn=document.getElementById("verifyBtn");
const fakeInput=document.getElementById("fakeInput");
document.addEventListener("click",()=>{audio.play();},{ once: true });
audio.volume=slider.value/100;

slider.addEventListener("input",()=>{
  slider.value=audio.volume*100; 
  volumeValue.textContent =`${slider.value}%`;
  popup.classList.remove("hidden");});

verifyBtn.addEventListener("click",() =>{
  popup.classList.add("hidden");

  let target=Math.floor(Math.random() * 100);
  audio.volume=target/100;
  slider.value=target;
  volumeValue.textContent=`${target}%`;

  let drain=setInterval(()=>{
    let current=Math.round(audio.volume * 100);
    if (current<= 3) {
  clearInterval(drain);
  audio.volume=0;
  slider.value=0;
  volumeValue.textContent="0%";
  return;}
    audio.volume=(current-3)/100;
    slider.value=current-3;
    volumeValue.textContent=`${current-3}%`;
  },200);});
