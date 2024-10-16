
Webcam.set({
    width:350,
    height:320,
    image_format : 'png',
    png_quality:100
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');
// setting up the cam

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
// start
console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uKRg5Z0nV/model.json', modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = toSpeak ;

  var utterThis = new SpeechSynthesisUtterance(speak_data_1);
  synth.speak(utterThis);
}

function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
   
    gesture = results[0].label;
toSpeak = "";
    
    if(gesture == "amazing") 
    { toSpeak = "This is looking amazing"; 
    document.getElementById("result_object_gesture_icon").innerHTML = "&#9995;"; } 

    else if(gesture == "best") 
    { toSpeak = "All the best"; 
    document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;"; } 

    else if(gesture == "victory") 
    { toSpeak = "That was the marvelous victory"; 
    document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;"; }
    speak();
    }
  
}

