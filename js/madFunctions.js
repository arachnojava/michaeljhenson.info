function makeWordTable(title, numWords)
{
    var resultString = "<table border=1 cellpadding=2 cellspacing=1>";
    resultString += "<tr><td colspan = 4><h2>" + title + "  (" + numWords + ")" + "</h2></td></tr>";

    var wordCount = 0;
    while (wordCount < numWords)
    {
        resultString += "<tr>";
        var i = 0;
        while (i < 4 && wordCount < numWords)
        {
            resultString += "<td><input type='text'></td>";
            i++;
            wordCount++;
        }
        resultString += "</tr>";

    }
    resultString += "</table>";

    document.write(resultString);
}

function validate()
{
    	var frm = 0;
	var elem = 0;
	var complete = true;
	
	for (frm = 0; frm < document.forms.length; frm++)
	{
	    for (elem = 0; elem < document.forms[frm].length; elem++)
		{
            var formElement = document.forms[frm].elements[elem].value;
		    if ((formElement == "") || (formElement == null))
			{
			    complete = false;
			}
		}
	}

    return complete;
}