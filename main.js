function start(){
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7XH__pM_W/model.json",modelLoaded);

}
function modelLoaded(){
    console.log("Teachable machine is linked.")
    model.classify(showResult);
}
function showResult(error,result){
    if (error){
        console.log(error);
    }else if (result){
        console.log(result);
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        document.getElementById("sound").style.color='rgb('+r+','+g+','+b+')';

        document.getElementById("sound").innerHTML = "I can hear :" + result[0].label;
        img1 = document.getElementById("ani");
        if(result[0].label=="meow"){
            img1.src = "meow.png";
        }else if(result[0].label=="dog"){
            img1.src = "dog.jpeg";
        }else{
            img1.src = "ear.jpeg";
        }

     }
}