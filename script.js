//Script for the present delivery simulator

//clears the output area whenever user clicks "Clear Output" button
$("#clearButton").click(function(){
    $("#outputArea").html("");
});
  
//Runs a simulation on after taking user inputs
$("form").submit(function(e){
    
    e.preventDefault();                                                 //prevents from reloading the page
    $("#outputArea").html("");                                          //clears the output area to show the new output
    var presentsDelivered = 0;                                          //numbers of presents delivered by robots
    const nRobots = $("#nRobots").val();                                //number of robots
    const positions = $("#positions").val().toLowerCase().split("");    //generates an array of string characters
    var robotPositions = [];                                            //An array to hold the robot positions(cordinates)
    var housePositions = [];                                            //An array to hold the house cordinates where presents gets delivered
    var currentRobot = 0;                                               //a temp variable to keep track of robotPosition's index
    
    //A function to keep track of delivered presents, and to print the output step by step 
    function deliverPresent(){

        //to check there are no other robots on the space in which they are ending their turn
        var isDelivered = false;                                           
        for(var j=0; j<robotPositions.length; j++){
            if((j != currentRobot)){
                if((robotPositions[j][0] == robotPositions[currentRobot][0]) && (robotPositions[j][1] == robotPositions[currentRobot][1])){
                isDelivered = true;
                break;                                                  //breaks the for loop and stops so that it doesn't have to iterate through rest of an array
                }
            }
        }

        //To check if robot is not at the origin
        if((robotPositions[currentRobot][0] != 0) || (robotPositions[currentRobot][1] != 0)){
            isDelivered?"":presentsDelivered++;                        //to increment the the number of delivered presents
            
            //Adds new house cordinates that received the present
            housePositions.includes(JSON.stringify(robotPositions[currentRobot]))?"":housePositions.push(JSON.stringify(robotPositions[currentRobot]));                                          
        }
        
        //appends the output into output area
        $("#outputArea").append("<p>Robot "+(currentRobot+1)+" &nbsp&nbsp"+positions[i]+", &nbspCurrent Position: &nbsp("+robotPositions[currentRobot]+")</p>");

        //increments the current robot index in range
        (currentRobot == (nRobots-1))?currentRobot = 0:currentRobot++;
    }

    //fiils the robotPositions array with n number of origins(0,0): Where n = number of robots
    for(var i=0; i<nRobots; i++){ 
      robotPositions.push([0,0]);
    }
    
    //loops the the positions array and moves robot in perticular direction according to matched sign
    for(var i=0; i<positions.length; i++){
      switch (positions[i]) {
        case "^":
            //increments the y cordinate
            robotPositions[currentRobot][1] += 1;      
            deliverPresent();
            break;
        case "v":
            //decrements the y cordinate
            robotPositions[currentRobot][1] -= 1;
            deliverPresent();
            break;
        case ">":
            //increments the x cordinate
            robotPositions[currentRobot][0] += 1;
            deliverPresent();
            break;
        default:
            //decrements the y cordinate
            robotPositions[currentRobot][0] -= 1;
            deliverPresent();
            break;
      }  
    }
    
    //appends the output into output area
    $("#outputArea").append("<hr/><div style='text-align: center;'><h4>Total number of houses with at least n presents: " + housePositions.length + "</h4> [where 1 <= n <= max(int)]</div>");
    $("#outputArea").append("<hr/><div style='text-align: center;'><h4>Total number of presents delivered: " + presentsDelivered + "</h4></div>");
  });