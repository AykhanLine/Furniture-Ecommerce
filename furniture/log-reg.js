var logBtn1=document.querySelector("#log-reg .log-btn .log-btn1")
var resBtn=document.querySelector("#log-reg .log-btn .res-btn")
var optBox=document.querySelector("#log-reg .opt-box")
var regBox=document.querySelector("#log-reg .opt-box .reg-box")
var logBox=document.querySelector("#log-reg .opt-box .login-box")

    logBtn1.onclick=function(){
        // optBox.classList.add('opt-active')
        this.classList.add('logbtn-active')
        // soldan saga
        regBox.classList.remove('regbox-active')
        //soldan saga

        resBtn.classList.remove('resbtn-active')

        logBox.classList.remove('logbox-active')
    }

    resBtn.onclick=function(){
        logBtn1.classList.remove('logbtn-active')
        this.classList.add('resbtn-active')

        // sagdan sola
        regBox.classList.add('regbox-active')
        // sagdan sola

        logBox.classList.add('logbox-active')
    }