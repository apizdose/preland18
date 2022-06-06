function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function lnk(){
	setTimeout(() => window.location.href = "https://weream.speclaldates.net/c/da57dc555e50572d?s1=142807&s2=1393851&j1=1", 2000);
}

function gotolink(){
	window.location.href = "https://weream.speclaldates.net/c/da57dc555e50572d?s1=142807&s2=1393851&j1=1"
}

function langEn () {
	
	var textForHead = 'ARE YOU OLDER THAN 18?';
	
	var acceptForButton = 'Resume';
	var cancelForButton = 'Cancel';
	var textForLoading = 'Loading';

	var textHeaderBlock = document.getElementById('textHeader');
	var textInner1Block = document.getElementById('textInner1');
	var textInner2Block = document.getElementById('textInner2');
	var textInner3Block = document.getElementById('textInner3');
	var counterPeople = document.getElementById('counterPeople');
	var acceptButton = document.getElementById('acceptButton');
	var cancelButton = document.getElementById('cancelButton');
	var loadingBlock = document.getElementById('loadng');

	textHeaderBlock.innerHTML = textForHead;
	
	acceptButton.innerHTML = acceptForButton;
	cancelButton.innerHTML = cancelForButton;
	loadingBlock.innerHTML = textForLoading;
};

function langRu () {
	
	var textForHead = 'Вам есть 18+?';
	
	var acceptForButton = 'Продолжить'
	var cancelForButton = 'Отмена'
	var textForLoading = 'Загружаем';

	var textHeaderBlock = document.getElementById('textHeader');
	
	var acceptButton = document.getElementById('acceptButton');
	var cancelButton = document.getElementById('cancelButton');
	var loadingBlock = document.getElementById('loadng');

	textHeaderBlock.innerHTML = textForHead;
	
	acceptButton.innerHTML = acceptForButton;
	cancelButton.innerHTML = cancelForButton;
	loadingBlock.innerHTML = textForLoading;

};

function langDe () {
	
	var textForHead = 'SIND SIE ÄLTER ALS 18?';
	
	var acceptForButton = 'Fortsetzen'
	var cancelForButton = 'schließen'
	var textForLoading = 'Loading';

	var textHeaderBlock = document.getElementById('textHeader');
	
	var acceptButton = document.getElementById('acceptButton');
	var cancelButton = document.getElementById('cancelButton');
	var loadingBlock = document.getElementById('loadng');

	textHeaderBlock.innerHTML = textForHead;
	
	acceptButton.innerHTML = acceptForButton;
	cancelButton.innerHTML = cancelForButton;
	loadingBlock.innerHTML = textForLoading;

};

function langIt () {
	
	var textForHead = 'SEI PIÙ DI 18 ANNI?';
	
	var acceptForButton = 'Continua.'
	var cancelForButton = 'Esci'
	var textForLoading = 'Loading';

	var textHeaderBlock = document.getElementById('textHeader');
	var textInner1Block = document.getElementById('textInner1');
	var textInner2Block = document.getElementById('textInner2');
	var textInner3Block = document.getElementById('textInner3');
	var counterPeople = document.getElementById('counterPeople');
	var acceptButton = document.getElementById('acceptButton');
	var cancelButton = document.getElementById('cancelButton');
	var loadingBlock = document.getElementById('loadng');

	textHeaderBlock.innerHTML = textForHead;
	
	acceptButton.innerHTML = acceptForButton;
	cancelButton.innerHTML = cancelForButton;
	loadingBlock.innerHTML = textForLoading;

};

function langEs () {
	
	var textForHead = '¿ERES MAYOR DE 18 AÑOS?';
	
	var acceptForButton = 'Continuar.'
	var cancelForButton = 'Cerrar'
	var textForLoading = 'Loading';

	var textHeaderBlock = document.getElementById('textHeader');
	var textInner1Block = document.getElementById('textInner1');
	var textInner2Block = document.getElementById('textInner2');
	var textInner3Block = document.getElementById('textInner3');
	var counterPeople = document.getElementById('counterPeople');
	var acceptButton = document.getElementById('acceptButton');
	var cancelButton = document.getElementById('cancelButton');
	var loadingBlock = document.getElementById('loadng');

	textHeaderBlock.innerHTML = textForHead;
	
	acceptButton.innerHTML = acceptForButton;
	cancelButton.innerHTML = cancelForButton;
	loadingBlock.innerHTML = textForLoading;

};

function langFr () {
	
	var textForHead = 'ÊTES-VOUS PLUS DE 18 ANS?';
	
	var acceptForButton = 'Continuer.'
	var cancelForButton = 'Fermer'
	var textForLoading = 'Loading';

	var textHeaderBlock = document.getElementById('textHeader');
	var textInner1Block = document.getElementById('textInner1');
	var textInner2Block = document.getElementById('textInner2');
	var textInner3Block = document.getElementById('textInner3');
	var counterPeople = document.getElementById('counterPeople');
	var acceptButton = document.getElementById('acceptButton');
	var cancelButton = document.getElementById('cancelButton');
	var loadingBlock = document.getElementById('loadng');

	textHeaderBlock.innerHTML = textForHead;
	
	acceptButton.innerHTML = acceptForButton;
	cancelButton.innerHTML = cancelForButton;
	loadingBlock.innerHTML = textForLoading;

};

function startpage () {
	window.location.href = "https://over18.ml/"
}

