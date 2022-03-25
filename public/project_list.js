var projectArray = [
  {
  name : "Minesweeper",
  description : "A web based Minesweeper game that implements recursion and an algorithm for the Fisher-Gates shuffle.",
  date : "15/02/2022",
  techUsed : "JavaScript, HTML, CSS",
  imageSource : "./images/minesweeper.png"
  },
  {
    name : "Chitter",
    description : "A clone of the popular Twitter app that has user authentication and uses PostgreSQL databases for data stroage and retrieval.",
    date : "15/01/2022",
    techUsed : "JavaScript, HTML, CSS",
    imageSource : "./images/minesweeper.png"
  },
  {
    name : "Bar.io",
    description : "Collaborated in a team of 4 developers to engineer a bar finder web app. It uses Google Maps, Places and Images API’s to provide users with the top 5 rated bars within a selectable walking distance of the user’s location. The backend was built using Node.js and Express.js to create a RESTful API and React was used on the frontend. Unit testing was carried out with Jest by TDD.",
    date : "10/12/2021",
    techUsed : "React, JavaScript, HTML, CSS, API's(Google Maps, Places, Geocoding)",
    imageSource : "./images/minesweeper.png"
  },
  {
    name : "Exploring ideas",
    description : "New projects coming soon!",
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