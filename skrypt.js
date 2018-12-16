var jeden=0;
var dwa=0;
var trzy=0;
var cztery=0;
var piec=0;
var szesc=0;
var siedem=0;
var osiem=0;
var dziewiec=0;
var my=0;
var ruch = 0;
var wygranko = 0;
var end =0;

function touch(x) 
{
	if(end==ruch){
	document.getElementById("info").innerHTML = '';
	switch(x)
	{
		case 1 : if (jeden==0) {document.getElementById("one").innerHTML = '<img src="cross.png" width="100px">'; ruch++; jeden=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 2 : if (dwa==0) {document.getElementById("two").innerHTML = '<img src="cross.png" width="100px">'; ruch++; dwa=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 3 : if (trzy==0) {document.getElementById("three").innerHTML = '<img src="cross.png" width="100px">'; ruch++; trzy=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 4 : if (cztery==0) {document.getElementById("four").innerHTML = '<img src="cross.png" width="100px">'; ruch++; cztery=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 5 : if (piec==0) {document.getElementById("five").innerHTML = '<img src="cross.png" width="100px">'; ruch++; piec=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 6 : if (szesc==0) {document.getElementById("six").innerHTML = '<img src="cross.png" width="100px">'; ruch++; szesc=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 7 : if (siedem==0) {document.getElementById("seven").innerHTML = '<img src="cross.png" width="100px">'; ruch++; siedem=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 8 : if (osiem==0) {document.getElementById("eight").innerHTML = '<img src="cross.png" width="100px">'; ruch++; osiem=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 9 : if (dziewiec==0) {document.getElementById("nine").innerHTML = '<img src="cross.png" width="100px">'; ruch++; dziewiec=1; setTimeout(brain, 1000);}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
	}
}
}

function runda1()
{
	var full;
		if(jeden==1){full=1; while(full==1){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(dwa==1){full=2; while(full==2){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(trzy==1){full=3; while(full==3){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(cztery==1){full=4; while(full==4){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(piec==1){full=5; while(full==5){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(szesc==1){full=6; while(full==6){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(siedem==1){full=7; while(full==7){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(osiem==1){full=8; while(full==8){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		if(dziewiec==1){full=9; while(full==9){ full=Math.floor((Math.random() * 9) + 1);} wybrana(full);  }
		my=1;
}

function runda2()
{
	obrona();
}

function obrona()
{
	if (jeden==1 & trzy==1) {if (dwa==0) {document.getElementById('two').innerHTML = '<img src="circle.png" width="100px">'; dwa=2;my=2;end++; }else{atak();}return;}
	if (cztery==1 & szesc==1) {if (piec==0) {document.getElementById('five').innerHTML = '<img src="circle.png" width="100px">'; piec=2;my=2;end++; }else{atak();}return;}
	if (siedem==1 & dziewiec==1) {if (osiem==0) {document.getElementById('eight').innerHTML = '<img src="circle.png" width="100px">'; osiem=2;my=2;end++; }else{atak();}return;}
	if (jeden==1 & siedem==1) {if (cztery==0) {document.getElementById('four').innerHTML = '<img src="circle.png" width="100px">'; cztery=2;my=2;end++; }else{atak();}return;}
	if (dwa==1 & osiem==1) {if (piec==0) {document.getElementById('five').innerHTML = '<img src="circle.png" width="100px">'; piec=2;my=2;end++; }else{atak();}return;}
	if (trzy==1 & dziewiec==1) {if (szesc==0) {document.getElementById('six').innerHTML = '<img src="circle.png" width="100px">'; szesc=2;my=2;end++; }else{atak();}return;}
	if (jeden==1 & dziewiec==1) {if (piec==0) {document.getElementById('five').innerHTML = '<img src="circle.png" width="100px">'; piec=2;my=2;end++; }else{atak();}return;}
	if (siedem==1 & trzy==1) {if (piec==0) {document.getElementById('five').innerHTML = '<img src="circle.png" width="100px">'; piec=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & jeden==1) {if (dziewiec==0) {document.getElementById('nine').innerHTML = '<img src="circle.png" width="100px">'; dziewiec=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & dwa==1) {if (osiem==0) {document.getElementById('eight').innerHTML = '<img src="circle.png" width="100px">'; osiem=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & trzy==1) {if (siedem==0) {document.getElementById('seven').innerHTML = '<img src="circle.png" width="100px">'; siedem=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & szesc==1) {if (cztery==0) {document.getElementById('four').innerHTML = '<img src="circle.png" width="100px">'; cztery=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & dziewiec==1) {if (jeden==0) {document.getElementById('one').innerHTML = '<img src="circle.png" width="100px">'; jeden=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & osiem==1) {if (dwa==0) {document.getElementById('two').innerHTML = '<img src="circle.png" width="100px">'; dwa=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & siedem==1) {if (trzy==0) {document.getElementById('three').innerHTML = '<img src="circle.png" width="100px">'; trzy=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & cztery==1) {if (szesc==0) {document.getElementById('six').innerHTML = '<img src="circle.png" width="100px">'; szesc=2;my=2;end++; }else{atak();}return;}
	if (cztery==1 & jeden==1) {if (siedem==0) {document.getElementById('seven').innerHTML = '<img src="circle.png" width="100px">'; siedem=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & dwa==1) {if (osiem==0) {document.getElementById('eight').innerHTML = '<img src="circle.png" width="100px">'; osiem=2;my=2;end++; }else{atak();}return;}
	if (trzy==1 & szesc==1) {if (dziewiec==0) {document.getElementById('nine').innerHTML = '<img src="circle.png" width="100px">'; dziewiec=2;my=2;end++; }else{atak();}return;}
	if (cztery==1 & siedem==1) {if (jeden==0) {document.getElementById('one').innerHTML = '<img src="circle.png" width="100px">'; jeden=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & osiem==1) {if (dwa==0) {document.getElementById('two').innerHTML = '<img src="circle.png" width="100px">'; dwa=2;my=2;end++; }else{atak();}return;}
	if (szesc==1 & dziewiec==1) {if (trzy==0) {document.getElementById('three').innerHTML = '<img src="circle.png" width="100px">'; trzy=2;my=2;end++; }else{atak();}return;}
	if (dwa==1 & trzy==1) {if (jeden==0) {document.getElementById('one').innerHTML = '<img src="circle.png" width="100px">'; jeden=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & szesc==1) {if (cztery==0) {document.getElementById('four').innerHTML = '<img src="circle.png" width="100px">'; cztery=2;my=2;end++; }else{atak();}return;}
	if (osiem==1 & dziewiec==1) {if (siedem==0) {document.getElementById('seven').innerHTML = '<img src="circle.png" width="100px">'; siedem=2;my=2;end++; }else{atak();}return;}
	if (siedem==1 & osiem==1) {if (dziewiec==0) {document.getElementById('nine').innerHTML = '<img src="circle.png" width="100px">'; dziewiec=2;my=2;end++; }else{atak();}return;}
	if (piec==1 & cztery==1) {if (szesc==0) {document.getElementById('six').innerHTML = '<img src="circle.png" width="100px">'; szesc=2;my=2;end++; }else{atak();}return;}
	if (dwa==1 & jeden==1) {if (trzy==0) {document.getElementById('three').innerHTML = '<img src="circle.png" width="100px">'; trzy=2;my=2;end++; }else{atak();}return;}
	if (jeden==1 & osiem==1){atak();}
	if (trzy==1 & osiem==1){atak();}
	if (dwa==1 & siedem==1){atak();}
	if (dwa==1 & dziewiec==1){atak();}
	if (cztery==1 & trzy==1){atak();}
	if (cztery==1 & dziewiec==1){atak();}
	if (szesc==1 & jeden==1){atak();}
	if (szesc==1 & siedem==1){atak();}
	if(dwa==1 & cztery==1){atak();}
	if(dwa==1 & szesc==1){atak();}
	if(osiem==1 & cztery==1){atak();}
	if(osiem==1 & szesc==1){atak();}
}

function atak()
{
	if (my==1) 
	{
	var full;
	if (piec==2) 
	{
		if (jeden==1 & dziewiec==1) {full=1; while(full==1 || full==2 || full==4 || full==5 || full==6 || full==8 || full==9){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
		if (trzy==1 & siedem==1) {full=3; while(full==3 || full==2 || full==4 || full==5 || full==6 || full==8 || full==7){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
		if (jeden==1 & dziewiec!=1) {full=7; while(full==1 ||full==2 || full==4 || full==5 || full==6 || full==8){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
		if (trzy==1 & siedem!=1) {full=7; while(full==3 || full==2 || full==4 || full==5 || full==6 || full==8){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
		if (siedem==1 & trzy!=1) {full=7; while(full==7 || full==2 || full==4 || full==5 || full==6 || full==8){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
		if (dziewiec==1 & jeden!=1) {full=9; while(full==9 || full==2 || full==4 || full==5 || full==6 || full==8){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
		if (jeden!=1 & trzy!=1 & siedem!=1 & dziewiec!=1) {full=2; while(full==2 || full==4 || full==5 || full==6 || full==8){full=Math.floor((Math.random() * 9) + 1);};wybrana(full); return;}
	}
	if (jeden==2 || trzy==2 || siedem==2 || dziewiec==2) 
	{
		if (jeden==2) 
		{
			if (trzy==0 & siedem==0) 
			{
				if (dwa==0 & cztery==0) 
				{
					full=9; while(full==1 || full==2 || full==5 || full==6 || full==4 || full==8 || full==9){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;
				}

				if (dwa==0 & cztery!=0) 
				{
					wybrana(3);return;
				}
				if (cztery==0 & dwa!=0) 
				{
					wybrana(7);return;
				}
				if (cztery==1 & dwa==1)
				{
					wybrana(9);return;
				}
			}

			if (trzy==0 & siedem!=0) 
			{
				if (dwa==0) {wybrana(3);}else{wybrana(9);}return;
			}
			if (siedem==0 & trzy!=0) 
			{
				if (cztery==0) {wybrana(7);}else{wybrana(9);}return;
			}
			return;
		}

		if (trzy==2) 
		{
			if (jeden==0 & dziewiec==0) 
			{
				if (dwa==0 & szesc==0) 
				{
					full=3; while(full==3 || full==2 || full==5 || full==6 || full==4 || full==8 || full==7){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;
				}

				if (dwa==0 & szesc!=0) 
				{
					wybrana(1);return;
				}
				if (szesc==0 & dwa!=0) 
				{
					wybrana(9);return;
				}
				if (szesc==1 & dwa==1)
				{
					wybrana(7);return;
				}
			}

			if (jeden==0 & dziewiec!=0) 
			{
				if (dwa==0) {wybrana(1);}else{wybrana(7);}return;
			}
			if (dziewiec==0 & jeden!=0) 
			{
				if (szesc==0) {wybrana(9);}else{wybrana(7);}return;
			}
			return;
		}

		if (siedem==2) 
		{
			if (jeden==0 & dziewiec==0) 
			{
				if (cztery==0 & osiem==0) 
				{
					full=3; while(full==3 || full==2 || full==5 || full==6 || full==4 || full==8 || full==7){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;
				}

				if (cztery==0 & osiem!=0) 
				{
					wybrana(1);return;
				}
				if (osiem==0 & cztery!=0) 
				{
					wybrana(9);return;
				}
				if (cztery==1 & osiem==1)
				{
					wybrana(3);return;
				}
			}

			if (jeden==0 & dziewiec!=0) 
			{
				if (cztery==0) {wybrana(1);}else{wybrana(3);}return;
			}
			if (dziewiec==0 & jeden!=0) 
			{
				if (osiem==0) {wybrana(9);}else{wybrana(3);}return;
			}
			return;
		}

		if (dziewiec==2) 
		{
			if (trzy==0 & siedem==0) 
			{
				if (szesc==0 & osiem==0) 
				{
					full=9; while(full==1 || full==2 || full==5 || full==6 || full==4 || full==8 || full==9){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;
				}

				if (szesc==0 & osiem!=0) 
				{
					wybrana(3);return;
				}
				if (osiem==0 & szesc!=0) 
				{
					wybrana(7);return;
				}
				if (szesc==1 & osiem==1)
				{
					wybrana(1);return;
				}

			}

			if (trzy==0 & siedem!=0) 
			{
				if (szesc==0) {wybrana(3);}else{wybrana(1);}return;
			}
			if (siedem==0 & trzy!=0) 
			{
				if (osiem==0) {wybrana(7);}else{wybrana(1);}return;
			}
			return;
		}
	}

	if (dwa==2 || cztery==2 || szesc==2 || osiem==2) 
	{
		if (dwa==2) 
		{
			if (jeden==1 & trzy==1) {wybrana(5); return;}
			if (jeden==1 & trzy!=1 || jeden!=1 & trzy==1){full=2; while(full==1 || full==2 || full==5 || full==6 || full==4 || full==8 || full==3){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			if (jeden!=1 & trzy!=1) 
			{
				if (dziewiec==0 & siedem!=0) {wybrana(9);return;}
				if (siedem==0 & dziewiec!=0) {wybrana(7);return;}
				if (dziewiec==0 & siedem==0) {full=2; while(full==1 || full==2 || full==5 || full==6 || full==4 || full==8 || full==3){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
				
			}
		}
		if (cztery==2) 
		{
			if (jeden==1 & siedem==1) {wybrana(5); return;}
			if (jeden==1 & siedem!=1 || jeden!=1 & siedem==1){full=2; while(full==1 || full==2 || full==5 || full==6 || full==4 || full==8 || full==7){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			if (jeden!=1 & siedem!=1) 
			{
				if (trzy==0 & dziewiec!=0) {wybrana(3);return;}
				if (dziewiec==0 & trzy!=0) {wybrana(9);return;}
				if (trzy==0 & dziewiec==0) {full=2; while(full==7 || full==2 || full==5 || full==6 || full==4 || full==8 || full==1){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			}
		}
		if (szesc==2) 
		{
			if (dziewiec==1 & trzy==1) {wybrana(5); return;}
			if (dziewiec==1 & trzy!=1 || dziewiec!=1 & trzy==1) {full=2; while(full==9 || full==2 || full==5 || full==6 || full==4 || full==8 || full==3){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			if (dziewiec!=1 & trzy!=1) 
			{
				if (jeden==0 & siedem!=0) {wybrana(1);return;}
				if (siedem==0 & jeden!=0) {wybrana(7);return;}
				if (jeden==0 & siedem==0) {full=2; while(full==3 || full==2 || full==5 || full==6 || full==4 || full==8 || full==9){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			}
		}
		if (osiem==2) 
		{
			if (siedem==1 & dziewiec==1) {wybrana(5); return;}
			if (dziewiec==1 & siedem!=1 || dziewiec!=1 & siedem==1){full=2; while(full==7 || full==2 || full==5 || full==6 || full==4 || full==8 || full==9){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			if (dziewiec==0 & siedem==0) 
			{
				if (jeden==0 & trzy!=0) {wybrana(1);return;}
				if (trzy==0 & jeden!=0) {wybrana(3);return;}
				if (jeden==0 & trzy==0) {full=2; while( full==2 || full==5 || full==6 || full==4 || full==8 ){full=Math.floor((Math.random() * 9) + 1);};wybrana(full);return;}
			}
		}
	}
}
}


function runda3() 
{
	finish();
	if (wygranko==0)
	{
		obrona2();
	}

	if (end==2) 
	{
		atak2();
	}
	wygranko=0;
}

function runda4()
{
	check();
		if (wygranko==0)
	{
		finish();
	}
	if (wygranko==0)
	{
		obrona2();
	}
	if (wygranko==0)
	{
		atak3();
	}
}

function runda5()
{
	setTimeout(remis, 100);
}

function remis()
{
	document.getElementById("remis").style.visibility = "visible"; 
}

function win() 
{
	linie();
	setTimeout(xd, 1000);
	end=10;
}

function xd()
{
	document.getElementById("przegrana").style.visibility = "visible"; 
}

function fail() 
{
	linie();
	setTimeout(xd2, 1000);
	end=10;
}

function xd2()
{
	document.getElementById("wygrana").style.visibility = "visible"; 
}

function linie()
{
	if (jeden==1 & dwa==1 & trzy==1) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73"; }
	if (cztery==1 & piec==1 & szesc==1) {document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73"; }
	if (siedem==1 & osiem==1 & dziewiec==1) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73"; }
	if (jeden==1 & cztery==1 & siedem==1) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("seven").style.backgroundColor = "#264d73"; }
	if (dwa==1 & piec==1 & osiem==1) {document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73";}
	if (trzy==1 & szesc==1 & dziewiec==1) {document.getElementById("three").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73"; }
	if (jeden==1 & piec==1 & dziewiec==1) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73"; }
	if (siedem==1 & piec==1 & trzy==1) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73"; }

	if (jeden==2 & dwa==2 & trzy==2) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73"; }
	if (cztery==2 & piec==2 & szesc==2) {document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73"; }
	if (siedem==2 & osiem==2 & dziewiec==2) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73"; }
	if (jeden==2 & cztery==2 & siedem==2) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("seven").style.backgroundColor = "#264d73"; }
	if (dwa==2 & piec==2 & osiem==2) {document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73";}
	if (trzy==2 & szesc==2 & dziewiec==2) {document.getElementById("three").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73"; }
	if (jeden==2 & piec==2 & dziewiec==2) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73"; }
	if (siedem==2 & piec==2 & trzy==2) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73"; }
}


function finish()
{
	if (jeden==2 & trzy==2 & wygranko==0) {if (dwa==0) {wybrana(2);wygranko=1;win();}}
	if (cztery==2 & szesc==2 & wygranko==0) {if (piec==0) {wybrana(5);wygranko=1;win();}}
	if (siedem==2 & dziewiec==2 & wygranko==0) {if (osiem==0) {wybrana(8);wygranko=1;win();}}
	if (jeden==2 & siedem==2 & wygranko==0) {if (cztery==0) {wybrana(4);wygranko=1;win();}}
	if (dwa==2 & osiem==2 & wygranko==0) {if (piec==0) {wybrana(5);wygranko=1;win();}}
	if (trzy==2 & dziewiec==2 & wygranko==0) {if (szesc==0) {wybrana(6);wygranko=1;win();}}
	if (jeden==2 & dziewiec==2 & wygranko==0) {if (piec==0) {wybrana(5);wygranko=1;win();}}
	if (siedem==2 & trzy==2 & wygranko==0) {if (piec==0) {wybrana(5);wygranko=1;win();}}
	if (piec==2 & jeden==2 & wygranko==0) {if (dziewiec==0) {wybrana(9);wygranko=1;win();}}
	if (piec==2 & dwa==2 & wygranko==0) {if (osiem==0) {wybrana(8);wygranko=1;win();}}
	if (piec==2 & trzy==2 & wygranko==0) {if (siedem==0) {wybrana(7);wygranko=1;win();}}
	if (piec==2 & szesc==2 & wygranko==0) {if (cztery==0) {wybrana(4);wygranko=1;win();}}
	if (piec==2 & dziewiec==2 & wygranko==0) {if (jeden==0) {wybrana(1);wygranko=1;win();}}
	if (piec==2 & osiem==2 & wygranko==0) {if (dwa==0) {wybrana(2);wygranko=1;win();}}
	if (piec==2 & siedem==2 & wygranko==0) {if (trzy==0) {wybrana(3);wygranko=1;win();}}
	if (piec==2 & cztery==2 & wygranko==0) {if (szesc==0) {wybrana(6);wygranko=1;win();}}
	if (cztery==2 & jeden==2 & wygranko==0) {if (siedem==0) {wybrana(7);wygranko=1;win();}}
	if (piec==2 & dwa==2 & wygranko==0) {if (osiem==0) {wybrana(8);wygranko=1;win();}}
	if (trzy==2 & szesc==2 & wygranko==0) {if (dziewiec==0) {wybrana(9);wygranko=1;win();}}
	if (cztery==2 & siedem==2 & wygranko==0) {if (jeden==0) {wybrana(1);wygranko=1;win();}}
	if (piec==2 & osiem==2 & wygranko==0) {if (dwa==0) {wybrana(2);wygranko=1;win();}}
	if (szesc==2 & dziewiec==2 & wygranko==0) {if (trzy==0) {wybrana(3);wygranko=1;win();}}
	if (dwa==2 & trzy==2 & wygranko==0) {if (jeden==0) {wybrana(1);wygranko=1;win();}}
	if (piec==2 & szesc==2 & wygranko==0) {if (cztery==0) {wybrana(4);wygranko=1;win();}}
	if (osiem==2 & dziewiec==2 & wygranko==0) {if (siedem==0) {wybrana(7);wygranko=1;win();}}
	if (siedem==2 & osiem==2 & wygranko==0) {if (dziewiec==0) {wybrana(9);wygranko=1;win();}}
	if (piec==2 & cztery==2 & wygranko==0) {if (szesc==0) {wybrana(6);wygranko=1;win();}}
	if (dwa==2 & jeden==2 & wygranko==0) {if (trzy==0) {wybrana(3);wygranko=1;win();}}
}

function check()
{
	if (jeden==1 & dwa==1 & trzy==1) {wygranko=1; fail();}
	if (cztery==1 & piec==1 & szesc==1) {wygranko=1; fail();}
	if (siedem==1 & osiem==1 & dziewiec==1) {wygranko=1; fail();}
	if (jeden==1 & cztery==1 & siedem==1) {wygranko=1; fail();}
	if (dwa==1 & piec==1 & osiem==1) {wygranko=1; fail();}
	if (trzy==1 & szesc==1 & dziewiec==1) {wygranko=1; fail();}
	if (jeden==1 & piec==1 & dziewiec==1) {wygranko=1; fail();}
	if (siedem==1 & piec==1 & trzy==1) {wygranko=1; fail();}
}


function obrona2()
{
	if (jeden==1 & trzy==1) {if (dwa!=2) {wygranko=1;wybrana(2);return;}}
	if (cztery==1 & szesc==1) {if (piec!=2) {wygranko=1;wybrana(5);return;}}
	if (siedem==1 & dziewiec==1) {if (osiem!=2) {wygranko=1;wybrana(8);return;}}
	if (jeden==1 & siedem==1) {if (cztery!=2) {wygranko=1;wybrana(4);return;}}
	if (dwa==1 & osiem==1) {if (piec!=2) {wygranko=1;wybrana(5);return;}}
	if (trzy==1 & dziewiec==1) {if (szesc!=2) {wygranko=1;wybrana(6);return;}}
	if (jeden==1 & dziewiec==1) {if (piec!=2) {wygranko=1;wybrana(5);return;}}
	if (siedem==1 & trzy==1) {if (piec!=2) {wygranko=1;wybrana(5);return;}}
	if (piec==1 & jeden==1) {if (dziewiec!=2) {wygranko=1;wybrana(9);return;}}
	if (piec==1 & dwa==1) {if (osiem!=2) {wygranko=1;wybrana(8);return;}}
	if (piec==1 & trzy==1) {if (siedem!=2) {wygranko=1;wybrana(7);return;}}
	if (piec==1 & szesc==1) {if (cztery!=2) {wygranko=1;wybrana(4);return;}}
	if (piec==1 & dziewiec==1) {if (jeden!=2) {wygranko=1;wybrana(1);return;}}
	if (piec==1 & osiem==1) {if (dwa!=2) {wygranko=1;wybrana(2);return;}}
	if (piec==1 & siedem==1) {if (trzy!=2) {wygranko=1;wybrana(3);return;}}
	if (piec==1 & cztery==1) {if (szesc!=2) {wygranko=1;wybrana(6);return;}}
	if (cztery==1 & jeden==1) {if (siedem!=2) {wygranko=1;wybrana(7);return;}}
	if (piec==1 & dwa==1) {if (osiem!=2) {wygranko=1;wybrana(8);return;}}
	if (trzy==1 & szesc==1) {if (dziewiec!=2) {wygranko=1;wybrana(9);return;}}
	if (cztery==1 & siedem==1) {if (jeden!=2) {wygranko=1;wybrana(1);return;}}
	if (piec==1 & osiem==1) {if (dwa!=2) {wygranko=1;wybrana(2);return;}}
	if (szesc==1 & dziewiec==1) {if (trzy!=2) {wygranko=1;wybrana(3);return;}}
	if (dwa==1 & trzy==1) {if (jeden!=2) {wygranko=1;wybrana(1);return;}}
	if (piec==1 & szesc==1) {if (cztery!=2) {wygranko=1;wybrana(4);return;}}
	if (osiem==1 & dziewiec==1) {if (siedem!=2) {wygranko=1;wybrana(7);return;}}
	if (siedem==1 & osiem==1) {if (dziewiec!=2) {wygranko=1;wybrana(9);return;}}
	if (piec==1 & cztery==1) {if (szesc!=2) {wygranko=1;wybrana(6);return;}}
	if (dwa==1 & jeden==1) {if (trzy!=2) {wygranko=1;wybrana(3);return;}}
	}

function atak2()
{
	if(piec==0){wybrana(5);}
	if(jeden==0 || trzy==0 || siedem==0 || dziewiec==0)
	{
		
		if (jeden==0 & end==2) {wybrana(1);return;}
		if (trzy==0 & end==2) {wybrana(3);return;}
		if (siedem==0 & end==2) {wybrana(7);return;}
		if (dziewiec==0 & end==2) {wybrana(9);return;}
	}
	if(dwa==0 || cztery==0 || szesc==0 || osiem==0)
	{
	
		if (dwa==0 & end==2) {wybrana(2);return;}
		if (cztery==0 & end==2) {wybrana(4);return;}
		if (szesc==0 & end==2) {wybrana(6);return;}
		if (osiem==0 & end==2) {wybrana(8);return;}
	}
}

function atak3()
{
	var control=0;
	if (jeden==0 & control==0) {wybrana(1);control=1;}
	if (dwa==0 & control==0) {wybrana(2);control=1;}
	if (trzy==0 & control==0) {wybrana(3);control=1;}
	if (cztery==0 & control==0) {wybrana(4);control=1;}
	if (piec==0 & control==0) {wybrana(5);control=1;}
	if (szesc==0 & control==0) {wybrana(6);control=1;}
	if (siedem==0 & control==0) {wybrana(7);control=1;}
	if (osiem==0 & control==0) {wybrana(8);control=1;}
	if (dziewiec==0 & control==0) {wybrana(9);control=1;}

}


function wybrana(x) 
{
	switch(x)
	{
		case 1 : document.getElementById('one').innerHTML = '<img src="circle.png" width="100px">'; jeden=2; end++; break;
		case 2 : document.getElementById('two').innerHTML = '<img src="circle.png" width="100px">'; dwa=2;end++; break;
		case 3 : document.getElementById('three').innerHTML = '<img src="circle.png" width="100px">'; trzy=2;end++; break;
		case 4 : document.getElementById('four').innerHTML = '<img src="circle.png" width="100px">'; cztery=2;end++; break;
		case 5 : document.getElementById('five').innerHTML = '<img src="circle.png" width="100px">'; piec=2;end++; break;
		case 6 : document.getElementById('six').innerHTML = '<img src="circle.png" width="100px">'; szesc=2;end++; break;
		case 7 : document.getElementById('seven').innerHTML = '<img src="circle.png" width="100px">'; siedem=2;end++; break;
		case 8 : document.getElementById('eight').innerHTML = '<img src="circle.png" width="100px">'; osiem=2;end++; break;
		case 9 : document.getElementById('nine').innerHTML = '<img src="circle.png" width="100px">'; dziewiec=2;end++; break;
	}
}

function brain()
{
	if (ruch==1) 
	{
		runda1();
	}

	if (ruch==2) 
	{
		runda2();
	}

	if (ruch==3) 
	{
		runda3();
	}

	if (ruch==4) 
	{
		runda4();
	}

	if (ruch==5) 
	{
		runda5();
	}
}


function info() 
{
	document.getElementById("info").innerHTML = 'Twój ruch pierwszy!';
}