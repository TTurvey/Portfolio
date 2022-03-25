var projectArray = [
  {
  name : "Minesweeper",
  description : "A web based Minesweeper game.",
  date : "15/02/2022",
  techUsed : "JavaScript, HTML, CSS",
  imageSource : "./images/minesweeper.png"
  },
  {
    name : "Chitter",
    description : "A clone of the popular Twitter app...",
    date : "15/01/2022",
    techUsed : "JavaScript, HTML, CSS",
    imageSource : "./images/minesweeper.png"
  },
  {
    name : "Bar.io",
    description : "A bar finder app...",
    date : "10/12/2021",
    techUsed : "React, JavaScript, HTML, CSS, API's(Google Maps, Places, Geocoding)",
    imageSource : "./images/minesweeper.png"
  },
  {
    name : "Exploring new project ideas",
    description : "I'm working on it...",
    date : "25/03/2022",
    techUsed : "",
    imageSource : "./images/clouds.avif"
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
  var projectImageSource = projectArray[i]['imageSource'];


  const image = document.createElement('div')
  image.classList.add('image');
  const img = document.createElement('img');
  img.src = `${projectImageSource}`;

  const content = document.createElement('div')
  content.classList.add('content');

  const topText = document.createElement('div')
  topText.classList.add('top-text');

  const title = document.createElement('div')
  title.classList.add('title');
  title.innerHTML = `${projectName}`;

  const subTitle = document.createElement('div')
  subTitle.classList.add('sub-title');
  subTitle.innerHTML = `${projectTechUsed}`;

  const bottomText = document.createElement('div')
  bottomText.classList.add('bottom-text');

  const description = document.createElement('div')
  description.classList.add('description');
  description.innerHTML = `${projectDescription}`;

  image.appendChild(img);
  
  topText.appendChild(title);
  topText.appendChild(subTitle);
  bottomText.appendChild(description);
  content.appendChild(topText);
  content.appendChild(bottomText);

  projectCard.appendChild(image);
  projectCard.appendChild(content);
  projectsFrame.appendChild(projectCard);
};