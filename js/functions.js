function showMenu()
{
    var menu;

    var beginMenu = '<div><style type="text/css">';
        beginMenu += '<!-- A:hover { color:red } //-->';
        beginMenu += '</STYLE>';
        beginMenu += '<font face="Tahoma" color="#0080FF" size="2">';
        beginMenu += '<table border="1" align="center" cellpadding="2">';

    var endMenu = '</table>';

    var menuTable = "";

		menuTable += facebookMenuItem();
   		menuTable += igdaMenuItem();
        menuTable += menuHeading("Site Menu");
        menuTable += menuItem("Home",                           "index.html");
        menuTable += menuItem("My Work at a Glance",            "ataglance.html");
		menuTable += menuItem("Postmortems",                    "postmortems.html");
        menuTable += menuItem("About Me",                       "about.html");
        menuTable += menuItem("Contact",                        "contact.html");

        menuTable += menuHeading("Current Projects");
		menuTable += menuPlainText("Beltzhian Marauders");
		menuTable += menuPlainText("Team Laser Combat");
		menuTable += menuPlainText("CTG");

        menuTable += menuHeading("Past Games");
        menuTable += menuItem("Barn Nazi",                      "barnnazi.html");
        menuTable += menuItem("Chaotus' Archery Range",         "chaotus.html");
		menuTable += menuItem("CornShark",                      "cornshark.html");
		menuTable += menuItem("Guess the Number",         		"guessthenumber.html");
		menuTable += menuItem("Hangdude",                       "hangdude.html");
        menuTable += menuItem("Intergalactic Shooting Gallery", "shootinggallery.html");
        menuTable += menuItem("Invaders, Possibly From Space",  "invaders.html");
		menuTable += menuItem("Jammy Life",                     "jammylife.html");
		menuTable += menuItem("MO Techtris",                    "motechtris.html");
		menuTable += menuItem("Pentacular",                     "pentacular.html");
		menuTable += menuItem("Workshop Space Game",            "javaworkshop/index.html");

		menuTable += menuHeading("Toys 'n Stuff");
		menuTable += menuItem("LIME",                           "lime.html");
		menuTable += menuItem("MHFramework",                    "mhframework.html");		
		menuTable += menuItem("Sprite Tester 2",                "spritetester2.html");
        menuTable += menuItem("Fun With Tarot",                 "tarot.html");
        menuTable += menuItem("Word Game",                      "proverbs.html");

		menuTable += menuHeading("External Links");
		//menuTable += externalMenuItem("Blog", "http://blog.360.yahoo.com/arachnojava");
		menuTable += externalMenuItem("Glossary", "glossary/index.html");
		menuTable += externalMenuItem("MHFramework Documentation", "doc/index.html");
        //menuTable += externalMenuItem("Yahoo! 360 Profile", "http://360.yahoo.com/arachnojava");
        menuTable += externalMenuItem("hi5 Profile", "http://michaeljhenson.hi5.com");
		menuTable += linkedInMenuItem();

    menu = beginMenu + menuTable + endMenu;

    document.write(menu);
}


function menuItem(name, url)
{
    var menuRow = '<tr>';
    menuRow += '<td bgcolor="#C0C0C0">';
    menuRow += '<font size="1">';
    menuRow += '<a href="' + url + '" ';
    menuRow += '   style="text-decoration: none"';
    menuRow += '   target="_top">';
    menuRow += '<b>' + name + '</b>';
    menuRow += '</a></font></td></tr>';

    /*
        <tr><td bgcolor="#C0C0C0"><font size="1">
            <a href="MH_Games.html" STYLE="text-decoration: none" TARGET="_top">
                <b>Games</b>
            </a></font></td></tr>
    */

    return menuRow;
}

function menuPlainText(name)
{
    var menuRow = '<tr>';
    menuRow += '<td bgcolor="#C0C0C0">';
    menuRow += '<font size="1">';
    menuRow += name;
    menuRow += '</font></td></tr>';
		
	return menuRow;
}

function externalMenuItem(name, url)
{
    var menuRow = '<tr>';
    menuRow += '<td bgcolor="#C0C0C0">';
    menuRow += '<font size="1">';
    menuRow += '<a href="' + url + '" ';
    menuRow += '   style="text-decoration: none"';
    menuRow += '   target="_new">';
    menuRow += '<b>' + name + '</b>';
    menuRow += '</a></font></td></tr>';

    /*
        <tr><td bgcolor="#C0C0C0"><font size="1">
            <a href="MH_Games.html" STYLE="text-decoration: none" TARGET="_top">
                <b>Games</b>
            </a></font></td></tr>
    */

    return menuRow;
}


function linkedInMenuItem()
{
    var menuRow = '<tr>';
    menuRow += '<td bgcolor="#C0C0C0" align="center">';
    menuRow += '<a href="http://www.linkedin.com/in/michaeljhenson" target="_new">'
	menuRow += '<img src="http://www.linkedin.com/img/webpromo/btn_viewmy_120x33.gif" width="120" height="33" border="0" alt="Michael Henson&#039;s LinkedIn Profile">';
    menuRow += '</a></td></tr>';
	
	return menuRow;
}


function igdaMenuItem()
{
	var menuRow = '<tr>';
    menuRow += '<td bgcolor="#C0C0C0" align="center">';
	
    menuRow += '<a href="http://www.igda.org/user/15689" target="_new">';
	menuRow += '<img width="80" height="15" border="0" alt="Michael Henson - IGDA Member Profile" src="http://www.igda.org/images/igda_member.png"/>';
    menuRow += '</a></td></tr>';
	
	return menuRow;
}


function facebookMenuItem()
{
	var menuRow = '<tr>';
    menuRow += '<td bgcolor="#C0C0C0" align="center">';
    menuRow += '<a href="http://www.facebook.com/people/Michael-Henson/720391787" title="Michael Henson&#039;s Facebook profile" target="_new" ';
	menuRow += 'style="font-family: &quot;lucida grande&quot;,tahoma,verdana,arial,sans-serif; ';
	menuRow += 'font-size: 11px; font-variant: normal;font-style: normal; font-weight: normal; ';
	menuRow += 'color: #3B5998; text-decoration: none;">Michael Henson&#039;s Profile</a><br />';
	menuRow += '<a href="http://www.facebook.com/people/Michael-Henson/720391787" title="Michael Henson&#039;s Facebook profile" target="_new">';
    menuRow += '<img src="http://badge.facebook.com/badge/720391787.950.851507801.png" alt="Michael Henson&#039;s Facebook profile" style="border: 0px;" /></a>';
    menuRow += '<br /><a href="http://www.facebook.com/badges.php" title="Make your own badge!" target="_new" ';
    menuRow += 'style="font-family: &quot;lucida grande&quot;,tahoma,verdana,arial,sans-serif; font-size: 11px; ';
    menuRow += 'font-variant: normal;font-style: normal; font-weight: normal; color: #3B5998; text-decoration: none;">Create Your Badge';
    menuRow += '</a></td></tr>';
	
	return menuRow;
}


function menuHeading(title)
{
    /* Builds this tag:
       <tr><td align="center" height="20" bgcolor="#000080">
               <font color="#FFFFFF" size="2">
                      <b>Michael's Pages</b>
            </td></tr>
    */

    var heading = '<tr><td align="center" height="20" bgcolor="#000080">';
        heading += '<font color="#FFFFFF" size="2">';
        heading += '<b>' + title + '</b>';
        heading += '</td></tr>';

    return heading;
}

