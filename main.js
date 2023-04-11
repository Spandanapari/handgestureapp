Webcam.set({
    width: 250,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
mycam=document.getElementById("camera");
Webcam.attach(mycam);

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img src='captured_image' src='"+ data_uri +"'> "
    });

}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("",modelloaded);
function modelloaded(){
    console.log("modelisloaded")
}

prediction="";

function speak()
{
    synth=window.speechSynthesis;
    speak_data_1="The prediction is "+ prediction_1;
    
    var utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis)
}
function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresults)
}
function gotresults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results(0).label;
        
        prediction=results(0).label;
       
        speak();
        if (results[0].label=="thumsup")
        {
            document.getElementById("update_gesture").innerHTML="&#128077";
        }
        if (results[0].label=="peace")
        {
            document.getElementById("update_gesture").innerHTML="&#9996";
        }
        if (results[0].label=="ok")
        {
            document.getElementById("update_gesture").innerHTML="&#128076";
        }
      

    }

}