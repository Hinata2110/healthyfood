document.addEventListener('DOMContentLoaded',function(){

    var barsButton = document.querySelector('.button-bar');
    var dropDown = document.querySelector('.drop-down');
    var cover = document.querySelector('.cover');
    var cover1= document.querySelector('.cover1');
    var dn = document.getElementsByClassName('login');
    var dk = document.getElementsByClassName('register');
    var signUpBlock = document.getElementsByClassName('sign-up');
    var signInBlock = document.getElementsByClassName('sign-in');
    var linkDn = document.getElementsByClassName('sign-in-link');
    var linkDk = document.getElementsByClassName('sign-up-link');
    // click
    barsButton.addEventListener('click',function(e){
        e.preventDefault();
        dropDown.classList.toggle('show');
    })

    cover.addEventListener('click',function(e){
        e.preventDefault();
        dropDown.classList.remove('show');
    })

    var hiendk = function(){

        dk[0].addEventListener('click',function(){
            cover1.classList.add('appearance');
            signUpBlock[0].classList.add('appearance')
            this.classList.add('active');
        })
        return false;
    }
    
    var hiendn = function(){

        dn[0].addEventListener('click',function(){
            cover1.classList.add('appearance');
            signInBlock[0].classList.add('appearance');
            this.classList.add('active');
        })
        return false
    }

    var tabs = function(){
        
        linkDn[0].addEventListener('click',function(e){
            e.preventDefault();
            signUpBlock[0].classList.remove('appearance');
            signInBlock[0].classList.add('appearance');
            dk[0].classList.remove('active');
            dn[0].classList.add('active');
        })

        linkDk[0].addEventListener('click',function(e){
            e.preventDefault();
            signInBlock[0].classList.remove('appearance');
            signUpBlock[0].classList.add('appearance');
            dk[0].classList.add('active');
            dn[0].classList.remove('active');
        })
        return false;
    }

    var dktc = function(){

        var subutton = document.getElementsByClassName ('sign-up-button');
        var ctnLogin = document.getElementsByClassName('ctn-login');
        var success = document.querySelector('.sign-up-success');

        subutton[0].addEventListener('click',function(){
            success.classList.add('appearance');
            signUpBlock[0].classList.remove('appearance');
        })

        ctnLogin[0].addEventListener('click',function(){
            success.classList.remove('appearance');
            signInBlock[0].classList.add('appearance');
        })
        return false;
    }

    var exit = function(){

        var success = document.querySelector('.sign-up-success');
        var forgotPwBlock = document.getElementsByClassName('forgot-pw');
        var sentMailBlock = document.querySelector('.sent-mail');
        var newPassBlock = document.querySelector('.new-pass');
        var pwChangedBlock = document.querySelector('.pw-changed');

        cover1.addEventListener('click',function(){
            this.classList.remove('appearance');
            signUpBlock[0].classList.remove('appearance');
            dk[0].classList.remove('active');
            signInBlock[0].classList.remove('appearance');
            success.classList.remove('appearance');
            dn[0].classList.remove('active');
            forgotPwBlock[0].classList.remove('appearance')
            sentMailBlock.classList.remove('appearance');
            newPassBlock.classList.remove('appearance');
            pwChangedBlock.classList.remove('appearance')
        })
        return false;
    }

    var forgotPw = function(){

        var forgotPwBlock = document.getElementsByClassName('forgot-pw');
        var forgotPwLink = document.querySelector('a.forgot');
        
        forgotPwLink.addEventListener('click',function(){
            forgotPwBlock[0].classList.add('appearance');
            signInBlock[0].classList.remove('appearance');
        })
        return false;
    }
    
    var sentMail = function(){

        var send = document.querySelector('.send');
        var sentMailBlock = document.querySelector('.sent-mail');
        var forgotPwBlock = document.getElementsByClassName('forgot-pw');

        send.addEventListener('click',function(){
            sentMailBlock.classList.add('appearance');
            forgotPwBlock[0].classList.remove('appearance');
        })
        return false;
    }
    
    var newPass = function(){

        var confirm = document.querySelector('.confirm');
        var newPassBlock = document.querySelector('.new-pass');
        var sentMailBlock = document.querySelector('.sent-mail');

        confirm.addEventListener('click',function(){
            sentMailBlock.classList.remove('appearance');
            newPassBlock.classList.add('appearance');
        })
        return false;
    }

    var pwChanged = function(){

        var confirm1 = document.querySelector('.confirm1');
        var pwChangedBlock = document.querySelector('.pw-changed');
        var newPassBlock = document.querySelector('.new-pass');
        var ctnLogin1 = document.querySelector('.ctn-login1');

        confirm1.addEventListener('click',function(){
            pwChangedBlock.classList.add('appearance');
            newPassBlock.classList.remove('appearance');
        })
        ctnLogin1.addEventListener('click',function(){
            pwChangedBlock.classList.remove('appearance');
            signInBlock[0].classList.add('appearance')
        })
        return false;
    }

    var signInSuccess = function(){

        var SiSuccessBlock = document.querySelector('.sign-in-success');
        var SiButton = document.querySelector('.sign-in-button');

        SiButton.addEventListener('click',function(){

            signInBlock[0].classList.remove('appearance');
            cover1.classList.remove('appearance');
            SiSuccessBlock.classList.add('fade-out');
            dn[0].classList.remove('active');
            dk[0].classList.remove('active');

            setTimeout(function(){SiSuccessBlock.classList.remove('fade-out');},5000);
        });
        return false;
    }


    //Completed
    hiendk();
    hiendn();
    tabs();
    dktc();
    exit();
    forgotPw();
    sentMail();
    newPass();
    pwChanged();
    signInSuccess();

},false);