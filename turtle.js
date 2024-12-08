/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />

//Functions (ignore):

function drawCircle(x,y,r){
    var limit = 0;

    x = prompt("What should the x coordinate be?")
    y = prompt("What should the y coordinate be?")
    r = prompt("What should the radius of the circle be?")
    goto(x,y);
    
    w = prompt("What should the width of the pen be? Default is 1.")
    
    width(w);
    
    var b = null;
    b = r;
    r = r - 10;

    while(limit <= 36){
        //r = r - 10;
        penup();
        forward(r);
        pendown();
        forward(10);
        goto(x,y);
        left(10);

        limit = limit + 1;
    }
}

function drawFullCircle(x,y,r,w){
    var limit = 0;

    x = prompt("What should the x coordinate be?")
    y = prompt("What should the y coordinate be?")
    r = prompt("What should the radius of the circle be?")
    w = prompt("What should the width of the pen be? Default is 1.")
    
    width(w);
    
    b = r;
    
    penup();
    forward(r);
    pendown();
    left(90);

    while(limit <= 360){
        forward(1);
        left(1);

        limit = limit + 1;
    }
}

/*
var n = getRandInt(5,10);
var m = getRandInt(0,255);
var i = getRandInt(6,21);
var z = getRandInt(7,10);
*/

function getRandInt(min,max){

    var p = Math.floor(Math.random() * (max - min + 1)) + min;
    return p;

}

//console.log(n,m,i,z);

function getRandArray(min,max,limit,arr,l){
    limit = 0;
    arr = [];
    l = 0;
    while(limit <=10){
        arr[l] = getRandInt(min,max);

        l = l + 1;
        limit = limit + 1;
    }
    return arr;
}

function randTris(l,limit){
    l = 0;
    limit = 0;

    while(l <= 50){
        var sl = getRandInt(0,50);
        var ssll = getRandInt(0,100);
        var ls = getRandInt(0,50); 
        tri();
        penup();
        forward(sl);
        left(ssll);
        l = l + 1;
    }
}

function tri(){
    pendown();
    while(limit < 3){
        //goto(0,-218)
        //goto(200,200)
        /*
        left(ls)
        penup();
        forward(sl)
        pendown();
        forward(ssll);
        limit = limit + 1;
        */
        left(120)
        forward(50)
        limit = limit + 1;
    }
}

//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/

/*

showGrid(50); 
setSpeed(200);

width(5);
color("blue");
forward(120);

width(1);
left(65);
color("red");
forward(150);

goto(184,-208);
width(2);
right(100);
color("green");
forward(150);
*/

/*
color("green")
goto(0,0)
left(120)
forward(100)
left(120)
forward(100)
left(120)
forward(100)
*/

//uhhh

//wow i can do "complex" code

var thing = prompt("What should the object be? Cube, Triangle, Stars, Snail, Supernova, Arraystar, Generated, Linecircle, Fullcircle, RandomTris, what, yes.")

var sl = prompt("How many pixels big should the object be? The size will be ignored for the Stars, the Supernova, the Generated, the Arraystar, the Linecircle, the Fullcircle and the Snail.")
sl = parseInt(sl);

var arr = [191, 56, 152, 116, 220, 249, 177, 107, 233, 66, 180, 170, 200, 210, 68, 149, 96, 55, 52, 218, 109, 70, 201, 129, 159, 226, 133, 218, 155, 219, 182, 121, 218, 69, 245, 133, 165, 176, 51, 116, 84, 108, 208, 167, 181, 157, 134, 147, 92, 213, 170, 68, 91, 197, 53, 150, 60, 151, 130, 216, 146, 127, 243, 139, 213, 66, 66, 156, 51, 217, 227, 185];
console.log(arr);

if (thing == "Cube")
    {
        var limit = 0;
        
        while (limit <= 4){
        
            //goto(0,-218)
            //goto(200,200)
            left(90);
            forward(sl);
            limit = limit + 1;
            /*
            left(90)
            forward(sl)
            left(90)
            forward(sl)
            left(90)
            forward(sl)
            */
            }
    }
    else if (thing == "Stars")
        {
            var limit = 0;
            
            while (limit <= 36){
            
                //goto(0,-218)
                //goto(200,200)
                color(231,76,60);
                goto(0,0);
                left(10);
                forward(200);
                limit = limit + 1;
            }
                limit = 0;

            while(limit < 45){
                goto(-200,-200);
                color(34,153,84);
                forward(100);
                left(8);
                limit = limit + 1;
            }
            limit = 0;

            while(limit < 45){
                goto(269,274);
                color(36,113,163);
                forward(70);
                left(8);
                limit = limit + 1;
            }
        }
        else if (thing == "stars")
            {
                var limit = 0;
                
                while (limit <= 36){
                
                    //goto(0,-218)
                    //goto(200,200)
                    color(231,76,60);
                    goto(0,0);
                    left(10);
                    forward(200);
                    limit = limit + 1;
                }
                    limit = 0;
    
                while(limit < 45){
                    goto(-200,-200);
                    color(34,153,84);
                    forward(100);
                    left(8);
                    limit = limit + 1;
                }
                limit = 0;
    
                while(limit < 45){
                    goto(269,274);
                    color(36,113,163);
                    forward(70);
                    left(8);
                    limit = limit + 1;
                }
            }
            else if (thing == "Supernova")
                {
                    var limit = 0;
                    var l = arr[n];
                    var n = 0

                    while (limit <= 72){
                    
                        //goto(0,-218)
                        //goto(200,200)
                        color(36,113,163);
                        goto(0,0);
                        left(5);
                        forward(arr[n]);
                        limit = limit + 1;
                        n = n + 1;

                    }
                }
                else if (thing == "supernova")
                    {
                        var limit = 0;
                        var l = arr[n];
                        var n = 0
    
                        while (limit <= 72){
                        
                            //goto(0,-218)
                            //goto(200,200)
                            color(36,113,163);
                            goto(0,0);
                            left(5);
                            forward(arr[n]);
                            limit = limit + 1;
                            n = n + 1;
    
                        }
                    }
                    else if (thing == "Arraystar")
                        {
                            var limit = 0;
                            var l = arr[n];
                            var n = 0
        
                            for (i = 0; i <= 72; i++){
                                goto(0,0)
                                forward(arr[i])
                                left(5)
                                }
                        }
                        else if(thing == "Generated"){
                            var limit = 0;
                            var l = Math.floor(101 * Math.random());
                            var arr = [];
                            var i = 0;
    
                            while(limit <= 36){
                                l = Math.floor(101 * Math.random());
                                arr[i] = l
                                goto(0,0);
                                forward(l);
                                left(10);
                                i = i + 1;
                                console.log(arr);
                                limit = limit + 1;
                            }
                        }
                        else if(thing == "generated"){
                            var limit = 0;
                            var l = Math.floor(101 * Math.random());
                            var arr = [];
                            var i = 0;
    
                            while(limit <= 36){
                                l = Math.floor(101 * Math.random());
                                arr[i] = l
                                goto(0,0);
                                forward(l);
                                left(10);
                                i = i + 1;
                                console.log(arr);
                                limit = limit + 1;
                            }
                        }
                        else if(thing == "Linecircle"){
                            drawCircle();
                        }
                        else if(thing == "Fullcircle"){
                            drawFullCircle();
                        }
                        else if(thing == "RandomTris"){
                            randTris();
                        }
            else if (thing == "Snail")
                {
                    var limit = 0;
                    var fw = 200;
                    goto(0,0);
                    left(-90);
                    while (limit <= 30){

                        //angle(18);
                        //goto(0,-218)
                        //goto(200,200)
                        left(-90);
                        forward(fw);
                        limit = limit + 1;
                        fw = fw - 10;
                    }
                    /*
                    for(limit = 0; limit <= 20; limit = limit + 1){
                        left(90);
                        forward(fw);
                        limit = limit + 1;
                        fw = fw - 10;
                    }
                    */
                }
                else if (thing == "snail")
                    {
                        var limit = 0;
                        var fw = 200;
                        goto(0,0);
                        left(-90);
                        while (limit <= 30){
    
                            //angle(18);
                            //goto(0,-218)
                            //goto(200,200)
                            left(-90);
                            forward(fw);
                            limit = limit + 1;
                            fw = fw - 10;
                        }
                        /*
                        for(limit = 0; limit <= 20; limit = limit + 1){
                            left(90);
                            forward(fw);
                            limit = limit + 1;
                            fw = fw - 10;
                        }
                        */
                    }
    else if (thing == "cube")
        {
            var limit = 0;
            
            while (limit <= 4){
            
                //goto(0,-218)
                //goto(200,200)
                left(90);
                forward(sl);
                limit = limit + 1;
                /*
                left(90)
                forward(sl)
                left(90)
                forward(sl)
                left(90)
                forward(sl)
                */
            }
        }
else if (thing == "Triangle")
    {
        while(limit < 3){
            //goto(0,-218)
            //goto(200,200)
            left(120)
            forward(sl)
            }
            /*
            left(120)
            forward(sl)
            left(120)
            forward(sl)
            */
    }
    else if (thing == "triangle")
        {
            while(limit < 3){
                //goto(0,-218)
                //goto(200,200)
                left(120)
                forward(sl)
                }
                /*
                left(120)
                forward(sl)
                left(120)
                forward(sl)
                */
        }
else if (thing == "yes")
    {
        var limit = 0;
        var caca = 1;
        while(limit < 700)
        {
            forward(caca);
            left(caca);
            caca = caca + 1;
            limit = limit + 1;
        }
        
    }
    else if (thing == "Yes")
        {
            var limit = 0;
            var caca = 1;
            while(limit < 700)
            {
                forward(caca);
                left(caca);
                caca = caca + 1;
                limit = limit + 1;
            }
            
        }
    else if (thing == "what")
        {
            var limit = 0;
            var caca = 1;
            while(limit < 700)
            {
                forward(caca);
                left(caca);
                caca = caca + 0.01;
                limit = limit + 0.01;
            }
            
        }
        else if (thing == "What")
            {
                var limit = 0;
                var caca = 1;
                while(limit < 700)
                {
                    forward(caca);
                    left(caca);
                    caca = caca + 0.01;
                    limit = limit + 0.01;
                }
                
            }/*
            else if (thing == "Custom"){
                var t = prompt("How many corners should the object have?");
                var h = prompt("")
            }*/

else 
{
    alert("No info available");
}

//Turtle Stuff:

/*

turtle();

var limit = 0

function turtle()
{
var obj = prompt("How many corners should the object have?")
obj = parseInt(obj)
var sll = prompt("How big should the object be?")
sll = parseInt(sll)

if (obj !== null && sll !== null)
{
    while (limit < obj)
    {
        forward(sll)
        left(obj / 360)
        limit = limit ++
    }
}
else if(obj !== null && sll == null)
{
    alert("Info is not complete.")
}
else if(obj == null && sll !== null)
{
    alert("Info is not complete.")
}
else
{
    alert("No info available.")
    turtle();
}
}
*/


