window.onload = function() {
	const input = document.querySelector('#note-input');
	const chooseColor = document.querySelector('#note-colour');
	const noteButton = document.querySelector('#note-button');
	const template = document.querySelector("template");

	//rxjs.fromEvent(create, 'click').subscribe(() => newNote());

	Rx.Observable.fromEvent(noteButton, 'click').subscribe(() => {
		if(input.value) {
			const clone = template.content.cloneNode(true);
			const noteText = clone.querySelector('.note-contents');
			const note = clone.querySelector('.note');
			const editNoteButton = clone.querySelector('.edit-note-button');
			const deleteNoteButton = clone.querySelector('.delete-note-button');

			note.style.backgroundColor = chooseColor.value;
			noteText.innerHTML = input.value;

			editNote(editNoteButton, noteText);
			deleteNote(deleteNoteButton, note);

			document.body.appendChild(clone);
			noteInput.value = '';
		}
	});

	function editNote(editNoteButton, noteText) {
		const oldContents = noteText.innerHTML;
		let isEditing = false;
		Rx.Observable.fromEvent(editNoteButton, 'click').subscribe(() =>{
			isEditing =! isEditing;
			noteText.contentEditable = isEditing;
			noteText.focus();
		});
	}

	function deleteNote(deleteNoteButton, note) {
		Rx.Observable.fromEvent(deleteNoteButton, 'click').subscribe(() => {
			note.remove();
		});
	}
}