let headerTitle = document.querySelectorAll('header h1');
Array.from(headerTitle).forEach(((header) => {
    header.textContent = "Fruits & Vegetables Corp";
}));

let ahref = document.querySelectorAll('ul li a[href="#bananas"]');
Array.from(ahref).forEach(((a) => {
    a.textContent = "Vegetables";
    a.href = "#Vegetables";
}));

let removeTd = document.querySelectorAll('table thead tr td');
for (let i = 0; i < removeTd.length; i++) {
    removeTd[i].remove();
}

const thead = ['Name', 'Email'];
let th = document.createElement('th');
let th1 = document.createElement('th');
th.textContent = thead[0];
th1.textContent = thead[1];
document.querySelector("table thead tr").append(th, th1);

let deleteAbout = document.querySelectorAll('#about');
for (let i = 0; i < deleteAbout.length; i++) {
    deleteAbout[i].remove();
}

let newContact = document.createElement('section');
newContact.id = "about";
document.querySelector('#main').appendChild(newContact);

let p = document.createElement('p');
p.textContent = "We're the best in fruits & vegetables";
document.querySelector('#about').appendChild(p);

let h2About = document.createElement('h2');
h2About.textContent = 'About';
document.querySelector('#about').appendChild(h2About);

let h2Contact = document.createElement('h2');
h2Contact.textContent = 'Contact';
document.querySelector('#contact').appendChild(h2Contact);


let title = document.querySelectorAll('head title');
Array.from(title).forEach(((title) => {
    title.textContent = "Fruits & Vegetables Corp";
}));

let head = document.getElementsByTagName('head')[0]; 
let link = document.createElement('link');
link.href= "main.css";
link.rel = "stylesheet";
link.type = "text/css";
head.appendChild(link);

const contactP = document.querySelector("#contact p");
const contactTable = document.querySelector("#contact table");
const contactH2 = document.querySelector("#contact h2");

contactP.after(contactTable);
contactP.before(contactH2);




