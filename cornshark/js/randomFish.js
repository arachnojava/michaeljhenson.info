function showLeftFish()
{
    var tag = '<a href="characters.html"><img src="' + chooseLeftFish() + '" align="right" valign="top" border="0" alt="Click here to meet the characters!" /></a>';

	document.write(tag);
}

function showRightFish()
{
    var tag = '<a href="characters.html"><img src="' + chooseRightFish() + '" align="left" valign="top" border="0" alt="Click here to meet the characters!" /></a>';

	document.write(tag);
}


function chooseLeftFish()
{
	var fish = new Array();
	var i = 0;
	
    fish[i++] = "images/Char-Cornshark-BiteL0.gif";
    fish[i++] = "images/Char-Cornshark-BiteL1.gif";
    fish[i++] = "images/Char-Cornshark-L.gif";
    fish[i++] = "images/Char-CrackerFishy-L.gif";
    fish[i++] = "images/Char-Pearahna-L.gif";
    fish[i++] = "images/Char-HamburgerheadShark-L.gif";
    fish[i++] = "images/Char-PhatFish-L.gif";
    fish[i++] = "images/Char-RainbowSlushTrout-L.gif";
    fish[i++] = "images/Char-Sharkcut-L.gif";
    fish[i++] = "images/Char-ShellFish-L.gif";
    fish[i++] = "images/Char-StripedRacer-L.gif";
    fish[i++] = "images/Char-Whalemelon-L.gif";
    fish[i++] = "images/Char-ChipsenFish-L.gif";
    fish[i++] = "images/Char-Bananacuda-L.gif";
    fish[i++] = "images/Char-PeebeeJellyfish-0.gif";
    fish[i++] = "images/Char-SherbetCrab-L.gif";

	var r = Math.floor(Math.random() * fish.length);
	
	return fish[r];
}


function chooseRightFish()
{
	var fish = new Array();
	var i = 0;
	
    fish[i++] = "images/Char-Cornshark-BiteR0.gif";
    fish[i++] = "images/Char-Cornshark-BiteR1.gif";
    fish[i++] = "images/Char-Cornshark-R.gif";
    fish[i++] = "images/Char-CrackerFishy-R.gif";
    fish[i++] = "images/Char-Pearahna-R.gif";
    fish[i++] = "images/Char-HamburgerheadShark-R.gif";
    fish[i++] = "images/Char-PhatFish-R.gif";
    fish[i++] = "images/Char-RainbowSlushTrout-R.gif";
    fish[i++] = "images/Char-Sharkcut-R.gif";
    fish[i++] = "images/Char-ShellFish-R.gif";
    fish[i++] = "images/Char-StripedRacer-R.gif";
    fish[i++] = "images/Char-Whalemelon-R.gif";
    fish[i++] = "images/Char-ChipsenFish-R.gif";
    fish[i++] = "images/Char-Bananacuda-R.gif";
    fish[i++] = "images/Char-PeebeeJellyfish-0.gif";
    fish[i++] = "images/Char-SherbetCrab-R.gif";

	var r = Math.floor(Math.random() * fish.length);
	
	return fish[r];
}
