debugger
let songIndex=0;
let audioElement = new Audio('/audio/3.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgresBar= document.getElementById("myProgresBar");
let gif= document.getElementById("gif");
let songItem= Array.from( document.getElementsByClassName('song-item'));

let song=[

    {songName:"Mast Nazron Se", filePath:"/audio/1.mp3", coverPath:"/image/3.jpg" },
    {songName:"Khwaab Khwaab", filePath:"/audio/2.mp3", coverPath:"/image/3.jpg" },

    {songName:"Mitra Re", filePath:"/audio/3.mp3", coverPath:"/image/3.jpg" },

    {songName:"Wajah Tum Ho", filePath:"/audio/4.mp3", coverPath:"/image/3.jpg" },

    {songName:" Galliyan", filePath:"/audio/5.mp3", coverPath:"/image/3.jpg" },

    {songName:"Khuda Bhi", filePath:"/audio/6.mp3", coverPath:"/image/3.jpg" },

    {songName:"Kuch Toh Hua Hai", filePath:"/audio/7.mp3", coverPath:"/image/3.jpg" },

    


]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=song[i].songName;
    console.log(element,i);

})


// let audio = new Audio('/audio/1.mp3');
// audio.play();
// Handle play/pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
})


audioElement.addEventListener('timeupdate', ()=>{
console.log("update");
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgresBar.value=progress;


})

myProgresBar.addEventListener('change',()=>{
    audioElement.currentTime= (myProgresBar.value * audioElement.duration)/100;
})
const makeAllplayes=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.add('fa-pause-circle');
})

}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllplayes();
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.currentTime=0;
    audioElement.src=`/audio/${index+1}.mp3`;
    audioElement.play();

})
})
console.log(songIndex)


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previus').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
