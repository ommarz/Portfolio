function myFunction() {
  const burger = document.querySelector('.hamburger');
  const body = document.querySelector('body');
  const navLi = document.querySelectorAll('.nav-li');
  const close = document.querySelector('.close');
  const logo = document.querySelector('.logo');
  const toolbar = document.querySelector('.toolbar');
  const navToolbar = document.querySelector('.nav_toolbar');
  const navUl = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLi.forEach((link) => link.classList.toggle('nav-li-navigation'));
    body.classList.toggle('body-navigation');
    toolbar.classList.toggle('toolbar-navigation');
    navUl.classList.add('nav-links-navigation');
    navUl.classList.remove('nav-links');
    burger.classList.add('hamburger-navigation');
    burger.classList.remove('hamburger');
    close.classList.add('close-navigation');
    close.classList.remove('close');
    logo.classList.add('logo-navigation');
    logo.classList.remove('logo');
    navToolbar.classList.add('nav_toolbar_navigation');
    navToolbar.classList.remove('nav_toolbar');
  });

  close.addEventListener('click', () => {
    navLi.forEach((link) => link.classList.toggle('nav-li-navigation'));
    body.classList.toggle('body-navigation');
    toolbar.classList.toggle('toolbar-navigation');
    navUl.classList.remove('nav-links-navigation');
    navUl.classList.add('nav-links');
    burger.classList.remove('hamburger-navigation');
    burger.classList.add('hamburger');
    close.classList.remove('close-navigation');
    close.classList.add('close');
    logo.classList.remove('logo-navigation');
    logo.classList.add('logo');
    navToolbar.classList.remove('nav_toolbar_navigation');
    navToolbar.classList.add('nav_toolbar');
  });

  navLi.forEach((link) => {
    link.addEventListener('click', () => {
      navLi.forEach((link) => link.classList.toggle('nav-li-navigation'));
      body.classList.toggle('body-navigation');
      toolbar.classList.toggle('toolbar-navigation');
      navUl.classList.remove('nav-links-navigation');
      navUl.classList.add('nav-links');
      burger.classList.remove('hamburger-navigation');
      burger.classList.add('hamburger');
      close.classList.remove('close-navigation');
      close.classList.add('close');
      logo.classList.remove('logo-navigation');
      logo.classList.add('logo');
      navToolbar.classList.remove('nav_toolbar_navigation');
      navToolbar.classList.add('nav_toolbar');
    });
  });
}

myFunction();


const email = document.querySelector('#email');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
if (email.value !== email.value.toLowerCase()) {
  alert('Email must be lowercase');
}
  event.preventDefault();
});

//POP UP CARDS PROJECT//

//Create array of projects//

const popUpProjects = [
  {
    name: "Multi-Post Stories",
    toolsUsed: ["HTML", "CSS", "JavaScript"],
    image: "./images/content/Snapshoot_Portfolio.svg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seeLive: "#",
    seeSource: "#"
  },

  {
    name: "Keeping track of hundreds of components website",
    toolsUsed: ["HTML", "Bootstrap", "Ruby on Rails"],
    image: './images/content/Snapshoot_Portfolio.svg',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"],
    seeLive: '#',
    seeSource: '#'
  },

  {
    name: "Data Dashboard",
    toolsUsed: ["HTML", "Bootstrap", "Ruby"],
    image: "./images/content/Snapshoot_Portfolio.svg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    seeLive: '#',
    seeSource: '#'
  },

  {
    name: "Website Portfolio",
    toolsUsed: ["HTML", "Bootstrap", "Ruby"],
    image: "./images/content/Snapshoot_Portfolio.svg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    seeLive: '#',
    seeSource: '#'
  },

  {
    name: "Professional Art",
    toolsUsed: ["HTML", "Bootstrap", "Ruby"],
    image: "./images/content/Snapshoot_Portfolio.svg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    seeLive: '#',
    seeSource: '#'
  },

  {
      name: "Data Dashboard",
    toolsUsed: ["HTML", "Bootstrap", "Ruby"],
    image: "./images/content/Snapshoot_Portfolio.svg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    seeLive: '#',
    seeSource: '#'
  },

  {
    name: "Website Portfolio",
    toolsUsed: ["HTML", "Bootstrap", "Ruby"],
    image: "./images/content/Snapshoot_Portfolio.svg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    seeLive: '#',
    seeSource: '#'
  },
]

for (let i = 0; i < popUpProjects.length; i++) {
  
  // Select the projects div//
    
  const worksDiv = document.querySelector('.works');  
    
  // Create the project card//
  
  const popUpCard = document.createElement('div');
  popUpCard.setAttribute = ('id','popup-card');
  popUpCard.classList.add('popUpCard');
  worksDiv.appendChild(popUpCard);

  const popUpCardContent = document.createElement('div');
  popUpCardContent.classList.add('popUpCardContent');
  popUpCard.appendChild(popUpCardContent);

  // Create the project card header//
  
  const popUpHeader = document.createElement('div');
  popUpHeader.classList.add('popUpHeader');
  popUpCardContent.appendChild(popUpHeader);

  // Create the project card header title//
  
  const popUpTitle = document.createElement('h3');
  popUpTitle.classList.add('popUpTitle');
  popUpTitle.textContent = popUpProjects[i].name;  
  popUpHeader.appendChild(popUpTitle);

  // Create the project card header close button//
  
  const popUpClose = document.createElement('img');
  popUpClose.classList.add('popUpClose');
  popUpClose.setAttribute('src', './images/icons/Close_Window_icon.svg');
  popUpClose.setAttribute('alt', 'Close Window icon');
  popUpHeader.appendChild(popUpClose);

  //Create the project tools used list//
 
  const popUpToolsUsedList = document.createElement('ul');
  popUpToolsUsedList.classList.add('popUp-ToolsUsed-list');
  popUpHeader.appendChild(popUpToolsUsedList);

  // Create the project card tools used elements//
  
  for(let j = 0; j < popUpProjects[j].toolsUsed.length; j++){
    const popUpToolsUsedElement = document.createElement('li');
    popUpToolsUsedElement.classList.add('popUp-ToolsUsed-element');
    popUpToolsUsedElement.innerHTML = popUpProjects[i].toolsUsed[j];
    popUpToolsUsedList.appendChild(popUpToolsUsedElement);
  }

  // Create the project card body //
  
  const popUpBody = document.createElement('div');
  popUpBody.classList.add('popUpBody');
  popUpCardContent.appendChild(popUpBody);
  
  // Create the project card body image //
  
  const popUpImage = document.createElement('img');
  popUpImage.classList.add('popup-image');
  popUpImage.setAttribute('src', popUpProjects[i].image);
  popUpImage.setAttribute('alt', popUpProjects[i].name);
  popUpBody.appendChild(popUpImage);

  // Create the project card body description //
  
  const popUpDescription = document.createElement('p');
  popUpDescription.classList.add('popup-description');
  popUpDescription.textContent = popUpProjects[i].description;
  popUpBody.appendChild(popUpDescription);

  // Create the project card body buttons //
  
  const popUpButtons = document.createElement('div');
  popUpButtons.classList.add('popUp-buttons');
  popUpBody.appendChild(popUpButtons);

  // Create the project card body buttons live button //
  
  const liveButton = document.createElement('a');
  liveButton.classList.add('live-button');
  liveButton.textContent = 'See Live';
  liveButton.setAttribute('href', popUpProjects.seeLive);
  liveButton.setAttribute('target', '_blank');
  popUpButtons.appendChild(liveButton);

  const liveButtonIcon = document.createElement('img');
  liveButtonIcon.classList.add('live-button-icon');
  liveButtonIcon.setAttribute('src', './images/icons/See_live_icon.svg');
  liveButton.appendChild(liveButtonIcon);

  // Create the project card body buttons source button //
  
  const sourceButton = document.createElement('a');
  sourceButton.classList.add('source-button');
  sourceButton.setAttribute('href', popUpProjects[i].seeSource);
  sourceButton.setAttribute('target', '_blank');
  sourceButton.textContent = 'See Source';
  popUpButtons.appendChild(sourceButton);

  const sourceButtonIcon = document.createElement('img');
  sourceButtonIcon.classList.add('source-button-icon');
  sourceButtonIcon.setAttribute('src', './images/icons/See_resource_icon.svg');
  sourceButton.appendChild(sourceButtonIcon);

}

document.addEventListener('DOMContentLoaded', () => {
  const worksDiv = document.querySelector('.works');
  const seeProjectLinks = document.querySelectorAll('.see_project_card');
  
  seeProjectLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const index = link.getAttribute('data-index');
      createProjectCard(index);
      const popUpCard = document.querySelectorAll('.popUpCard')[index];
      const linkPosition = link.getBoundingClientRect();
      popUpCard.style.left = linkPosition.left + 'px';
      popUpCard.style.top = linkPosition.top - popUpCard.offsetHeight - 10 + 'px';    
      popUpCard.style.display = 'flex';
    }); 
  });

  // close the pop up card when clicking popupClose:    //
  
  worksDiv.addEventListener('click', (event) => {
    const popUpClose = event.target.closest('.popUpClose');
    if (popUpClose) {
      const popUpCard = popUpClose.closest('.popUpCard');
      closePopUpCard(popUpCard);
    }
  });
  
});

// Function to create the project cards //

function createProjectCard(index) {
  const project = popUpProjects[index];


  const popUpCard = document.createElement('div');  
  popUpCard.id = 'popup-card';
  popUpCard.classList.add('popUpCard');

  const popUpCardContent = document.createElement('div');
  popUpCardContent.classList.add('popUpCardContent');
  popUpCard.appendChild(popUpCardContent);

  const popUpHeader = document.createElement('div');
  popUpHeader.classList.add('popUpHeader');
  popUpCardContent.appendChild(popUpHeader);

  const popUpTitle = document.createElement('h3');
  popUpTitle.classList.add('popUpTitle');
  popUpTitle.textContent = project.name;
  popUpHeader.appendChild(popUpTitle);

  const popUpClose = document.createElement('img');
  popUpClose.classList.add('popUpClose');
  popUpClose.setAttribute('src', './images/icons/Close_Window_icon.svg');
  popUpHeader.appendChild(popUpClose);

  const popUpToolsUsedList = document.createElement('ul');
  popUpToolsUsedList.classList.add('popUp-ToolsUsed-list');
  popUpHeader.appendChild(popUpToolsUsedList);

  for(let j = 0; j < project.toolsUsed.length; j++){
    const popUpToolsUsedElement = document.createElement('li');
    popUpToolsUsedElement.classList.add('popUp-ToolsUsed-element');
    popUpToolsUsedElement.innerHTML = project.toolsUsed[j];
    popUpToolsUsedList.appendChild(popUpToolsUsedElement);
  }

  const popUpBody = document.createElement('div');
  popUpBody.classList.add('popUpBody');
  popUpCardContent.appendChild(popUpBody);

  const popUpImage = document.createElement('img');
  popUpImage.classList.add('popup-image');
  popUpImage.setAttribute('src', project.image);
  popUpBody.appendChild(popUpImage);
    
  const popUpDescription = document.createElement('p');
  popUpDescription.classList.add('popup-description');
  popUpDescription.textContent = project.description;
  popUpBody.appendChild(popUpDescription);

  const popUpButtons = document.createElement('div');
  popUpButtons.classList.add('popUp-buttons');
  popUpBody.appendChild(popUpButtons);
    
  const liveButton = document.createElement('a');
  liveButton.classList.add('live-button');
  liveButton.setAttribute('href', project.seeLive);
  popUpButtons.appendChild(liveButton);

  const sourceButton = document.createElement('a');
  sourceButton.classList.add('source-button');
  sourceButton.setAttribute('href', project.seeSource);
  popUpButtons.appendChild(sourceButton);

  popUpClose.addEventListener('click', () => {
    popUpCard.style.display = 'none';
  });

  liveButton.addEventListener('click', () => {
    window.open(project.seeLive);
  });

  sourceButton.addEventListener('click', () => {
    window.open(project.seeSource);
  });


}

function closePopUpCard(popUpCard) {
popUpCard.style.display = 'none';
}

// POP UP CARDS PROJECT ENDS HERE //