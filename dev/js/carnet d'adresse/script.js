"use strict";

const civilite = document.getElementById('civilite');
const editer = document.getElementById('editer');
const enregistrer = document.getElementById('enregistrer');
const form = document.querySelector('form');
const formtoggle = document.getElementById('formtoggle');
const info = document.getElementById('info');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const secform = document.getElementById('secform');
const telephone = document.getElementById('telephone');
const trash = document.getElementById('trashman');
const ul = document.querySelector('ul');
let id_i = 0;
let id_man = 0;
let editeur = false;
let contacts = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];

localStorage.contacts = JSON.stringify(contacts);
const data = JSON.parse(localStorage.contacts);

// affichage de la liste deja enregistre

for (let i = 0; i < data.length; i++)
{
	newLi(data[i].nom, data[i].prenom);
}

// affichage du formulaire

formtoggle.addEventListener('click', displayForm);

function displayForm()
{
	resetForm();
	var elem = document.getElementById('secform');
	elem.classList.toggle('showHide');
}

enregistrer.addEventListener('click', register);

function register(ev)
{
	ev.preventDefault();
	if (!nom.value || !prenom.value || !telephone.value)
		return ;

	var contact = {
		"civilite" : civilite.value,
		"nom" : nom.value,
		"prenom" : prenom.value,
		"telephone" : telephone.value
	};
	if (editeur)
	{
		contacts[id_man] = contact;
		localStorage.contacts = JSON.stringify(contacts);
		document.getElementById(id_man).textContent = contact.prenom + ' ' + contact.nom;
		secform.classList.add('showHide');
		return resetForm();
	}
	contacts.push(contact);
	localStorage.contacts = JSON.stringify(contacts);
	newLi(nom.value, prenom.value);
	resetForm();
}

function newLi(nom, prenom)
{
	var newli = document.createElement('li');
	newli.textContent = prenom + ' ' + nom;
	newli.setAttribute("id", id_i++);
	newli.addEventListener('click', displayInfo);
	ul.appendChild(newli);
}

const li = document.querySelectorAll('li');
const info_cpn = document.getElementById('info_cpn');
const info_tel = document.getElementById('info_tel');
for (let i = 0; i < li.length; i++)
{
	li[i].addEventListener('click', displayInfo);
}

function displayInfo(ev)
{
	id_man = ev.target.id;
	var civil = 'Mme.';
	info.classList.toggle('showHide');
	if (contacts[id_man].civilite == 'monsieur')
		civil = 'Mr.';
	info_cpn.innerHTML = civil + ' ' + contacts[id_man].prenom + ' ' + contacts[id_man].nom;
	info_tel.innerHTML = contacts[id_man].telephone;
}

editer.addEventListener('click', function()
{
	secform.classList.remove('showHide');
	civilite.value = contacts[id_man].civilite;
	nom.value = contacts[id_man].nom;
	prenom.value = contacts[id_man].prenom;
	telephone.value = contacts[id_man].telephone;
	editeur = true;
});

trash.addEventListener('click', function()
{
	contacts.length = 0;
	localStorage.clear();
	resetForm();
	info.classList.add('showHide');
	while (ul.firstChild)
	{
		ul.removeChild(ul.firstChild);
	}
	id_i = 0;
});

function resetForm()
{
	civilite.value = 'madame';
	nom.value = '';
	prenom.value = '';
	telephone.value = '';
	editeur = false;
	info.classList.add('showHide');
}