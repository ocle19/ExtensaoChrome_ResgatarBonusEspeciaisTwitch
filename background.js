console.log('Iniciando...')
setInterval(function(){ resgatar(); }, 5000)

var contador = 1
var iniciou = 0;

function resgatar () {

  if (iniciou == 0) {
    console.log('Iniciado!')
    iniciou++
    var r = document.createElement('div');
    r.className = "pegos";
    document.getElementsByClassName('sc-AxjAm GBpnX')[0].appendChild(r)
    document.getElementsByClassName('pegos')[0].innerHTML = "<br> <font color='orange'>Resgates: 0 </font>";
  }

  var botao = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 VGQNd')[0]
    
  if (botao != undefined) {
      botao.click()
      console.log('UP_'+contador)
      document.getElementsByClassName('pegos')[0].innerHTML = "<br> <font color='green'>Resgates: "+contador + " vezes :) </font> ";
      contador++
  }   
}