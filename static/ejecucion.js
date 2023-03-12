
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
    
    var muestreo

    $.ajax({
      type: 'POST',
      url: SERVER_URL,
      data: imgURL,
      timeout: 100 * 25,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: function(data){
        alert('dato enviado correctamente');
        console.log(data)
      },
      error: function(data){
        alert('error');
      }
    }).done(function(data){
      var feedsParent = canvas.parentNode;
      feedsParent.removeChild(canvas);
      feedsParent.insertAdjacentHTML("beforebegin", '<canvas>'+data+'</canvas>')
      /* este codigo si corre */
      muestreo = data['image'];
      console.log('enviado'+muestreo);

  
    });

}

