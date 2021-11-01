# MarsRover
Mars Rover kata - Tech Returners

You are working in an Engineering Squad for the Mars Mission, tasked with designing software to manage robots and cool vehicles for space
exploration!

   N
W <=> E
   S


L = Turn left
R = Turn Right
M = Move x1 toward

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

Your Solution
Feel free to implement an approach that you feel comfortable with to receive input into your program e.g. feeding input values into unit tests;
input via a console application; supplying input via a file etc.
We would like you to apply Test-Driven Development (TDD) to test-drive your solution.
We would like to see production-quality code, this means you have thought carefully about your code design and that your code is clean and
well-tested.
We’d love to see good unit test coverage and all unit tests passing.

Top Tips:
* Sketch / plan out your ideas first, we recommend starting off by modelling / diagramming what you might need and getting initial ideas
down on paper.
* Commit into your Github repository frequently and with descriptive commit messages.
* Write a descriptive README to document the key features of your solution, your assumptions, approaches and future thoughts.
* Note down future thoughts / considerations:
You can make the assumption that the Plateau is rectangular, but be sure to have a think about how easily your program can be
extended upon in the future to support a different shaped Plateau.
How might your Plateau support other vehicles and not just Rovers?

Pseudocode outline	
Set grid maximum from initial inputs	
Enter input lines into Input commands object	
Initiate Object with output results stored	
	
Call on each set of Rover commands to function	
	Function to calculate end position from movement inputs and start pos
	Return end position to Output Object
Call on next set of movement inputs	
Return Output	


Tests to start with
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


Unknowns -research areas
How to deal with mulitple line inputs 


NEW IDEA::

N = y++
E = X++
S = Y--
W = X--

input example (LMLMRMM)

M will look at current orientation state viable and use above switch table

Left and Right commands will go through below if then switch:

If "L" {
    switch(current orientation state)
    case N: to W
    case W: to S
    case S: to E
    case E: to N   

else if "R"
    switch(current orientation state)
    case N: to E
    case E: to S
    case S: to W
    case W: to N    
}
