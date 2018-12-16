
var jeden=0;
var dwa=0;
var trzy=0;
var cztery=0;
var piec=0;
var szesc=0;
var siedem=0;
var osiem=0;
var dziewiec=0;
var block=0;
var gracz1 = prompt('Nazwa Gracza 1:');
var gracz2 = prompt('Nazwa Gracza 2:');
var ruch =1;
var gra =1;
var winner = 0;

function gracze()
{
	if (gracz1!="") {document.getElementById("name1").innerHTML = gracz1; }else{document.getElementById("name1").innerHTML = "Gracz 1";}
	
	if (gracz2!="") {document.getElementById("name2").innerHTML = gracz2; }else{document.getElementById("name2").innerHTML = "Gracz 2";}
	ikona(); 
	kto();
}

function kto()
{
	if (gra%2!=0) 
	{
		if (ruch==1 || ruch==3 || ruch==5 || ruch==7 || ruch==9) 
		{
			if (gracz1=="") {document.getElementById("info").innerHTML = 'Ruch gracza 1'}
			if (gracz1!="") {document.getElementById("info").innerHTML = 'Ruch gracza '+gracz1}
		}

		if (ruch==2 || ruch==4 || ruch==6 || ruch==8 || ruch==10) 
		{
			if (gracz2=="") {document.getElementById("info").innerHTML = 'Ruch gracza 2'}
			if (gracz2!="") {document.getElementById("info").innerHTML = 'Ruch gracza '+gracz2}
		}

	}

	if (gra%2==0) 
	{
		if (ruch==1 || ruch==3 || ruch==5 || ruch==7 || ruch==9) 
		{
			if (gracz2=="") {document.getElementById("info").innerHTML = 'Ruch gracza 2'}
			if (gracz2!="") {document.getElementById("info").innerHTML = 'Ruch gracza '+gracz2}
		}

		if (ruch==2 || ruch==4 || ruch==6 || ruch==8 || ruch==10) 
		{
			if (gracz1=="") {document.getElementById("info").innerHTML = 'Ruch gracza 1'}
			if (gracz1!="") {document.getElementById("info").innerHTML = 'Ruch gracza '+gracz1}
		}
	}
}

function touch(x) 
{
	if (block==0) {
	document.getElementById("info").innerHTML = '';
	if (gra%2!=0) {
	if (ruch==1 || ruch==3 || ruch==5 || ruch==7 || ruch==9) 
	{
			switch(x)
	{
		case 1 : if (jeden==0) {document.getElementById("one").innerHTML = '<img src="cross.png" width="100px">'; ruch++; jeden=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 2 : if (dwa==0) {document.getElementById("two").innerHTML = '<img src="cross.png" width="100px">'; ruch++; dwa=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 3 : if (trzy==0) {document.getElementById("three").innerHTML = '<img src="cross.png" width="100px">'; ruch++; trzy=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 4 : if (cztery==0) {document.getElementById("four").innerHTML = '<img src="cross.png" width="100px">'; ruch++; cztery=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 5 : if (piec==0) {document.getElementById("five").innerHTML = '<img src="cross.png" width="100px">'; ruch++; piec=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 6 : if (szesc==0) {document.getElementById("six").innerHTML = '<img src="cross.png" width="100px">'; ruch++; szesc=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 7 : if (siedem==0) {document.getElementById("seven").innerHTML = '<img src="cross.png" width="100px">'; ruch++; siedem=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 8 : if (osiem==0) {document.getElementById("eight").innerHTML = '<img src="cross.png" width="100px">'; ruch++; osiem=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 9 : if (dziewiec==0) {document.getElementById("nine").innerHTML = '<img src="cross.png" width="100px">'; ruch++; dziewiec=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
	}
	}

	else if (ruch==2 || ruch==4 || ruch==6 || ruch==8 || ruch==10) 
	{
			switch(x)
	{
		case 1 : if (jeden==0) {document.getElementById("one").innerHTML = '<img src="circle.png" width="100px">'; ruch++; jeden=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 2 : if (dwa==0) {document.getElementById("two").innerHTML = '<img src="circle.png" width="100px">'; ruch++; dwa=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 3 : if (trzy==0) {document.getElementById("three").innerHTML = '<img src="circle.png" width="100px">'; ruch++; trzy=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 4 : if (cztery==0) {document.getElementById("four").innerHTML = '<img src="circle.png" width="100px">'; ruch++; cztery=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 5 : if (piec==0) {document.getElementById("five").innerHTML = '<img src="circle.png" width="100px">'; ruch++; piec=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 6 : if (szesc==0) {document.getElementById("six").innerHTML = '<img src="circle.png" width="100px">'; ruch++; szesc=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 7 : if (siedem==0) {document.getElementById("seven").innerHTML = '<img src="circle.png" width="100px">'; ruch++; siedem=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 8 : if (osiem==0) {document.getElementById("eight").innerHTML = '<img src="circle.png" width="100px">'; ruch++; osiem=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 9 : if (dziewiec==0) {document.getElementById("nine").innerHTML = '<img src="circle.png" width="100px">'; ruch++; dziewiec=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
	}
	}
	}

	if (gra%2==0) {
	if (ruch==2 || ruch==4 || ruch==6 || ruch==8 || ruch==10) 
	{
			switch(x)
	{
		case 1 : if (jeden==0) {document.getElementById("one").innerHTML = '<img src="cross.png" width="100px">'; ruch++; jeden=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 2 : if (dwa==0) {document.getElementById("two").innerHTML = '<img src="cross.png" width="100px">'; ruch++; dwa=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 3 : if (trzy==0) {document.getElementById("three").innerHTML = '<img src="cross.png" width="100px">'; ruch++; trzy=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 4 : if (cztery==0) {document.getElementById("four").innerHTML = '<img src="cross.png" width="100px">'; ruch++; cztery=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 5 : if (piec==0) {document.getElementById("five").innerHTML = '<img src="cross.png" width="100px">'; ruch++; piec=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 6 : if (szesc==0) {document.getElementById("six").innerHTML = '<img src="cross.png" width="100px">'; ruch++; szesc=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 7 : if (siedem==0) {document.getElementById("seven").innerHTML = '<img src="cross.png" width="100px">'; ruch++; siedem=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 8 : if (osiem==0) {document.getElementById("eight").innerHTML = '<img src="cross.png" width="100px">'; ruch++; osiem=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 9 : if (dziewiec==0) {document.getElementById("nine").innerHTML = '<img src="cross.png" width="100px">'; ruch++; dziewiec=1; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
	}
	}

	else if (ruch==1 || ruch==3 || ruch==5 || ruch==7 || ruch==9) 
	{
			switch(x)
	{
		case 1 : if (jeden==0) {document.getElementById("one").innerHTML = '<img src="circle.png" width="100px">'; ruch++; jeden=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 2 : if (dwa==0) {document.getElementById("two").innerHTML = '<img src="circle.png" width="100px">'; ruch++; dwa=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 3 : if (trzy==0) {document.getElementById("three").innerHTML = '<img src="circle.png" width="100px">'; ruch++; trzy=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 4 : if (cztery==0) {document.getElementById("four").innerHTML = '<img src="circle.png" width="100px">'; ruch++; cztery=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 5 : if (piec==0) {document.getElementById("five").innerHTML = '<img src="circle.png" width="100px">'; ruch++; piec=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 6 : if (szesc==0) {document.getElementById("six").innerHTML = '<img src="circle.png" width="100px">'; ruch++; szesc=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 7 : if (siedem==0) {document.getElementById("seven").innerHTML = '<img src="circle.png" width="100px">'; ruch++; siedem=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 8 : if (osiem==0) {document.getElementById("eight").innerHTML = '<img src="circle.png" width="100px">'; ruch++; osiem=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
		case 9 : if (dziewiec==0) {document.getElementById("nine").innerHTML = '<img src="circle.png" width="100px">'; ruch++; dziewiec=2; brain();}else{document.getElementById("info").innerHTML = 'Niestety to pole jest zajęte'} break;
	}
	}
	}

	
}
	ikona();
}

function brain()
{
	var r=0;
	if (jeden==1 & dwa==1 & trzy==1) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (cztery==1 & piec==1 & szesc==1) {document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (siedem==1 & osiem==1 & dziewiec==1) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (jeden==1 & cztery==1 & siedem==1) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("seven").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (dwa==1 & piec==1 & osiem==1) {document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (trzy==1 & szesc==1 & dziewiec==1) {document.getElementById("three").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (jeden==1 & piec==1 & dziewiec==1) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73";r=1; wygranko(1);}
	if (siedem==1 & piec==1 & trzy==1) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73";r=1; wygranko(1);}

	if (jeden==2 & dwa==2 & trzy==2) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (cztery==2 & piec==2 & szesc==2) {document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (siedem==2 & osiem==2 & dziewiec==2) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (jeden==2 & cztery==2 & siedem==2) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("four").style.backgroundColor = "#264d73"; document.getElementById("seven").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (dwa==2 & piec==2 & osiem==2) {document.getElementById("two").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("eight").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (trzy==2 & szesc==2 & dziewiec==2) {document.getElementById("three").style.backgroundColor = "#264d73"; document.getElementById("six").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (jeden==2 & piec==2 & dziewiec==2) {document.getElementById("one").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("nine").style.backgroundColor = "#264d73";r=1; wygranko(2);}
	if (siedem==2 & piec==2 & trzy==2) {document.getElementById("seven").style.backgroundColor = "#264d73"; document.getElementById("five").style.backgroundColor = "#264d73"; document.getElementById("three").style.backgroundColor = "#264d73";r=1; wygranko(2);}

	if (r==0 & ruch==10)
	{
		document.getElementById("remis").style.visibility = "visible";
	}

	if (r==0 & ruch!=10) {kto();}
}

function wygranko(x) 
{
	block=1;
	if (x==1) {setTimeout(wygrany1, 1000);}else{setTimeout(wygrany2, 1000);}
	winner =1;
}

function wygrany1()
{	
	if (gracz1!="") {document.getElementById("kto").innerHTML = 'Wygrał/a '+gracz1; }else{document.getElementById("kto").innerHTML = 'Wygrał Gracz 1';}
	document.getElementById("wygrana").style.visibility = "visible"; 
}

function wygrany2()
{
	if (gracz1!="") {document.getElementById("kto").innerHTML = 'Wygrał/a '+gracz2; }else{document.getElementById("kto").innerHTML = 'Wygrał Gracz 2';}
	document.getElementById("wygrana").style.visibility = "visible"; 
}

function sprzataczka()
{
jeden=0;
 dwa=0;
trzy=0;
cztery=0;
piec=0;
 szesc=0;
 siedem=0;
 osiem=0;
 dziewiec=0;
 block=0;
 ruch =1;
 gra++;
 winner =0;
document.getElementById("one").innerHTML ="" ;
document.getElementById("two").innerHTML = "";
document.getElementById("three").innerHTML = "";
document.getElementById("four").innerHTML = "";
document.getElementById("five").innerHTML = "";
document.getElementById("six").innerHTML = "";
document.getElementById("seven").innerHTML = "";
document.getElementById("eight").innerHTML = "";
document.getElementById("nine").innerHTML ="" ;
document.getElementById("one").style.backgroundColor = "white";
document.getElementById("two").style.backgroundColor = "white";
document.getElementById("three").style.backgroundColor = "white";
document.getElementById("four").style.backgroundColor = "white";
document.getElementById("five").style.backgroundColor = "white";
document.getElementById("six").style.backgroundColor = "white";
document.getElementById("seven").style.backgroundColor = "white";
document.getElementById("eight").style.backgroundColor = "white";
document.getElementById("nine").style.backgroundColor = "white";
	document.getElementById("wygrana").style.visibility = "hidden";
	document.getElementById("remis").style.visibility = "hidden";
	ikona();
	kto();
}

function ikona()
{
	if (gra%2!=0 & winner==0) {
	if (ruch==2 || ruch==4 || ruch==6 || ruch==8) {document.getElementById("man2").innerHTML = '<img src="man2.png" width="70%">'; document.getElementById("man1").innerHTML = '<img src="man.png" width="70%">'; }
	if (ruch==1 || ruch==3 || ruch==5 || ruch==7 || ruch==9) {document.getElementById("man2").innerHTML = '<img src="man.png" width="70%">'; document.getElementById("man1").innerHTML = '<img src="man2.png" width="70%">'; }
	}

	if (gra%2==0 & winner==0) {
	if (ruch==1 || ruch==3 || ruch==5 || ruch==7 || ruch==9) {document.getElementById("man2").innerHTML = '<img src="man2.png" width="70%">'; document.getElementById("man1").innerHTML = '<img src="man.png" width="70%">'; }
	if (ruch==2 || ruch==4 || ruch==6 || ruch==8) {document.getElementById("man2").innerHTML = '<img src="man.png" width="70%">'; document.getElementById("man1").innerHTML = '<img src="man2.png" width="70%">'; }
	}
}

function skalowanie()
{
	var w = window.innerWidth;
	if (w < 700) 
{
	document.getElementById("lewo").style.visibility = "hidden"; 
	document.getElementById("prawo").style.visibility = "hidden"; 
}
}