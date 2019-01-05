window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(1263,100)

   /*  console.log(456, document.body.clientWidth); */
    onload2();

};
window.onresize = function(){
    getRem(1263,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}
function onload2(){
    console.log(4569,$)
    var flag = true;
    $('#nb_nodeboard_close').click(function() {
        if( flag ){
            $('.nb-nodeboard-top').siblings().hide();
            $('#newBridge .nb-nodeboard-base .nb-nodeboard-contain-base .nb-nodeboard-close').css({
                'background':'transparent url(../lianzhijie/src/img/close.png) no-repeat' 
            })

            flag = false;
        } else {
            $('.nb-nodeboard-top').siblings().show();
            $('#nb_nodeboard_success').hide()
            $('#newBridge .nb-nodeboard-base .nb-nodeboard-contain-base .nb-nodeboard-close').css({
                'background':'transparent url(../lianzhijie/src/img/open.png) no-repeat' 
            })
            flag = true;
        }
    });
    
       
    var textareaVal=$('#nb-nodeboard-set-content-js')
    var phone=$('#nb_nodeboard_set_phone')
    
   
    /* console.log(489 ,textareaVal.val()) */
    //发送点击验证正则
 /*    $('#nb_nodeboard_send').click(function(){
          $('.texrVal').show()
        

      
            if(textareaVal.val()==''){
                if($('.texrVal').length>0){
                    console.log(123)
        
                }else{
              
                    $('.nb-nodeboard-content').append("<b style='color:red;' class='texrVal' id='texrVal'>留言内容不能为空</b>");
                    console.log('kong')
                    }
                    return;
            }else{
                $('.texrVal').hide()
            }
            checkPhone()
    }) */
    textareaVal.focus(function(){
         $('.texrVal').slideUp("slow");
    });

    phone.focus(function(){
         $('.texrVal').slideUp("slow");
    });
    function checkPhone(){ 
        var phoneVal = phone.val();
         if(!(/^1[34578]\d{9}$/.test(phoneVal))){ 
             $('#nb_nodeboard_phone').append("<b style='color:red;' class='phoneVal' id='phoneVal'>电话输入有误</b>")
            alert("手机号码有误，请重填");  
            return false; 
        } 
    }
  
 }