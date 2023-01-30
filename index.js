const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Oxana Michkasova ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CCS", "Python", "GitHub", "Photoshop"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector("ul");
for (let el of skills){
    const skill = document.createElement('li');
    skill.innerText = el;
    skillsList.appendChild(skill);
}