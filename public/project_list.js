var projectArray = [
  {
  title : "Minesweeper",
  description : "A web app of the popular computer game. Javascript methods such as onclick events provided a way to maniplate the DOM upon user interaction. Implementing recursion allowed the automatic revealing of empty squares. Games are generated with the Fisher-Yates shuffle algorithm to ensure randomization and efficiency.",
  date : "15/02/2022",
  techUsed : ["JavaScript", "Node.js", "Express", "CSS"],
  imageSource : "./images/clouds.avif",
  githubLinks : ["https://github.com/TTurvey/minesweeper-javascript"]
  },
  {
    title : "Chitter",
    description : "A clone of the popular Twitter app that has user authentication and uses PostgreSQL databases for data stroage and retrieval.",
    date : "15/01/2022",
    techUsed : ["JavaScript", "HTML", "CSS"],
    imageSource : "./images/clouds.avif",
    githubLinks : ["https://github.com/TTurvey/chitter-challenge"]
  },
  {
    title : "Bar.io",
    description : "Collaborated in a team of 4 developers to engineer a bar finder web app. It uses Google Maps, Places and Images API’s to provide users with the top 5 rated bars within a selectable walking distance of the user’s location. The backend was built using Node.js and Express.js to create a RESTful API and React was used on the frontend. Unit testing was carried out with Jest by TDD.",
    date : "10/12/2021",
    techUsed : ["React", "JavaScript", "HTML", "CSS", "API's(Google Maps, Places, Geocoding)"],
    imageSource : "./images/nhu-nguyen-IL1qSqEMNBo-unsplash.jpg",
    githubLinks : ["https://github.com/TTurvey/bar.io-frontend", "https://github.com/TTurvey/bar.io-backend"]
  },
  // {
  //   title : "Exploring ideas",
  //   description : "New projects coming soon!",
  //   date : "25/03/2022",
  //   techUsed : [""],
  //   imageSource : "./images/clouds.avif",
  //   githubLinks : [""]
  // }
];

// For each array index, create a project card div and fill with projects details
for (let i = 0; i < projectArray.length; i++) {
  // selecting the projects section/frame 
  const projectsFrameEl = document.querySelector('.projects_frame');

  // creating a projects container
  const projectContainerEl = document.createElement('div');
  projectContainerEl.setAttribute('id', i);
  projectContainerEl.classList.add('project_container');

  // assigning variables to the projects array info
  var projectName = projectArray[i]['title'];
  var projectDescription = projectArray[i]['description'];
  var projectDate = projectArray[i]['date'];
  var projectTechUsed = projectArray[i]['techUsed'];
  var projectImageSource = projectArray[i]['imageSource'];
  var githubLinks = projectArray[i]['githubLinks'];

  // creating project image div
  const projectImageEl = document.createElement('div');
  projectImageEl.classList.add('project_image');
  const imgEl = document.createElement('img');
  imgEl.src = `${projectImageSource}`;
  projectImageEl.appendChild(imgEl);

  // creating the project content div
  const projectContentEl = document.createElement('div');
  projectContentEl.classList.add('project_content');

  // creating the project title div
  const projectTitleEl = document.createElement('div');
  projectTitleEl.classList.add('project_title');
  const textType6 = document.createElement('p');
  textType6.innerHTML = `${projectName}`;
  textType6.classList.add('text_type_6');
  projectTitleEl.appendChild(textType6);
  
  // creating the project tech div
  const projectTechEl = document.createElement('div');
  projectTechEl.classList.add('project_tech');
  const techList = document.createElement('ul');
  for (var n = 0; n < projectTechUsed.length; n++) {
    const item = document.createElement('li');
    item.classList.add('text_type_12');
    item.innerHTML = `${projectTechUsed[n]}`;
    techList.appendChild(item);
  }
  projectTechEl.appendChild(techList);
  
  // creating the project description div
  const projectDescriptionEl = document.createElement('div');
  projectDescriptionEl.classList.add('project_description');
  projectDescriptionEl.innerHTML = `<p class="text_type_12">${projectDescription}</p>`;

  // creating the project links div
  const projectLinksEl = document.createElement('div');
  projectLinksEl.classList.add('project_links');

  for (var link = 0; link < githubLinks.length; link++) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', `${githubLinks[link]}`);
    linkEl.innerHTML = '<i class="fab fa-github fa-xl fa-fw"></i>';
    projectLinksEl.appendChild(linkEl);
  }
  
  projectContentEl.appendChild(projectTitleEl);
  projectContentEl.appendChild(projectTechEl);
  projectContentEl.appendChild(projectDescriptionEl);
  projectContentEl.appendChild(projectLinksEl);

  projectContainerEl.appendChild(projectImageEl);
  projectContainerEl.appendChild(projectContentEl);
  projectsFrameEl.appendChild(projectContainerEl);

};