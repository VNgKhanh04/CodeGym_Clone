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
function Test1(id, ida){
    event.preventDefault();
    document.getElementById('fr-Course').style.display = 'none';
    document.getElementById('fr-Tasks').style.display = 'none';
    document.getElementById('fr-SVQZ').style.display = 'none';
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
}
function task_cl(){
    Test1('fr-Tasks', 'tasks_click');
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
}
function svqz_cl(){
    Test1('fr-SVQZ', 'svqz_click');
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
}
function game_cl(){
    Test1('fr-Games', 'games_click');
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
}
function fr(id){
    var windowHeight = window.innerHeight;
    var myDiv = document.getElementById(id);
    myDiv.style.height = windowHeight + 'px';
}