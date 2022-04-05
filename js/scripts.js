const mobileNavButton = document.getElementById('mobile-nav-menu');
const mobileNav = document.getElementById('menu-modal');
const closeModalButton = document.getElementById('close-modal');
const body = document.querySelector('body');
const navList = document.querySelector('#nav-list');
const projectsDiv = document.getElementById('projects');

// First Project divs
const firstGridItem = document.createElement('div');
const firstImgDiv = document.createElement('div');
const firstFeaturedImg = document.createElement('img');
const firstProjectDiv = document.createElement('div');
const firstHeading = document.createElement('h2');
const firstProjectDesc = document.createElement('p');
const techSection = document.createElement('ul');
const seeProjectButton = document.createElement('ul');
const seeProjectLi = document.createElement('li')
const seeProjectLink = document.createElement('a')

// Divs for the rest of the projects
const gridItem = document.createElement('div');
const heading = document.createElement('h2');
const projectDesc = document.createElement('p');
const techSect = document.createElement('ul');
const seeProjButton = document.createElement('ul');
const seeProjLi = document.createElement('li');
const seeProjLink = document.createElement('a');

const projects = [{
        name: 'Multi - Post Stories',
        descrtiption: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        featuredImg: './img/works-img/1.png',
        technologies: ['css', 'html', 'bootstrap', 'ruby'],
        demoLink: '',
        projectLink: ''
    },
    {
        name: 'Profesional Art Printing Data',
        descrtiption: "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard",
        featuredImg: './img/works-img/art-printing.png',
        technologies: ['html', 'bootstrap', 'ruby'],
        demoLink: '',
        projectLink: ''
    }
];

/**
 * grid-item divs
 */
firstGridItem.classList.add('grid-item', 'grid-item1');
gridItem.classList.add('grid-item', 'art-printing');

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

for (let i = 0; i < projects[0].technologies.length; i++) {
    const techSectionLi = document.createElement('li');
    const techSectionLink = document.createElement('a');
    techSectionLink.innerText = projects[0].technologies[i];

    techSectionLi.append(techSectionLink);
    techSection.append(techSectionLi);
}

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
 * The rest of the Projects
 */

/**
 * Desktop Project Modal
 */

/**
 * For the nav modal
 */

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