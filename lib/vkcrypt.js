var $, Aes, VKCrypt;
(function(){
  "use strict";
    
    const PASSWORD_NAME = 'vkcrypt-pass';
    
    VKCrypt = {};
    
    function getPassword(){
        var lPass = localStorage.getItem(PASSWORD_NAME);
        
        if(!lPass)
            VKCrypt.setPassword();
        
        return lPass;
    }
      
    VKCrypt.encrypt         = function(){
        debugger;
        var lMsgElement = $('.im_editable'),
            lMsg        = lMsg.textContent,
            lPass       = getPassword()(),
            lMsgCrypt   = Aes.Ctr.encrypt(lMsg, lPass, 256);
            
            lMsgElement.textContent = lMsgCrypt;
    };
    
     VKCrypt.encrypt        = function(){
         debugger;
        var lMsgElement = $('.im_editable'),
            lMsg        = lMsg.textContent,
            lPass       = getPassword(),
            lMsgCrypt   = Aes.Ctr.decrypt(lMsg, lPass, 256);
            
            lMsgElement.textContent = lMsgCrypt;
    };
    
    VKCrypt.setPassword     = function(){
        var lPass = prompt('Password: ');
        
        localStorage.setItem(PASSWORD_NAME, lPass);
    };
})();