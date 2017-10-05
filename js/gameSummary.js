function showGameSummary(gameName, url, imageFile, description, tech)
{
	var s  = '<table border="0" cellpadding="5">';
	
	// First row: Screen shot
	s += '<tr><td align="center" valign="top">';
	s += '<a href="' + imageFile + '"><img src="' + imageFile + '" width="256" height="192" border="0"/></a>';
	s += '</td></tr>';
		
	// Second row: Game name and description.	
	s += '<tr><td align="center" valign="top">';
	s += '<p align="center"><b>';
	
	if (url == "")
		s += gameName;
	else
		s += '<a href="' + url + '">' + gameName + '</a>';
	
	s += '</b></p>';
	s += '<p align="left">' + description + '</p>';
    s += '<p align="left"><b>Technology used: </b>' + tech + '</p>';
	s += '</td></tr>';
	s += '</table>';
		   
	document.write(s);
}

