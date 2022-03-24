var projectArray = [
  {
  name : "Minesweeper",
  description : "A web based Minesweeper game.",
  date : "",
  techUsed : "JavaScript, HTML, CSS",
  },
  {
    name : "Chitter",
    description : "A clone of the popular Twitter app...",
    date : "",
    techUsed : "JavaScript, HTML, CSS",
  },
  {
    name : "Bar.io",
    description : "A bar finder app...",
    date : "",
    techUsed : "React, JavaScript, HTML, CSS, API's(Google Maps, Places, Geocoding)",
  }
];

// For each array index, create a project div
for (let i = 0; i < projectArray.length; i++) {
  const projectsSection = document.querySelector('.projects_section');
  const project = document.createElement('div');
  project.setAttribute('id', i);
  project.classList.add('project_card');

  console.log(projectArray[i])
  
  for (var key in projectArray[i]) { 
    project.innerHTML += projectArray[i][key]
    // console.log(projectArray[key]); 
  }
  projectsSection.appendChild(project);
}