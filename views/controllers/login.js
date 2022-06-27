var email;
var password;

$("#Signin").click(()=>{
    var data =  `emailname=${$('#txt_email').val()}&password=${$('#pwd_pass').val()}`;
    $.ajax({
        url:"http://localhost:5001/AuthenticationFirabase/login",
        method:"post",
        data: data,
        dataType: "json",
        success:(response)=>{
            if (response){
                let uid = response.uid;
                console.log('uid '+response.uid);
            }
        },error:(error)=>{
            console.log('HOLA');
            console.log(error);
        }   
    })
})