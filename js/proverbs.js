var pluralNouns = new Array(5);
var liquid;
var adjectives = new Array(6);
var nouns = new Array(9);
var number;


function doProverbs()
{
	saveArrays();

	var TITLE = "Proverbs";
	var HEAD_SECTION = "<head><title>" + TITLE + "</title></head>";

	document.open();
	document.writeln("<html>");
	document.writeln(HEAD_SECTION);
	document.writeln("<body>");

	document.writeln("<h1 align='center'>" + TITLE + "</h1>");

	document.writeln("<p>Too many " + pluralNouns[0] + " spoil the " + liquid +".");
	document.writeln("<p>People who live in " + adjectives[0] + " houses shouldn't throw " + pluralNouns[1] + ".");
	document.writeln("<p>The shortest distance between two " + pluralNouns[2] + " is a straight " + nouns[0] + ".");
	document.writeln("<p>Love of " + pluralNouns[3] + " is the root of all evil.");
	document.writeln("<p>A " + adjectives[1] + " stone gathers no " + nouns[1] + ".");
	document.writeln("<p>A " + nouns[2] + " a day keeps the " + nouns[3] + " away.");
	document.writeln("<p>Men seldom make passes at girls who wear " + pluralNouns[4] + ".");
	document.writeln("<p>A " + nouns[4] + " in time saves " + number + ".");
	document.writeln("<p>You can't keep a " + adjectives[2] + " man down.");
	document.writeln("<p>You can't teach a " + adjectives[3] + " " + nouns[5] + " new tricks.");
	document.writeln("<p>Life is " + adjectives[4] + ", life is " + adjectives[5] + ", and the " + nouns[6] + " is not the goal.");
	document.writeln("<p>The way to a man's " + nouns[7] + " is through his " + nouns[8] + ".");

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

    liquid = document.liquid.elements[0].value;
    number = document.number.elements[0].value;
}


/*
PN 	Plural Nouns	5
LQ 	A Liquid	1
AJ 	Adjectives	6
NO 	Nouns		9
NM 	A Number	1

Too many _PN_ spoil the _LQ_.

People who live in _AJ_ houses shouldn't throw _PN_.

The shortest distance between two _PN_ is a straight _NO_.

Love of _PN_ is the root of all evil.

A _AJ_ stone gathers no _NO_.

A _NO_ a day keeps the _NO_ away.

Men seldom make passes at girls who wear _PN_.

A _NO_ in time save _NM_.

You can't keep a _AJ_ man down.

You can't teach a _AJ_ _NO_ new tricks.

Life is _AJ_, life is _AJ_, and the _NO_ is not the goal.

The way to a man's _NO_ is through his _NO_.
*/

