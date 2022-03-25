var projectArray = [
  {
  name : "Minesweeper",
  description : "A web based Minesweeper game.",
  date : "xx/xx/xxxx",
  techUsed : "JavaScript, HTML, CSS",
  },
  {
    name : "Chitter",
    description : "A clone of the popular Twitter app...",
    date : "xx/xx/xxxx",
    techUsed : "JavaScript, HTML, CSS",
  },
  {
    name : "Bar.io",
    description : "A bar finder app...",
    date : "xx/xx/xxxx",
    techUsed : "React, JavaScript, HTML, CSS, API's(Google Maps, Places, Geocoding)",
  }
];

// For each array index, create a project card div and fill with projects details
for (let i = 0; i < projectArray.length; i++) {
  const projectsFrame = document.querySelector('.projects_frame');
  const projectCard = document.createElement('div');
  projectCard.setAttribute('id', i);
  projectCard.classList.add('project_card');

  var projectName = projectArray[i]['name'];
  var projectDescription = projectArray[i]['description'];
  var projectDate = projectArray[i]['date'];
  var projectTechUsed = projectArray[i]['techUsed'];

  projectCard.innerHTML += `<p><span class="project_card_title">${projectName}</span></p>`;
  projectCard.innerHTML += `<p><span class="project_card_description">${projectDescription}</span></p>`;
  projectCard.innerHTML += `<p><span class="project_card_date">${projectDate}</span></p>`;
  projectCard.innerHTML += `<p><span class="project_card_tools">${projectTechUsed}</span></p>`;
  projectCard.style.backgroundImage = 'url(images/' + projectName + '.png)';
  projectsFrame.appendChild(projectCard);

};