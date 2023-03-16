    // Insert Copyright Text in Footer via JavaScript

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `&copy; Oxana Michkasova ${thisYear}`;
footer.appendChild(copyright);

    // Add Skills Section

const skills = ['./images/icon_js.png', "./images/icon_html.png", "./images/icon_css.png", "./images/icon_figma.png", "./images/icon_python.png", "./images/icon_ps.png", "./images/icon_git.png"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector("ul");

for (let el of skills){
    const skill = document.createElement('li');
    const skillImg = document.createElement('img')
    skillImg.src = el
    skillsList.appendChild(skill);
    skill.appendChild(skillImg)
}

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

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/oxangyal/repos");
githubRequest.send();

githubRequest.addEventListener("load",
    event => {
    let repositories = JSON.parse(githubRequest.response);
        console.log(repositories);
        let projectSection = document.getElementById("projects");
        let projectList = projects.querySelector('ul');
        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement("li");
            project.innerHTML = `<a class="link link--no-decor" href="${repositories[i].html_url}">${repositories[i].name}</a>`;
            projectList.appendChild(project);
        }
})