function showMenu()
{
    var menu;

    var beginMenu = '<div>';
        beginMenu += '<p><img src="images/lblSiteMenu.gif" align="center" alt="Site Menu" /></p>';
        beginMenu += '<p style="text-align: left">';

    var endMenu = '</p></div>';

	var fbTag = '<br /><a href="http://www.facebook.com/pages/CornShark/77718862152?ref=ts" target="_new"><img src="images/find_us_on_facebook_badge.gif" border="0" align="center" /></a>';

    var menuTable =  '<a href="index.html"><img src="images/CornSharkIcon.gif" border="0" />Home</a><br />';
        menuTable += '<a href="download.html"><img src="images/CornSharkIcon.gif" border="0" />Download</a><br />';
		menuTable += '<a href="screenshots.html"><img src="images/CornSharkIcon.gif" border="0" />Screenshots</a><br />';
        menuTable += '<a href="howtoplay.html"><img src="images/CornSharkIcon.gif" border="0" />How to Play</a><br />';
        menuTable += '<a href="characters.html"><img src="images/CornSharkIcon.gif" border="0" />Characters</a><br />';
        menuTable += '<a href="community.html"><img src="images/CornSharkIcon.gif" border="0" />Community</a><br />';
        menuTable += '<a href="blog.html"><img src="images/CornSharkIcon.gif" border="0" />Blog</a><br />';
		menuTable += '<p align="center"><b>Developer Info</b></p><p style="text-align: left">';
        menuTable += '<a href="http://www.michaeljhenson.info/cornshark.html"><img src="images/CornSharkIcon.gif" border="0" />Developer' + "'s Site</a> <br />";
        menuTable += '<a href="http://www.michaeljhenson.info/contact.html"><img src="images/CornSharkIcon.gif" border="0" />Contact Me</a> <br />';

	menu = beginMenu + menuTable + fbTag + endMenu;

	document.write(menu);
}

                    

function showCopyright()
{
    var c;

	c = "<hr /><i><p>The </i>CornShark<i> game software, product logo, web site, and characters' distinctive likenesses are <sup>TM</sup> and &copy; 2008 Michael J. Henson.  All rights reserved.</p> ";
	c += "<p>Michael Henson and the </i>CornShark<i> game are not affiliated with Iowa Cornsharks basketball.</p></i>";

	document.write(c);
}

                    







