function Test(idIframe, idItem, idLink, location){
    var iframe = document.getElementById(idIframe);
    if(iframe){
        var ifrDoc = iframe.contentDocument;
        if(ifrDoc){
            var eInIfr = ifrDoc.querySelector(idItem);
            var txt = ifrDoc.querySelector(idLink);
            if(eInIfr){
                eInIfr.style.backgroundColor = "#344f6c";
                txt.style.color = "#fff";
                txt.style.fontWeight = "bold";
                eInIfr.style.cursor = "not-allowed";
                txt.style.pointerEvents = 'none';
                txt.style.cursor = "not-allowed";
            }else{
                console.log("Fail einfr");
            }
        }else{
            console.log("fail ifrDoc");
        }
    }else{
        console.log("fail iframe");
    }
    
}
function headerTitle(idIframe, idItem, title){
    var iframe = document.getElementById(idIframe);
    if(iframe){
        var ifrDoc = iframe.contentDocument;
        if(ifrDoc){
            var eInIfr = ifrDoc.querySelector(idItem);
            if(eInIfr){
                eInIfr.innerHTML = title;
            }else{
                console.log("Fail einfr");
            }
        }else{
            console.log("fail ifrDoc");
        }
    }else{
        console.log("fail iframe");
    }
}

function checkLogin(){
    var ifCourse = document.getElementById('fr-Course');
    var course_doc = ifCourse.contentDocument;
    var aTags_c = course_doc.getElementsByTagName('a');
    var ifTask = document.getElementById('fr-Tasks');
    var task_doc = ifTask.contentDocument;
    var aTags_t = task_doc.getElementsByTagName('a');

    var ifSVQZ = document.getElementById('fr-SVQZ');
    var SVQZ_doc = ifSVQZ.contentDocument;
    var aTags_s = SVQZ_doc.getElementsByTagName('a');
    var ifGames = document.getElementById('fr-Games');
    var games_doc = ifGames.contentDocument;
    var aTags_g = games_doc.getElementsByTagName('a');
    if(window.getComputedStyle(document.getElementById('p_email')).getPropertyValue('display') === 'none'){
        for (var i = 0; i < aTags_c.length; i++) {
            aTags_c[i].style.pointerEvents = 'none';
        }
        for (var i = 0; i < aTags_t.length; i++) {
            aTags_t[i].style.pointerEvents = 'none';
        }
        for (var i = 0; i < aTags_s.length; i++) {
            aTags_s[i].style.pointerEvents = 'none';
        }
        for (var i = 0; i < aTags_g.length; i++) {
            aTags_g[i].style.pointerEvents = 'none';
        }
    }
    else{
        for (var i = 0; i < aTags_c.length; i++) {
            aTags_c[i].style.pointerEvents = 'auto';
        }
        for (var i = 0; i < aTags_t.length; i++) {
            aTags_t[i].style.pointerEvents = 'auto';
        }
        for (var i = 0; i < aTags_s.length; i++) {
            aTags_s[i].style.pointerEvents = 'auto';
        }
        for (var i = 0; i < aTags_g.length; i++) {
            aTags_g[i].style.pointerEvents = 'auto';
        }
    }
}

function Test1(id, ida){
    event.preventDefault();
    document.getElementById('fr-Course').style.display = 'none';
    document.getElementById('fr-login').style.display = 'none';
    document.getElementById('fr-Tasks').style.display = 'none';
    document.getElementById('fr-SVQZ').style.display = 'none';
    document.getElementById('fr-QZ').style.display = 'none';
    document.getElementById('fr-Code').style.display = 'none';
    document.getElementById('fr-Games').style.display = 'none';
    var op = document.getElementById(id);
    op.style.display = 'block';
    document.body.addEventListener('onload', fr(id));
    document.getElementById(ida).style.backgroundColor = "#344f6c";
    document.getElementById(ida).style.color='white';
    document.getElementById(ida).style.fontWeight = "bold";
    document.getElementById(ida).style.pointerEvents = 'none';
}

function course_cl(){
    Test1('fr-Course', 'course_click');
    var ifCourse = document.getElementById('fr-Course');
    var course_doc = ifCourse.contentDocument;
    course_doc.getElementById('quest-list').style.display = 'grid';
    course_doc.getElementById('lesson').style.display = 'none';
    checkLogin();
    document.getElementById('tasks_click').style.backgroundColor = 'transparent';
    document.getElementById('tasks_click').style.color = '#949eab';
    document.getElementById('tasks_click').style.fontWeight = '400';
    document.getElementById('tasks_click').style.pointerEvents = 'auto';
    document.getElementById('svqz_click').style.backgroundColor = 'transparent';
    document.getElementById('svqz_click').style.color = '#949eab';
    document.getElementById('svqz_click').style.fontWeight = '400';
    document.getElementById('svqz_click').style.pointerEvents = 'auto';
    document.getElementById('games_click').style.backgroundColor = 'transparent';
    document.getElementById('games_click').style.color = '#949eab';
    document.getElementById('games_click').style.fontWeight = '400';
    document.getElementById('games_click').style.pointerEvents = 'auto';
    document.getElementById('title').innerHTML = "Java Course";
    var qz = course_doc.getElementById('link-qz');
    var code = course_doc.getElementById('link-code');
    qz.addEventListener('click', function(){
        Test1('fr-QZ', 'course_click');
    });
    code.addEventListener('click', function(){
        Test1('fr-Code', 'course_click');
    });
    var ifCode = document.getElementById('fr-Code');
    var code_doc = ifCode.contentDocument;
    var sl =0;
    code_doc.getElementById('checkSl').addEventListener('click', function (){
        sl++;
        if(sl==5){
            Test1('fr-Course', 'course_click');
        }
    });
}
function task_cl(){
    Test1('fr-Tasks', 'tasks_click');
    checkLogin();
    document.getElementById('course_click').style.backgroundColor = 'transparent';
    document.getElementById('course_click').style.color = '#949eab';
    document.getElementById('course_click').style.fontWeight = '400';
    document.getElementById('course_click').style.pointerEvents = 'auto';
    document.getElementById('svqz_click').style.backgroundColor = 'transparent';
    document.getElementById('svqz_click').style.color = '#949eab';
    document.getElementById('svqz_click').style.fontWeight = '400';
    document.getElementById('svqz_click').style.pointerEvents = 'auto';
    document.getElementById('games_click').style.backgroundColor = 'transparent';
    document.getElementById('games_click').style.color = '#949eab';
    document.getElementById('games_click').style.fontWeight = '400';
    document.getElementById('games_click').style.pointerEvents = 'auto';
    document.getElementById('title').innerHTML = "Tasks";
}
function svqz_cl(){
    Test1('fr-SVQZ', 'svqz_click');
    checkLogin();
    document.getElementById('tasks_click').style.backgroundColor = 'transparent';
    document.getElementById('tasks_click').style.color = '#949eab';
    document.getElementById('tasks_click').style.fontWeight = '400';
    document.getElementById('tasks_click').style.pointerEvents = 'auto';
    document.getElementById('course_click').style.backgroundColor = 'transparent';
    document.getElementById('course_click').style.color = '#949eab';
    document.getElementById('course_click').style.fontWeight = '400';
    document.getElementById('course_click').style.pointerEvents = 'auto';
    document.getElementById('games_click').style.backgroundColor = 'transparent';
    document.getElementById('games_click').style.color = '#949eab';
    document.getElementById('games_click').style.fontWeight = '400';
    document.getElementById('games_click').style.pointerEvents = 'auto';
    document.getElementById('title').innerHTML = "Survey & Quizzes";
}
function game_cl(){
    Test1('fr-Games', 'games_click');
    checkLogin();
    document.getElementById('tasks_click').style.backgroundColor = 'transparent';
    document.getElementById('tasks_click').style.color = '#949eab';
    document.getElementById('tasks_click').style.fontWeight = '400';
    document.getElementById('tasks_click').style.pointerEvents = 'auto';
    document.getElementById('svqz_click').style.backgroundColor = 'transparent';
    document.getElementById('svqz_click').style.color = '#949eab';
    document.getElementById('svqz_click').style.fontWeight = '400';
    document.getElementById('svqz_click').style.pointerEvents = 'auto';
    document.getElementById('course_click').style.backgroundColor = 'transparent';
    document.getElementById('course_click').style.color = '#949eab';
    document.getElementById('course_click').style.fontWeight = '400';
    document.getElementById('course_click').style.pointerEvents = 'auto';
    document.getElementById('title').innerHTML = "Games";
}
function fr(id){
    var windowHeight = window.innerHeight;
    var myDiv = document.getElementById(id);
    myDiv.style.height = windowHeight + 'px';
}
function btn_lg_su_CL(){
    document.getElementById('fr-Course').style.display = 'none';
    document.getElementById('fr-Tasks').style.display = 'none';
    document.getElementById('fr-SVQZ').style.display = 'none';
    document.getElementById('fr-Games').style.display = 'none';
    document.getElementById("fr-login").style.display="block";
    document.body.addEventListener('onload', fr("fr-login"));
    document.getElementById('title').innerHTML = "Login/Sign Up";
}
function lgCl(){
    document.getElementById('bf-su').style.visibility = 'hidden';
    document.getElementById('bf-lg').style.visibility = 'visible';
    document.getElementById("su").style.color = "#7a869a";
    document.getElementById("lg").style.color = "#172b53";
    document.getElementById("suForm").style.display = "none";
   document.getElementById("lgForm").style.display = "block";
 }
function suCl(){
   document.getElementById('bf-su').style.visibility = 'visible';
   document.getElementById('bf-lg').style.visibility = 'hidden';
   document.getElementById("su").style.color = "#172b53";
   document.getElementById("lg").style.color = "#7a869a";
   document.getElementById("suForm").style.display = "block";
   document.getElementById("lgForm").style.display = "none";
}

function Logout_CL(){
    document.getElementById('p_email').style.display = 'none';
    document.getElementById('btn_log_res').style.display = 'block';
    document.getElementById('btn_lout').style.display = 'none';
    document.getElementById('af_si').style.marginTop = 0;
    alert("Logout  Successfully!");
    checkLogin();
}
