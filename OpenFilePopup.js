
function showFile(fileName)
{
	var scrwd, scrht;
   	scrwd = 840;
   	scrht = 780;
    if (screen.width < 840)
  	{
		scrwd = screen.width;
	}
  	if (screen.height < 780)
  	{
		scrht = screen.height - 45;    
	}
    aStatWin=window.open( fileName,'Attachment','toolbar=no,location=yes,directories=no,status=yes,scrollbars=yes,resizable=yes,copyhistory=no,top=0,left=0,width=' + scrwd +',height=' + scrht + '\'') ;
    return;
}
