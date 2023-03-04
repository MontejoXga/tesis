
var SERVER_URL = 'http://127.0.0.1:5000/detect';

navigator.mediaDevices.getUserMedia(({audio:false, video: true}))
    .then((stream)=>{
        console.log(stream)

        let video = document.getElementById('video')
        video.srcObject = stream

    }).catch((error)=>{
        console.log(error);
    })

document.getElementById("takeSnapshot").addEventListener("click",()=>{
    document.querySelector(".foto").style.display = "grid";
    document.querySelector(".div_camera").style.display = "none";
    takePicture();
    
})

function takePicture() {
    const canvas = document.getElementById("canvasElement");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    var imgURL = canvas.toDataURL();
    console.log(imgURL);
    
    $.ajax({
      type: 'POST',
      url: SERVER_URL,
      data: imgURL,
      timeout: 100 * 25,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: function(data){
        if(data.success){
          alert('imagen enviada');
        }else{
          alert('hubo un error en el envio');
        }
      },
      error: function(data){
        alert('error');
      }
    }).done(function(){
      
      console.log("enviado");
  
    });

}

