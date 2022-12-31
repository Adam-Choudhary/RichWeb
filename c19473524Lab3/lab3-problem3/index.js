window.onload = function() {
	let textValue = document.getElementById("note-input"),
		addNoteButton = document.getElementById("add-note");

	Rx.Observable.fromEvent(addNoteButton, 'click').subscribe(() => { 
		let tOccurance = textValue.value;
		if (tOccurance) {
			let note = new Note(tOccurance);
			note.addNote();
		}
	});
}





class Note {
	#note; #parent; #struct; #duplicate; #divider;
	constructor(note, parent) {
		this.#note = note;
		if(parent) {
			this.#parent = parent;
		}
		this.#struct = document.getElementById((parent ? "child" : "parent") + "-note");
		this.#duplicate = this.#struct.content.cloneNode(true);
	}
	



	addNote() {
		let divider = this.#duplicate.querySelector(".note");
		let noteText = this.#duplicate.querySelector(".note-text");

		noteText.innerHTML = this.#note;
		this.#divider = divider;
		document.body.appendChild(divider);
		
		this.listenChildNote(divider);
		this.remove().subscribe(() => {
			divider.remove();
		});

		if(this.#parent) {
			this.#parent.remove().subscribe(() => {
				divider.remove();
			});
		}
	}



	listenChildNote(divider) {
		let addCNButton = divider.querySelector(".append-child"),
			ctVal = divider.querySelector(".enter-childnote");

		Rx.Observable.fromEvent(addCNButton, 'click').subscribe(() => {
			let cnOccurance = ctVal.value;
			ctVal.value = "";
			if(cnOccurance) {
				let childNote = new Note(cnOccurance, this);
				childNote.addNote();
			}
		});
	}



	remove() {
		let deleteButton = this.#divider.querySelector(".delete");
		return Rx.Observable.fromEvent(deleteButton, 'click');
	}
}