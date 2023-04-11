// Insert Copyright Text in Footer via JavaScript

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `&copy; Oxana Michkasova ${thisYear}`;
footer.appendChild(copyright);

    // Add Skills Section



    //Adding alt attribute to <img>

const skills = [
    { src: './images/icon_js.png', alt: 'JavaScript icon' },
    { src: './images/icon_html.png', alt: 'HTML icon' },
    { src: './images/icon_css.png', alt: 'CSS icon' },
    { src: './images/icon_figma.png', alt: 'Figma icon' },
    { src: './images/icon_python.png', alt: 'Python icon' },
    { src: './images/icon_ps.png', alt: 'Photoshop icon' },
    { src: './images/icon_git.png', alt: 'Git icon' }
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector("ul");

skills.forEach(skill => {
    const skillItem = document.createElement('li');
    const skillImg = document.createElement('img');
    skillImg.src = skill.src;
    skillImg.alt = skill.alt;
    skillItem.appendChild(skillImg);
    skillsList.appendChild(skillItem);
});


    // Old code without alt
// const skills = ['./images/icon_js.png', "./images/icon_html.png", "./images/icon_css.png", "./images/icon_figma.png", "./images/icon_python.png", "./images/icon_ps.png", "./images/icon_git.png"];
// const skillsSection = document.getElementById('skills');
// const skillsList = skillsSection.querySelector("ul");
// for (let el of skills){
//     const skill = document.createElement('li');
//     const skillImg = document.createElement('img')

//     skillImg.src = el
//     skillsList.appendChild(skill);
//     skill.appendChild(skillImg)
// }

    // Handle Message Form Submit 

const messageForm = document.getElementsByName("leave_message");

messageForm[0].addEventListener('submit',
    (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(`Name: ${name};`, `Email: ${email};`, `Message: ${message}`)  

    // Display Messages in List

const messageSection = document.getElementById("messages");
messageSection.hidden = true;

const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement("li");

newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a> wrote:  <span>${message}</span>`

messageList.appendChild(newMessage);
    // Create "Remove" button

const removeButton = document.createElement("button");

removeButton.innerText = "Remove";
removeButton.type = "button";
removeButton.addEventListener("click",
            () => {
    const entry = removeButton.parentNode;
    entry.remove();
    });

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

messageSection.hidden = false;
messageForm.item(0).reset();

    // Create "Edit" button

const editButton = document.createElement("button");
editButton.innerText = "Edit";
editButton.type = "button";

    // Create "Done" button   

const doneButton = document.createElement("button");
doneButton.innerText = "Done";
doneButton.type = "button";
doneButton.style.display = "none";

editButton.addEventListener("click",
            () => {
    const entry = editButton.parentNode;
    const editMessage = entry.querySelector("span");

    editMessage.contentEditable = "true";
    editMessage.focus();

    editMessage.style.backgroundColor = "#fff";
    doneButton.style.display = "initial";
    editButton.style.display = "none";
    });

doneButton.addEventListener("click",
            () => {

    const entry = doneButton.parentNode;
    const editMessage = entry.querySelector("span");

    editMessage.contentEditable = false;

    editMessage.style.backgroundColor = "#fff";
    editButton.style.display = "initial";
    doneButton.style.display = "none";
    });

newMessage.appendChild(editButton);
newMessage.appendChild(doneButton);
newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);
messageSection.style.display = "block";
messageForm.reset();
});

    // Fetch API gitHub repositories

// const githubRequest = new XMLHttpRequest()
// githubRequest.open("GET", "https://api.github.com/users/oxangyal/repos", true);

// githubRequest.addEventListener('load', function () {
//     const data = JSON.parse(this.response)

//     // Filter out irrelevant repositories

//     const filteredData = data.filter((repo) =>
//         repo.name.includes('eridanus-intro') || repo.name.includes('ThankyouWebsiteQA05')
//     )

//     const projectSection = document.querySelector('#project')
//     const projectList = projectSection.querySelector('ul')

//     for (let repository of filteredData) {
//         const project = document.createElement('li')
//         const projectName = repository.name.toLowerCase();

// if (projectName.includes('eridanus-intro')) {
//     project.innerHTML = `
//     <a class="link link--no-decor" href="${repository.html_url}">
//         <img src="./images/CTDboot.png" alt="Eridanus Intro"  class="img__logo_item">
//     </a>`;
// } else if (projectName.includes('thankyouwebsiteqa05')) {
//     project.innerHTML = `
//     <a class="link link--no-decor" href="${repository.html_url}">
//         <img src="./images/redRover.png" alt="Thankyou Website QA05" class="img__logo_item">
//     </a>`;
// } else {
//     continue;
// }

// projectList.appendChild(project);

//     }
// })
// githubRequest.send();


fetch('https://api.github.com/users/oxangyal/repos')
.then((res) => res.json())
    .then((data) => {
    
  // Filter out irrelevant repositories
const filteredData = data.filter((repo) =>
repo.name.includes('eridanus-intro') || repo.name.includes('ThankyouWebsiteQA05') || repo.name.includes('shaddyfurniture')  
)

const projectSection = document.querySelector('#project')
const projectList = projectSection.querySelector('ul')

for (let repository of filteredData) {
    const project = document.createElement('li')
    const projectName = repository.name.toLowerCase();

if (projectName.includes('eridanus-intro')) {
project.innerHTML = `
<a class="link link--no-decor" href="${repository.html_url}">
    <img src="./images/CTDboot.png" alt="Eridanus Intro"  class="img__logo_item">
</a>`;
} else if (projectName.includes('thankyouwebsiteqa05')) {
project.innerHTML = `
<a class="link link--no-decor" href="${repository.html_url}">
    <img src="./images/redRover.png" alt="Thankyou Website QA05" class="img__logo_item">
</a>`;
} else if (projectName.includes('shaddyfurniture')) {
    project.innerHTML = `
    <a class="link link--no-decor" href="${repository.html_url}">
        <img src="./images/shaddy_logo.png" alt="Shady Furniture website" class="img__logo_item">
    </a>`;
} else {
continue;
}

projectList.appendChild(project);

}
    })

    .catch((error) => {
        console.error('Error occuried', error);
    });

// let githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/oxangyal/repos", true);
// githubRequest.send();

// githubRequest.addEventListener("load",
//     event => {
//     let repositories = JSON.parse(githubRequest.response);
//         console.log(repositories);
//         let projectSection = document.getElementById("#project");
//         let projectList = project.querySelector('ul');
//         for (let i = 0; i < repositories.length; i++) {
//             let project = document.createElement("li");
//             project.innerHTML = `<a class="link link--no-decor" href="${repositories[i].html_url}">${repositories[i].name}</a>`;
//             projectList.appendChild(project);
//         }
//     })



