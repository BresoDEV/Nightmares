//document.write('<script src="funcoes.js"></script>');
//document.write('<script src="dialogo.js"></script>');
function verificarPosMouse(N_quarto, parede, x1, y1, x2, y2) {

    if (xMouse >= x1 && yMouse >= y1 && xMouse <= x2 && yMouse <= y2) {
        return true;
    }
    return false;
}

function MostrarMapa() {
    var nota = document.createElement('img');
    nota.src = 'imgs/mapa/'+quartoAtual+'.jpg';
    nota.style.left = '20%';
    nota.style.width = '60%';
    nota.style.height = '40%';
    nota.style.top = '10%';
    nota.style.position = 'fixed';
    nota.style.opacity = '0.9';

    
    document.body.append(nota);
   
    return nota;
    
}
var mapaaaaa;

function mapToggle()
{
    if(!mapaSendoExibido)
    { 
        mapaaaaa = MostrarMapa();
    mapaSendoExibido = true;
    }
    else
    {
        mapaaaaa.remove();
    mapaSendoExibido = false;
    }
}

document.addEventListener('keypress', (x) => {
	
		 
    if (x.key === 'm') {
        mapToggle();
             
    } 	 
    if (x.key === 'p') {
        if(!debugmenuBool)
            { 
            debugmenu.style.display = 'block';
            debugmenuBool = true;
            }
            else
            {
            debugmenu.style.display = 'none';
            debugmenuBool = false;
            }
             
    } 
    if (x.key === 'd') {
        fadeIN(()=>{
        if (lado == 4)
            lado = 1;
        else
            lado++;
            
            });
              
    }
    if (x.key === 'a') {
        fadeIN(()=>{
        if (lado == 1)
            lado = 4;
        else
            lado--;
            });
            
                 
    }

    if (x.key === 'w') 
    {
        andarFrente();
    } 
     
    RecarregarParedes();
    
});

function andarFrente()
{
    fadeIN(()=>{
        
        switch (quartoAtual) 
        {
            case 1:
                {
                    switch (lado) {
                        case 4: 
                        
                        //quartoAtual = 2; lado = 1';
                        quartoAtual = 2; lado = 1; 
                         
                        break;//sai da portaria
                    }
                }
                break;

            case 2:
                {
                    switch (lado) {
                        case 1: quartoAtual = 3; lado = 1;   break;//segue pra baixo
                        case 4: quartoAtual = 1; lado = 1;   break;//entra na portaria
                    }
                }
                break;

            case 3:
                {
                    switch (lado) {
                        case 3: quartoAtual = 2; lado = 4;   break;//volta
                        case 2: quartoAtual = 4; lado = 2;   break;//direcao ao banheiro
                        case 1: quartoAtual = 9; lado = 1;   break;//desce

                    }
                }
                break;

            //=------------------------------------------------
            case 4:
                {
                    switch (lado) {
                        case 1: quartoAtual = 5; lado = 1;   break;//entra banheiro
                        case 4: quartoAtual = 3; lado = 1;   break;//desce

                    }
                }
                break;
            //=------------------------------------------------
            case 5:
                {
                    switch (lado) {
                        case 1: quartoAtual = 6; lado = 2;   break;//entra banheiro
                        case 2: quartoAtual = 4; lado = 3;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 6:
                {
                    switch (lado) {
                        case 1: quartoAtual = 7; lado = 1;   break;//entra banheiro
                        case 4: quartoAtual = 5; lado = 3;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 7:
                {
                    switch (lado) {
                        case 3: quartoAtual = 6; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 8; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 8:
                {
                    switch (lado) {
                        case 3: quartoAtual = 7; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 8; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 9:
                {
                    switch (lado) {
                        case 3: quartoAtual = 3; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 10; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 10:
                {
                    switch (lado) {
                        case 3: quartoAtual = 9; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 11; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 11:
                {
                    switch (lado) {
                        case 3: quartoAtual = 10; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 12; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 12:
                {
                    switch (lado) {
                        case 3: quartoAtual = 11; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 15; lado = 1;   break;//sai banheiro
                        case 2: quartoAtual = 13; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 13:
                {
                    switch (lado) {
                        case 3: quartoAtual = 12; lado = 1;   break;//entra banheiro
                        case 1: quartoAtual = 14; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 14:
                {
                    switch (lado) {
                        case 4: quartoAtual = 13; lado = 3;   break;//entra banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 15:
                {
                    switch (lado) {
                        case 3: quartoAtual = 12; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 16; lado = 1;   break;//sai banheiro
                        case 2: msgEstatica('Melhor não ir nesse local, está muito escuro...'); break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 16:
                {
                    switch (lado) {
                        case 3: quartoAtual = 15; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 17; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 17:
                {
                    switch (lado) {
                        case 3: quartoAtual = 16; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 18; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 18:
                {
                    switch (lado) {
                        case 3: quartoAtual = 17; lado = 3;   break;//entra banheiro
                        case 4: quartoAtual = 19; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 44; lado = 3;   break;//sai banheiro
                        case 2: msgEstatica('Melhor não ir por aqui, não sei onde vai dar!', 3000); break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 19:
                {
                    switch (lado) {
                        case 3: quartoAtual = 18; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 20; lado = 1;   break;//sai banheiro

                    }
                }
                break;

            //=------------------------------------------------
            case 20:
                {
                    switch (lado) {
                        case 2: quartoAtual = 19; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 21; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 21:
                {
                    switch (lado) {
                        case 3: quartoAtual = 20; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 22; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 22:
                {
                    switch (lado) {
                        case 3: quartoAtual = 21; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 23; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 23:
                {
                    switch (lado) {
                        case 3: quartoAtual = 22; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 24; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 24:
                {
                    switch (lado) {
                        case 3: quartoAtual = 23; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 25; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 25:
                {
                    switch (lado) {
                        case 3: quartoAtual = 24; lado = 3;   break;//entra banheiro
                        case 1: quartoAtual = 28; lado = 1;   break;//sai banheiro
                        case 4: quartoAtual = 26; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 26:
                {
                    switch (lado) {
                        case 3: quartoAtual = 25; lado = 1;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 27; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 27:
                {
                    switch (lado) {
                        case 3: quartoAtual = 26; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        //case 1: quartoAtual = 27; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 28:
                {
                    switch (lado) {
                        case 3: quartoAtual = 25; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 29; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 29:
                {
                    switch (lado) {
                        case 3: quartoAtual = 28; lado = 3;   break;//entra banheiro
                        case 2: quartoAtual = 41; lado = 3;   break;//sai banheiro
                        case 1: quartoAtual = 30; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 30:
                {
                    switch (lado) {
                        case 3: quartoAtual = 29; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 31; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 31:
                {
                    switch (lado) {
                        case 3: quartoAtual = 30; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 32; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 32:
                {
                    switch (lado) {
                        case 3: quartoAtual = 31; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 33; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 33:
                {
                    switch (lado) {
                        case 3: quartoAtual = 32; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 34; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 34:
                {
                    //marca que fez a ronda
                    localStorage.setItem('fezRonda', '1');
                    switch (lado) {
                        case 3: quartoAtual = 33; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 35; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 35:
                {
                    switch (lado) {
                        case 3: quartoAtual = 34; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 36; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 36:
                {
                    switch (lado) {
                        case 3: quartoAtual = 35; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 37; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 37:
                {
                    switch (lado) {
                        case 3: quartoAtual = 36; lado = 3;   break;//entra banheiro
                        //case 1: quartoAtual = 26; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 38; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 38:
                {
                    switch (lado) {
                        case 3: quartoAtual = 37; lado = 3;   break;//entra banheiro
                        case 4: quartoAtual = 39; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 40; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 39:
                {
                    switch (lado) {
                        case 3: quartoAtual = 38; lado = 1;   break;//entra banheiro
                        //case 4: quartoAtual = 39; lado = 1;   break;//sai banheiro
                        case 1: msgEstatica('Melhor não ir por aqui, não tem luz nenhuma!', 3000); break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 40:
                {
                    switch (lado) {
                        case 3: quartoAtual = 38; lado = 3;   break;//entra banheiro
                        case 2: quartoAtual = 41; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 42; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 41:
                {
                    switch (lado) {
                        case 3: quartoAtual = 40; lado = 4;   break;//entra banheiro
                        //case 2: quartoAtual = 41; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 29; lado = 4;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 42:
                {
                    switch (lado) {
                        case 3: quartoAtual = 40; lado = 3;   break;//entra banheiro
                        // case 2: quartoAtual = 41; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 43; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 43:
                {
                    switch (lado) {
                        case 3: quartoAtual = 42; lado = 3;   break;//entra banheiro
                        // case 2: quartoAtual = 41; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 44; lado = 1;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            case 44:
                {
                    switch (lado) {
                        case 3: quartoAtual = 43; lado = 3;   break;//entra banheiro
                        // case 2: quartoAtual = 41; lado = 1;   break;//sai banheiro
                        case 1: quartoAtual = 18; lado = 3;   break;//sai banheiro

                    }
                }
                break;
            //=------------------------------------------------
            //=------------------------------------------------
            //=------------------------------------------------
            //=------------------------------------------------
            //=------------------------------------------------
            //=------------------------------------------------
            //=------------------------------------------------
            //=------------------------------------------------
        }

        });
}