class Quiz{
    constructor(){


        
    }

    result(){
       
        var dp= 120  
        var y=400
        for(var i=1; i< 6 ; i++){

            if(crtAns[i-1]=== options[i-1]){
                fill("green")
            }
            else{
                y=y+30
                textSize(17)
                
                fill("black")
                text("correct answers are here for wrong once",100,370)
                text(i + " correct answers :" +crtAns[i-1] ,100,y)
                fill("red")

            }
             textSize(17)


            text(i + " answer :" + options[i-1], 350,dp)
            dp = dp+30
          
          }
          stroke("black")
          fill("orange");
          textSize(18)
          
          text(contestantname + "  here is your result" , 200, 40 );
          fill("teal")
          text("note: correct answers are displayed in green color else in red",100,70)
    
    }
}