This program has been created using Vanilla Javascript and jQuery, so you won't need to install any tools or libraries to run the program.

Steps to run the program:  
    
    > Download and extract the solution
    > Open the "robots.html" file
    > Enter the number of robots who will deliver presents in "Number of Robots" field
    > Enter the movement sequence as a string in "Position String" field 
        > For example: <>^^V<>
    > Press the "Get Output" button to run the simulation
    > After clicking the "Get Output" button you will be presented with: 
        > step by step each robot positions and their movement
        > Total number of houses that received the presents
        > Total number of presents delivered by robots
    > You can clear the output by simply clicking on the "Clear Output" button 


Example:

Number of Robots: 5
Position String: ^v>><>v<^<v

Output:

Robot 1   ^,  Current Position:  (0,1)
Robot 2   v,  Current Position:  (0,-1)
Robot 3   >,  Current Position:  (1,0)
Robot 4   >,  Current Position:  (1,0)
Robot 5   <,  Current Position:  (-1,0)
Robot 1   >,  Current Position:  (1,1)
Robot 2   v,  Current Position:  (0,-2)
Robot 3   <,  Current Position:  (0,0)
Robot 4   ^,  Current Position:  (1,1)
Robot 5   <,  Current Position:  (-2,0)
Robot 1   v,  Current Position:  (1,0)

Total number of houses with at least n presents: 7
[where 1 <= n <= max(int)]

Total number of presents delivered: 8

Here at the 4th step, the Robot4 turned at the position where Robot3 was already present, and at the 9th step, Robot4 turned at the position where Robot1 was already present. So these two times present didn't get delivered as there was already a robot present at that position.

Also at the 8th step Robot3 is at the origin(0,0), so the present didn't get delivered

That's why we got the output for the total number of presents delivered is 8.

The robots visited total 7 different houses and delivered the presents:
(0,1), (0,-1), (1,0), (-1,0), (1,1), (0,-2), (-2,0)
