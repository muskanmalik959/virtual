let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
 let day=new Date() 
 let Hours=day.getHours()
if(Hours>=0 && Hours<12){
    speak("Good Morning")
}
else if(Hours>=12 && Hours<16){
    speak("Good afternoon")
}
else{
    speak("Good evening")
}
}
// window.addEventListener('load',()=>{
//     wishMe()
// })

let speechRecognition= window.SpeechRecognition || webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
recognition.start()
btn.style.display="none"
voice.style.display="block"
})
function takeCommand(message){
  btn.style.display="flex" 
  voice.style.display="none" 
    if(message.includes("hello")||message.includes("hey")){
     speak("hello,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by mooskaan")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("faceboob")){
        speak("opening facebook...")
        window.open("https://facebok.com/","_blank")
    }
else{
    speak(`this is what i found internet regarding ${message}`)
window.open(`https://www.google.com/search?q=${message}`)
}
}

