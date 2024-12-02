# VectorSpace

Our software product is a versatile team-management toolset for collaboration.

The possible names we have considered are: VectorIA, OnBoard, OneVector, VectorSpace.

Our final name choice is VectorSpace 

Our potential customers are business teams, sports teams, college faculty and staff, students, friend groups, and travel groups 

Feature Sets include: 

- Base set of individual and team management features such as daily/weekly/monthly schedule, real-time announcements, to-do lists 

- Customers can have specific features developed to meet their personal requirements as individuals and teams. For example: 

  - Mathematical visualizations extension for math teachers/students 

  - Focus mode for individuals to share their current status to the dashboard of all other team members. 

  - A direct message system, such that teams or students could interact with each other and ask questions if need be.
 
  - Data visualization for business teams
 
  - Travel widgets for travel teams

## Product Vision Statement: 
VectorSpace empowers teams to work better together by offering a streamlined, customizable platform for scheduling, communication, and task management. Our vision is to be the go-to tool for any group looking to stay organized and connected, with features that adapt to meet the unique needs of each and every team. We believe in the power of effortless collaboration and communication, where each member is empowered to contribute, connect, and succeed. We are committed to making teamwork more efficient, focused, and productive, no matter the setting.


## [Click to view Landing Page without cloning repository!](https://htmlpreview.github.io/?https://github.com/fkertesz/Nullspace/blob/main/VectorSpace/src/index.html)

## Running the Prototype with Docker
In these set of instructions, we are assuming that Docker was installed and set up correctly and that no other containers are running on Docker before starting.
1. Once cloning this repository in your command prompt, change into the vectorspaceapp directory within the Nullspace directory. This can be done in the command prompt with `cd Nullspace/vectorspaceapp` when in the directory containing the cloned repository.
2. Rebuild the Docker image with `docker build -t vectorspace-app .` in the command prompt  - make sure to include the dot at the end.
3. Run the Docker container with `docker run -d -p 3000:3000 vectorspace-app` in the command prompt.
4. Visit `http://localhost:3000` in your browser. The prototype of VectorSpace will appear shortly and be ready to use!
