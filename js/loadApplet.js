function loadApplet(title, archive, code, width, height, currentPage)
{
	var page = '<html><head><title>' + title + '</title></head>';
        page += '<body bgcolor="#000000"><p align="center"><applet ';
		page += 'archive="' + archive + '" ';
		page +=    'code="' + code    + '" ';
		page +=  'height="' + height  + '" ';
		page +=   'width="' + width   + '"></applet><br>';
		page += '<a href="' + currentPage + '">Return to ' + title + ' Information Page<\a>';
		page += '</p></body></html>';

	document.open();
	document.writeln(page);
	document.close();
	
}