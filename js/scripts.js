window.addEventListener('DOMContentLoaded', () => {
  // Projects Object
  const projects = [
    {
      name: 'Multi - Post Stories',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://soniakarungi.github.io/Portfolio/',
      projectLink: 'https://github.com/SoniaKarungi/Portfolio',
    },
  ];

  // Contact form auto-fill from local storage
  const email = document.getElementById('email');
  const fullName = document.getElementById('name');
  const message = document.getElementById('message');

  const localMsg = JSON.parse(localStorage.getItem('messageObject'));

  if (localMsg) {
    email.value = localMsg.email;
    fullName.value = localMsg.name;
    message.value = localMsg.message;
  }

  // First Project divs
  const firstGridItem = document.createElement('div');
  const firstImgDiv = document.createElement('div');
  const firstFeaturedImg = document.createElement('img');
  const firstProjectDiv = document.createElement('div');
  const firstHeading = document.createElement('h2');
  const firstProjectDesc = document.createElement('p');
  const techSection = document.createElement('ul');
  const seeProjectButton = document.createElement('ul');
  const seeProjectLi = document.createElement('li');
  const seeProjectLink = document.createElement('a');
  const projectsDiv = document.getElementById('projects');

  // Project details  Modal
  const projectModal = document.getElementById('project-details');

  /**
   * grid-item divs
   */
  firstGridItem.classList.add('grid-item', 'grid-item1');

  /**
   * First Project
   */
  firstImgDiv.classList.add('first-post-img');
  firstFeaturedImg.classList.add('placeholder-img');
  firstHeading.classList.add('post-title');
  firstProjectDesc.classList.add('post-text');
  techSection.classList.add('buttons', 'first-buttons');
  seeProjectButton.classList.add('buttons', 'see-button');
  firstFeaturedImg.src = './img/works-img/1.png';

  firstHeading.innerText = projects[0].name;
  firstProjectDesc.innerText = projects[0].descrtiption;
  seeProjectLink.innerText = 'See Project';

  for (let i = 0; i < projects[0].technologies.length; i += 1) {
    const techSectionLi = document.createElement('li');
    const techSectionLink = document.createElement('a');
    techSectionLink.innerText = projects[0].technologies[i];

    techSectionLi.append(techSectionLink);
    techSection.append(techSectionLi);
  }

  seeProjectButton.setAttribute('id', 1);

  projectsDiv.append(firstGridItem);
  firstImgDiv.append(firstFeaturedImg);
  firstProjectDiv.append(firstHeading);
  firstProjectDiv.append(firstProjectDesc);
  firstProjectDiv.append(techSection);
  firstGridItem.append(firstImgDiv);
  firstGridItem.append(firstProjectDiv);
  seeProjectLi.append(seeProjectLink);
  seeProjectButton.append(seeProjectLi);
  firstProjectDiv.append(seeProjectButton);
  /**
   * Desktop Project Modal
   */
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const detailsDiv = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('span');
  const projectHeading = document.createElement('h2');
  const projectDetails = document.createElement('p');
  const projectUl = document.createElement('ul');
  const projectImg = document.createElement('img');
  const demoIcon = document.createElement('img');
  const gitIcon = document.createElement('img');
  const skillsUl = document.createElement('ul');
  const demoLi = document.createElement('li');
  const demoLink = document.createElement('a');
  const projectLi = document.createElement('li');
  const projectLink = document.createElement('a');
  let skills = [];

  modalContent.classList.add('modal-content');
  modalHeader.classList.add('modal-header');
  modalBody.classList.add('modal-body');
  modalFooter.classList.add('modal-footer');
  closeButton.classList.add('close-button');
  projectHeading.classList.add('modal-heading');
  projectDetails.classList.add('modal-details');
  projectImg.classList.add('project-img');
  projectUl.classList.add('buttons', 'see-button', 'project-buttons');

  closeButton.innerText = 'X';

  /**
   * The rest of the Projects
   */
  for (let i = 0; i < 6; i += 1) {
    // Divs for the rest of the projects
    const gridItem = document.createElement('div');
    const heading = document.createElement('h2');
    const projectDesc = document.createElement('p');
    const techSect = document.createElement('ul');
    const seeProjButton = document.createElement('ul');
    const seeProjLi = document.createElement('li');
    const seeProjLink = document.createElement('a');

    gridItem.classList.add('grid-item', 'art-printing');

    heading.classList.add('art-title');
    projectDesc.classList.add('art-text');
    techSect.classList.add('buttons', 'button-transparent');
    seeProjButton.classList.add('buttons', 'see-button', 'see-button-2');

    heading.innerText = projects[i].name;
    projectDesc.innerText = projects[i].descrtiption;
    seeProjLink.innerText = 'See Project';

    seeProjLi.append(seeProjLink);
    seeProjButton.append(seeProjLi);
    seeProjButton.setAttribute('id', i + 1);

    for (let i = 0; i < projects[i].technologies.length; i += 1) {
      const techSectionLi = document.createElement('li');
      const techSectionLink = document.createElement('a');
      techSectionLink.innerText = projects[1].technologies[i];

      techSectionLi.append(techSectionLink);
      techSect.append(techSectionLi);
    }

    gridItem.append(heading);
    gridItem.append(projectDesc);
    gridItem.append(techSect);
    gridItem.append(seeProjButton);
    projectsDiv.append(gridItem);

    seeProjButton.onclick = () => {
      const projectId = seeProjButton.id;
      projectHeading.innerText = projects[projectId].name;
      projectDetails.innerText = projects[projectId].descrtiption;
      demoLink.innerText = 'See Live';
      projectLink.innerText = 'See Source';
      projectImg.src = projects[projectId].featuredImg;
      demoIcon.src = './img/social-icons/light-icons/see-live-icon.png';
      gitIcon.src = './img/social-icons/light-icons/github-light.png';

      skillsUl.classList.add('buttons', 'first-buttons');
      demoLink.href = projects[projectId].demoLink;
      projectLink.href = projects[projectId].projectLink;
      demoLi.append(demoIcon);
      demoLi.append(demoLink);
      projectLi.append(gitIcon);
      projectLi.append(projectLink);
      projectUl.append(demoLi);
      projectUl.append(projectLi);

      for (let i = 0; i < projects[projectId].technologies.length; i += 1) {
        const skillsSectionLi = document.createElement('li');
        const skillsSectionLink = document.createElement('a');
        skillsSectionLink.innerText = projects[projectId].technologies[i];
        skillsSectionLi.append(skillsSectionLink);
        skillsUl.append(skillsSectionLi);
      }

      modalHeader.append(projectHeading);
      modalHeader.append(skillsUl);
      modalHeader.append(closeButton);
      detailsDiv.append(projectDetails);
      detailsDiv.append(projectUl);
      modalBody.append(detailsDiv);
      modalBody.append(projectImg);
      modalContent.append(modalHeader);
      modalContent.append(modalBody);
      projectModal.append(modalContent);

      projectModal.style.display = 'block';
    };
  }

  seeProjectButton.onclick = () => {
    projectHeading.innerText = projects[0].name;
    projectDetails.innerText = projects[0].descrtiption;
    demoLink.innerText = 'See Live';
    projectLink.innerText = 'See Source';
    projectImg.src = projects[0].featuredImg;
    skills = projects[0].technologies;
    demoIcon.src = './img/social-icons/light-icons/see-live-icon.png';
    gitIcon.src = './img/social-icons/light-icons/github-light.png';

    skillsUl.classList.add('buttons', 'first-buttons');
    demoLink.href = projects[0].demoLink;
    projectLink.href = projects[0].projectLink;
    demoLi.append(demoIcon);
    demoLi.append(demoLink);
    projectLi.append(gitIcon);
    projectLi.append(projectLink);
    projectUl.append(demoLi);
    projectUl.append(projectLi);

    for (let i = 0; i < skills.length; i += 1) {
      const skillsSectionLi = document.createElement('li');
      const skillsSectionLink = document.createElement('a');
      skillsSectionLink.innerText = skills[i];
      skillsSectionLi.append(skillsSectionLink);
      skillsUl.append(skillsSectionLi);
    }

    modalHeader.append(projectHeading);
    modalHeader.append(skillsUl);
    modalHeader.append(closeButton);
    detailsDiv.append(projectDetails);
    detailsDiv.append(projectUl);
    modalBody.append(detailsDiv);
    modalBody.append(projectImg);
    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    projectModal.append(modalContent);

    projectModal.style.display = 'block';
  };

  closeButton.onclick = () => {
    projectModal.style.display = 'none';
    skillsUl.innerHTML = '';
    modalHeader.innerHTML = '';
  };
});

/**
 * For the nav modal
 */

const mobileNavButton = document.getElementById('mobile-nav-menu');
const mobileNav = document.getElementById('menu-modal');
const closeModalButton = document.getElementById('close-modal');
const body = document.querySelector('body');
const navList = document.querySelector('#nav-list');

mobileNavButton.onclick = () => {
  body.style.overflow = 'hidden';
  mobileNav.style.display = 'block';
};

closeModalButton.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};

navList.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};

/**
 * Contact Form validation - Email field
 */
const validateMsg = document.getElementById('validation-msg');
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const fullName = document.getElementById('name');
const message = document.getElementById('message');
const messageObj = {};

const submitForm = (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    validateMsg.innerText = 'Kindly enter email in lowercase';
    return false;
  }

  validateMsg.innerText = '';
  return true;
};

const onChange = () => {
  messageObj.name = fullName.value;
  messageObj.email = email.value;
  messageObj.message = message.value;
  localStorage.setItem('messageObject', JSON.stringify(messageObj));
};

form.addEventListener('submit', submitForm);
email.addEventListener('change', onChange);
fullName.addEventListener('change', onChange);
message.addEventListener('change', onChange);
