
class Contact {
	#name;
	#phone;
	#email;

	constructor(name, phone, email) {
		this.name = name;
		this.phone = phone;
		this.email = email;
	}

	getName() {
		return this.name;
	}
	getPhone() {
		return this.phone;
	}
	getEmail() {
		return this.email;
	}
}

let counter = 1;
let contacts = [];

window.onload = function() {
	displayResults();
	document.getElementById("append-contact").addEventListener("click", () => {
		const nameGiven = document.getElementById("name");
		const phoneGiven = document.getElementById("number");
		const emailGiven = document.getElementById("email");
		const name = nameGiven.value;
		const phone = phoneGiven.value;
		const email = emailGiven.value;

		if (!name || !phone || !email) {
			displayError("You have not filled any fields yet");
			return;
		}

		if (name.length > 20) {
			displayError("Name must be less than or equal to twenty characters in length");
			return;
		}

		if (phone.match(/[^0-9]/)) {
			displayError("Phone number should only contain numbers");
			return;
		}
		
		if (phone.length !== 10) {
			displayError("Phone number should be equal to ten digits in length");
			return;
		}

		if (email.length > 40) {
			displayError("Email must be less than 40 characters");
			return;
		}

		contacts.push(new Contact(name, phone, email));
		
		displayResults();
	});
	

	document.getElementById("search").addEventListener("input", (e) => displayResults(e.target.value));
	document.getElementById("sort").addEventListener("click", () => {
		if(counter === 1) {
			contacts.sort((a, b) => a.name.localeCompare(b.name));
			counter = -1;
		} else {
			contacts.sort((a, b) => b.name.localeCompare(a.name));
			counter = 1;
		}
		displayResults();
	});

	document.getElementById("closing-message").addEventListener("click", () => {
		document.getElementById("wrapper").classList.add("null");
	});
};

function displayResults(searchno) {
	const table = document.querySelector("tablesBody");
	let finalList = contacts;

	if(searchno) {
		finalList = finalList.filter(contact => (contact.getPhone()+"").includes(searchno));
	}

	finalList.forEach(function(contact) {
		const row = document.createElement("tr");
		row.innerHTML =  `
			<td>
			${contact.getName()}
			</td>
			<td>
			${contact.getPhone()}
			</td>
			<td>
			${contact.getEmail()}
			</td>`;
		table.appendChild(row);
	});
}

function displayError(message) {
	document.getElementById("error-message").innerHTML = message;
	document.getElementById("wrapper").classList.remove("null");
}

