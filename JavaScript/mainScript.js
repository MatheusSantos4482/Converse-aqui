var textInput = document.getElementById("textMsg");
var textBox = document.getElementById("msgArea");
var sendBtn = document.getElementById("sendBtn");
var nameUser = document.getElementById("nameInput");
var imgUser = document.getElementById("imgInput")

var tagText;
var tagTextPopUp;
var tagTextHr;
var tagUser;
var tagImgUser;
var msg_;
var popUp_;
var idMsg = 0;

//Mensagem system
function send(){
    if(textInput.value != ""){
        idMsg++; 
        tagText = "msg" + idMsg.toString();
        tagTextPopUp = "popUp" + idMsg.toString();
        tagTextHr = "hr" + idMsg.toString();
        tagUser = "user" + idMsg.toString();
        tagImgUser = "imgUser" + idMsg.toString(); 

        textBox.innerHTML += 
        "<div class = 'mensagem-Container'>"+ 
            "<p class = 'msg-Name' id =" + tagUser + "></p>"+
            "<div class = 'msg-Img' id ="+ tagImgUser + ">"+"</div>"+
            "<div class = 'mensagem' id ="+ tagTextPopUp + ">" + 
                "<p id =" + tagText + " class = 'mensagem-msg'>" + "</p>" + 
                "<p id =" + tagTextHr +" class = 'mensagem-hr'>" + "</p>" +
            "</div>" +
        "</div>";

        document.getElementById(tagUser).innerText = nameUser.value;
        document.getElementById(tagImgUser).style.backgroundImage = "url("+imgUser.value+")";

        let data = new Date();
        var dataH = data.getHours();
        var dataMin = data.getMinutes();
        if(dataMin < 10){ document.getElementById(tagTextHr).innerHTML = dataH+":"+"0"+dataMin; }
        else{ document.getElementById(tagTextHr).innerHTML = dataH+":"+dataMin; }

        msg_ = document.getElementById(tagText);
        popUp_ = document.getElementById(tagTextPopUp);
        msg_.innerText = textInput.value;
        setTimeout(() => {
            popUp_.style.animation = "RemoveAnim";
        }, 1000)

        textBox.scrollTo({
            top: 1000*idMsg,
            behavior: "instant"
        });
    }
    textInput.value = "";
}
function inputFocus(){
    sendBtn.style.display = "block";
    popUp_.style.animation = "RemoveAnim";
}
function inputBlur(){
    if(textInput.value == ""){
        sendBtn.style.display = "none";
    }
}

function respond(){

}
//=================================================================================================================================

//Save perfil informations
function savePerfilMod(){
    for(let i = idMsg; i > 0; i--){
        document.getElementById("user" + i.toString()).innerText = nameUser.value;
        document.getElementById("imgUser" + i.toString()).style.backgroundImage = "url("+imgUser.value+")";
    }
}