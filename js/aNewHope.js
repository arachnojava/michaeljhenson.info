var pluralNouns = new Array(6);
var adjectives = new Array(3);
var nouns = new Array(12);
var verbs = new Array(2);
var verbPast;
var number;
var person;
var anEvent;

function doANH()
{
	saveArrays();

	var TITLE = "A New " + nouns[1];
	var HEAD_SECTION = "<head><title>" + TITLE + "</title></head>";

	document.open();
	document.writeln("<html>");
	document.writeln(HEAD_SECTION);
	document.writeln("<body>");
	
	document.writeln("<p align='center'><b>A long time ago, in a " + nouns[0] + " far, far away...</b></p>");

	document.writeln("<h1 align='center'>STAR WARS</h1>");
	document.writeln("<h2 align='center'>Episode " + number + "</h2>");
	document.writeln("<h2 align='center'>" + TITLE + "</h2>");

	document.writeln("<p align='center'>It is a period of " + adjectives[0] + " " + nouns[2] + ". ");
	document.writeln("Rebel " + pluralNouns[0] + ", striking from a " + adjectives[1] + " " + nouns[3] + ", have " + verbPast + " their first ");
	document.writeln(nouns[4] + " against the evil Galactic " + nouns[5] + ".</p>");

	document.writeln("<p align='center'>During the " + anEvent + ", Rebel " + pluralNouns[1] + " managed to " + verbs[0] + " secret plans ");
	document.writeln("to the " + nouns[5] + "'s ultimate weapon, the Death " + nouns[6] + ", a(n) " + adjectives[2] + " space station ");
	document.writeln("with enough " + pluralNouns[2] + " to destroy an entire " + nouns[7] + ".</p>");
	
	document.writeln("<p align='center'>Pursued by the " + nouns[5] + "'s sinister " + pluralNouns[3] + ", Princess " + person);
	document.writeln(" races home aboard her " + nouns[8] + ", custodian of the stolen plans that can " + verbs[1] + " her " + pluralNouns[4]);
	document.writeln(" and restore " + pluralNouns[5] + " to the " + nouns[0] + "...</p>"); 

	document.writeln("<p align=center><input type='button' value='Print' onClick='window.print();'");

	document.writeln("</body>");
	document.writeln("</html>");
	document.close;
}



function saveArrays()
{
    var i;
	
	for (i = 0; i < document.pluralNouns.length; i++)
	{
		pluralNouns[i] = document.pluralNouns.elements[i].value;
	}

	for (i = 0; i < document.adjectives.length; i++)
	{
		adjectives[i] = document.adjectives.elements[i].value;
	}

	for (i = 0; i < document.nouns.length; i++)
	{
		nouns[i] = document.nouns.elements[i].value;
	}

	for (i = 0; i < document.verbs.length; i++)
	{
		verbs[i] = document.verbs.elements[i].value;
	}

    verbPast = document.verbPast.elements[0].value;
    number = document.number.elements[0].value;
    person = document.person.elements[0].value;
    anEvent = document.anEvent.elements[0].value;
}
