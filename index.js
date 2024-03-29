

// for (var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",keyListener(document.querySelectorAll(".drum")[i].innerHTML))

// }
// function keyListener(key)
//     {
        

//         switch(key)
//         {
//             case "w":
//                var aud=new Audio('./sounds/tom-1.mp3');
//                 break;
//             case "a":
//                 var aud=new Audio('./sounds/tom-2.mp3');
//                 break;
//             case "s":
//                 var aud=new Audio('./sounds/tom-3.mp3');
//                 break;
//             case "d":
//                 var aud=new Audio('./sounds/tom-4.mp3');
//                 break;
//             case "j":
//                 var aud=new Audio('./sounds/snare.mp3');
//                 break;
//             case "k":
//                 var aud=new Audio('./sounds/crash.mp3');
//                 break;
//             case "l":
//                 var aud=new Audio('./sounds/kick-bass.mp3');
//             break;
            

//         }
//     aud.play();
//     }


//detection button press from mouse
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var n=this.innerHTML;
        keyListener(n);
        buttonAnimation(n);
    })

}


//detecting key press from keyboard
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.addEventListener("keydown",function(event){
        
        keyListener(event.key);
        buttonAnimation(event.key);
    })

}

function keyListener(key)
    {
        

        switch(key)
        {
            case "w":
               var aud=new Audio('./sounds/tom-1.mp3');
                aud.play();
                break;
            case "a":
                var aud=new Audio('./sounds/tom-2.mp3');
                aud.play();
                break;
            case "s":
                var aud=new Audio('./sounds/tom-3.mp3');
                aud.play();
                break;
            case "d":
                var aud=new Audio('./sounds/tom-4.mp3');
                aud.play();
                break;
            case "j":
                var aud=new Audio('./sounds/snare.mp3');
                aud.play();
                break;
            case "k":
                var aud=new Audio('./sounds/crash.mp3');
                aud.play();
                break;
            case "l":
                var aud=new Audio('./sounds/kick-bass.mp3');
                aud.play();
                break;
            

        }
    }

    function buttonAnimation(currentkey){
        var key="."+currentkey;
        document.querySelector(key).classList.add("pressed");

        setTimeout(function(){
            document.querySelector(key).classList.remove("pressed");
        },100)

    }