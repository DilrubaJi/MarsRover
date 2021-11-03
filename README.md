# MarsRover
Mars Rover kata - Tech Returners

As an Engineering Squad for the Mars Mission, tasked with designing software to manage robots and cool vehicles for space
exploration!

   N
W <=> E
   S

L = Turn left
R = Turn Right
M = Move x1 toward in direction of Rover

Example Test Case
Lines of Input to the Program:
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
Expected Output:
1 3 N
5 1 E


Tests to start with:
Return current position when start position given
Return start and end position when x1 turn given
Return start and end position when x1 move given
Return start and end position when x1 move and orientation given
Return start and end position when mulitple directions are given
Test grid limits (movement process stops, returns error, returns last viable position) Rover doesn’t go Offpiste
Test minus coorindates
Test decimal inputs
Test grid size input changes


Assumptions:
No obstacles 
Flat ground
100% traction
Grid size given (zero included)
No reverse gear (x2 turns needed to turn around)
Rovers can cross each others paths and current positions (exist in same space-time)


Considerations outside scope:
Obstacles could be stored in an array
Rovers cannot cross past each others current positions (return error or re-route)
Accept non retangualr grid size
Include distance limit (fuel/battery limit)


Unknowns -research areas:
How to deal with mulitple line inputs 


Peusdocode:

L.1 Initial grid maximum sets grid size limits

L.2 Initial inputs set global xAxis, yAxis and current orientation state (e.g: 1 2 N)

L.3 input directions example (LMRMLMM)

L.2 and L.3 repeat for additional Rovers

function to split directions into an array

 Call on each letter in turn (forEach);
    If input value is M then call moveRoverOnePlace function => pass orientationstate to return one step coordinates, 
    If input value is L or R then call changeRoverOrientation function =>  


moveRoverOnePlace function(){
switch
N = y++
E = X++
S = Y--
W = X--
}


changeRoverOrientation function(){
If "L" {
    switch(current orientation state)
    case N: to W
    case E: to N
    case S: to E
    case W: to S   
}
else if "R"{
    switch(current orientation state)
    case N: to E
    case E: to S
    case S: to W
    case W: to N    
}
}

Outstanding known areas of improvement: 
Edge cases for unit tests
Rover drives over edge
setting grid size
data validation for each function
Rover pass over each other error


