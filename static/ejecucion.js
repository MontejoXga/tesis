navigator.mediaDevices.getUserMedia(({audio:false, video: true}))
    .then((stream)=>{
        console.log(stream)

        let video = document.getElementById('video')
        video.srcObject = stream

    }).catch((error)=>{
        console.log(error);
    })

document.getElementById("takeSnapshot").addEventListener("click",()=>{
    console.log("hola")
    document.querySelector(".foto").style.display = "grid";
    document.querySelector(".div_camera").style.display = "none";
    takePicture();
    
})

function takePicture() {
    const canvas = document.getElementById("canvasElement");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}