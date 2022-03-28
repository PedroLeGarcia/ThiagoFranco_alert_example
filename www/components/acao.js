// This is Kane West... Edu tem medo e treme
window.onload = function (){
    document.querySelector("#alerta1").addEventListener("click", function(){
    function retorno(){

    }
    navigator.notification.alert("Tem medo e treme?", retorno, "MISTER M", "sim");
    });


document.querySelector("#alerta2").addEventListener("click", function(){
    function retorno(buttonIndex){
        if(buttonIndex == 1){
            navigator.app.exitApp();
    }else {
        return false;
        }
    }
        navigator.notification.confirm("Fechas com o comando vermelho?", retorno, "Fechar app", ["sim, sempre","não, eca"]);
    });
}