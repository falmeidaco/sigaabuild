var sgb = {
    data: {
        db:{}
    },
    contents: {
        css:'body{padding-bottom:300px}#sgbuild{z-index:9999;width:630px;position:fixed;bottom:5px;left:50%;margin-left:-315px;box-shadow:0 0 10px #3f4c83;border-radius:5px}#sgbuild header{background-color:#404e82;padding:0.5em;text-align:center;border-radius:5px 5px 0 0;color:white}#sgbuild header a{color:white;text-decoration:underline}#sgbuild main{background-color:#eff3fa}#sgbuild main .sg-g{position:relative}#sgbuild main .sg-g .sg-r{display:block;width:100%;height:25px}#sgbuild main .sg-g .sg-r:nth-child(odd){background-color:white}#sgbuild main .sg-g .sg-r:after{content:"";display:block;clear:both}#sgbuild main .sg-g .sg-c{float:left;width:35px;height:25px;text-align:center;line-height:25px;font-size:9px;border-left:1px solid #c3d2ec;box-sizing:border-box}#sgbuild main .sg-g .sg-c:last-child{border-right:1px solid #c3d2ec}#sgbuild main .sg-g .sg-c:hover{background-color:#c3d2ec;cursor:pointer}#sgbuild main .sg-g .sg-c-w{text-transform:uppercase}#sgbuild main .sg-g .sg-i{position:absolute;background-image:linear-gradient(rgba(0,150,136,0.8), #046d63);color:white;width:70px;height:25px;text-align:center;line-height:25px;border-radius:20px;box-sizing:border-box;border:1px solid #02695f;z-index:9}#sgbuild main .sg-g .sg-i:hover{z-index:10}#sgbuild main .sg-g .sg-i a{display:block;color:white;text-decoration:none;position:relative}#sgbuild main .sg-g .sg-i a:hover:before{position:absolute;top:-32px;left:0;content:attr(title);background-color:rgba(0,0,0,0.7);font-size:9px;font-weight:100;border-radius:25px;width:300px}#sgbuild main .sg-g .sg-i a:hover:after{position:absolute;left:15px;top:-7px;width:0;height:0;background-color:transparent;content:"";border:5px solid rgba(0,0,0,0.7);border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent}#sgbuild main .sg-g .sg-i-c1{border-color:#F44336;background-image:linear-gradient(rgba(244,67,54,0.5), #f44336)}#sgbuild main .sg-g .sg-i-c2{border-color:#9C27B0;background-image:linear-gradient(rgba(156,39,176,0.5), #9c27b0)}#sgbuild main .sg-g .sg-i-c3{border-color:#4A148C;background-image:linear-gradient(rgba(74,20,140,0.5), #4a148c)}#sgbuild main .sg-g .sg-i-c4{border-color:#E91E63;background-image:linear-gradient(rgba(233,30,99,0.5), #e91e63)}#sgbuild main .sg-g .sg-i-c5{border-color:#3F51B5;background-image:linear-gradient(rgba(63,81,181,0.5), #3f51b5)}#sgbuild main .sg-g .sg-i-c6{border-color:#2196F3;background-image:linear-gradient(rgba(33,150,243,0.5), #2196f3)}#sgbuild main .sg-g .sg-i-c7{border-color:#E65100;background-image:linear-gradient(rgba(230,81,0,0.5), #e65100)}#sgbuild main .sg-g .sg-i-c8{border-color:#795548;background-image:linear-gradient(rgba(121,85,72,0.5), #795548)}#sgbuild main .sg-g .sg-i-c9{border-color:#43A047;background-image:linear-gradient(rgba(67,160,71,0.5), #43a047)}#sgbuild main .sg-g .sg-i-c10{border-color:#827717;background-image:linear-gradient(rgba(130,119,23,0.5), #827717)}#sgbuild main .sg-g .sg-6{left:35px}#sgbuild main .sg-g .sg-7{left:70px}#sgbuild main .sg-g .sg-8{left:105px}#sgbuild main .sg-g .sg-9{left:140px}#sgbuild main .sg-g .sg-10{left:175px}#sgbuild main .sg-g .sg-11{left:210px}#sgbuild main .sg-g .sg-12{left:245px}#sgbuild main .sg-g .sg-13{left:280px}#sgbuild main .sg-g .sg-14{left:315px}#sgbuild main .sg-g .sg-15{left:350px}#sgbuild main .sg-g .sg-16{left:385px}#sgbuild main .sg-g .sg-17{left:420px}#sgbuild main .sg-g .sg-18{left:455px}#sgbuild main .sg-g .sg-19{left:490px}#sgbuild main .sg-g .sg-20{left:525px}#sgbuild main .sg-g .sg-21{left:560px}#sgbuild main .sg-g .sg-22{left:595px}#sgbuild main .sg-g .sg-seg{top:0px}#sgbuild main .sg-g .sg-ter{top:25px}#sgbuild main .sg-g .sg-qua{top:50px}#sgbuild main .sg-g .sg-qui{top:75px}#sgbuild main .sg-g .sg-sex{top:100px}#sgbuild main .sg-g .sg-sab{top:125px}#sgbuild main .sg-g .sg-d{width:140px}#sgbuild main .sg-g .sg-b{margin-left:17.5px}#sgbuild main .sg-g .sg-m:after{content:"";display:block;width:4px;height:4px;background-color:#4CAF50;float:right;border-radius:4px;position:fixed;transform:translate(27px, -21px)}#sgbuild footer{background-color:#c3d2ec;border-radius:0 0 5px 5px}#sgbuild footer .sg-o{font-size:10px;background-color:white}#sgbuild footer .sg-o a.sg-o-i{text-align:left;background-color:#da9d3a;color:white;text-decoration:none;font-size:10px;display:block;padding:5px}#sgbuild footer .sg-o a.sg-o-i:nth-child(odd){background-color:#bd8e40}#sgbuild footer .sg-o a.sg-o-i:hover{background-color:#ecb75e}#sgbuild footer .sg-s{padding:0.5em;text-align:center}',
        html:'<div id="sgbuild"><header>GRADE SIGAA - Visualize as disiciplinas - <a href="https://github.com/falmeidaco" target="_blank">Criado por Felipe Almeida</a></header><main><div class="sg-g"><div class="sg-g-i"></div><div class="sg-r"><div class="sg-c sg-c-w">seg</div><div class="sg-c" data-pos="seg6">6h</div><div class="sg-c" data-pos="seg7">7h</div><div class="sg-c" data-pos="seg8">8h</div><div class="sg-c" data-pos="seg9">9h</div><div class="sg-c" data-pos="seg10">10h</div><div class="sg-c" data-pos="seg11">11h</div><div class="sg-c" data-pos="seg12">12h</div><div class="sg-c" data-pos="seg13">13h</div><div class="sg-c" data-pos="seg14">14h</div><div class="sg-c" data-pos="seg15">15h</div><div class="sg-c" data-pos="seg16">16h</div><div class="sg-c" data-pos="seg17">17h</div><div class="sg-c" data-pos="seg18">18h</div><div class="sg-c" data-pos="seg19">19h</div><div class="sg-c" data-pos="seg20">20h</div><div class="sg-c" data-pos="seg21">21h</div><div class="sg-c" data-pos="seg22">22h</div></div><div class="sg-r"><div class="sg-c sg-c-w">ter</div><div class="sg-c" data-pos="ter6">6h</div><div class="sg-c" data-pos="ter7">7h</div><div class="sg-c" data-pos="ter8">8h</div><div class="sg-c" data-pos="ter9">9h</div><div class="sg-c" data-pos="ter10">10h</div><div class="sg-c" data-pos="ter11">11h</div><div class="sg-c" data-pos="ter12">12h</div><div class="sg-c" data-pos="ter13">13h</div><div class="sg-c" data-pos="ter14">14h</div><div class="sg-c" data-pos="ter15">15h</div><div class="sg-c" data-pos="ter16">16h</div><div class="sg-c" data-pos="ter17">17h</div><div class="sg-c" data-pos="ter18">18h</div><div class="sg-c" data-pos="ter19">19h</div><div class="sg-c" data-pos="ter20">20h</div><div class="sg-c" data-pos="ter21">21h</div><div class="sg-c" data-pos="ter22">22h</div></div><div class="sg-r"><div class="sg-c sg-c-w">qua</div><div class="sg-c" data-pos="qua6">6h</div><div class="sg-c" data-pos="qua7">7h</div><div class="sg-c" data-pos="qua8">8h</div><div class="sg-c" data-pos="qua9">9h</div><div class="sg-c" data-pos="qua10">10h</div><div class="sg-c" data-pos="qua11">11h</div><div class="sg-c" data-pos="qua12">12h</div><div class="sg-c" data-pos="qua13">13h</div><div class="sg-c" data-pos="qua14">14h</div><div class="sg-c" data-pos="qua15">15h</div><div class="sg-c" data-pos="qua16">16h</div><div class="sg-c" data-pos="qua17">17h</div><div class="sg-c" data-pos="qua18">18h</div><div class="sg-c" data-pos="qua19">19h</div><div class="sg-c" data-pos="qua20">20h</div><div class="sg-c" data-pos="qua21">21h</div><div class="sg-c" data-pos="qua22">22h</div></div><div class="sg-r"><div class="sg-c sg-c-w">qui</div><div class="sg-c" data-pos="qui6">6h</div><div class="sg-c" data-pos="qui7">7h</div><div class="sg-c" data-pos="qui8">8h</div><div class="sg-c" data-pos="qui9">9h</div><div class="sg-c" data-pos="qui10">10h</div><div class="sg-c" data-pos="qui11">11h</div><div class="sg-c" data-pos="qui12">12h</div><div class="sg-c" data-pos="qui13">13h</div><div class="sg-c" data-pos="qui14">14h</div><div class="sg-c" data-pos="qui15">15h</div><div class="sg-c" data-pos="qui16">16h</div><div class="sg-c" data-pos="qui17">17h</div><div class="sg-c" data-pos="qui18">18h</div><div class="sg-c" data-pos="qui19">19h</div><div class="sg-c" data-pos="qui20">20h</div><div class="sg-c" data-pos="qui21">21h</div><div class="sg-c" data-pos="qui22">22h</div></div><div class="sg-r"><div class="sg-c sg-c-w">sex</div><div class="sg-c" data-pos="sex6">6h</div><div class="sg-c" data-pos="sex7">7h</div><div class="sg-c" data-pos="sex8">8h</div><div class="sg-c" data-pos="sex9">9h</div><div class="sg-c" data-pos="sex10">10h</div><div class="sg-c" data-pos="sex11">11h</div><div class="sg-c" data-pos="sex12">12h</div><div class="sg-c" data-pos="sex13">13h</div><div class="sg-c" data-pos="sex14">14h</div><div class="sg-c" data-pos="sex15">15h</div><div class="sg-c" data-pos="sex16">16h</div><div class="sg-c" data-pos="sex17">17h</div><div class="sg-c" data-pos="sex18">18h</div><div class="sg-c" data-pos="sex19">19h</div><div class="sg-c" data-pos="sex20">20h</div><div class="sg-c" data-pos="sex21">21h</div><div class="sg-c" data-pos="sex22">22h</div></div><div class="sg-r"><div class="sg-c sg-c-w">sab</div><div class="sg-c" data-pos="sab6">6h</div><div class="sg-c" data-pos="sab7">7h</div><div class="sg-c" data-pos="sab8">8h</div><div class="sg-c" data-pos="sab9">9h</div><div class="sg-c" data-pos="sab10">10h</div><div class="sg-c" data-pos="sab11">11h</div><div class="sg-c" data-pos="sab12">12h</div><div class="sg-c" data-pos="sab13">13h</div><div class="sg-c" data-pos="sab14">14h</div><div class="sg-c" data-pos="sab15">15h</div><div class="sg-c" data-pos="sab16">16h</div><div class="sg-c" data-pos="sab17">17h</div><div class="sg-c" data-pos="sab18">18h</div><div class="sg-c" data-pos="sab19">19h</div><div class="sg-c" data-pos="sab20">20h</div><div class="sg-c" data-pos="sab21">21h</div><div class="sg-c" data-pos="sab22">22h</div></div></div></main><footer><div class="sg-o"></div><div class="sg-s">Nenhuma disciplina selecionada</div></footer></div>'
    },
    getClass: function(id) {
        var a = document.querySelector('input[value="'+id+'"]');
        if (a === null) {
            return null;
        } else {
            var a = a.parentElement.parentElement.querySelectorAll('td');
            return {
                id: id,
                detail: this.getClassDetail(id),
                professors: (a.length === 7) ? a[4].innerText.trim() : a[3].innerText.trim(),
                groupName: (a.length === 7) ? a[3].innerText.trim() : a[2].innerText.trim(),
                schedule:this.parseSchedule(a[5].innerText.trim()),
                schedule_text: a[5].innerText.trim().replace(/\(.*\)/, '').replace("\n",' e '),
                location: a[6].innerText.trim(),
                capacity: (a.length === 7) ? null : parseInt(a[7].innerText.split(" ")[0]),
                element_id: document.querySelector('input[value="'+id+'"]').getAttribute('id')
            } 
        }
    },
    getClassDetail: function(x, p) {
        if (x === null) {
            return null;
        } else if (typeof x === 'number' || typeof x === 'string') {
            if (document.querySelector('input[value="' + x + '"]') !== null) {
                return this.getClassDetail(document.querySelector('input[value="' + x + '"]'));
            } else {
                return null;
            }
        } else {
            if (x.getAttribute('class') === 'disciplina') {
                return {
                    'cod': x.querySelector('a').innerText.trim().slice(0, 7),
                    'name': x.querySelector('a').innerText.trim().slice(10)
                }
            } else {
                if (p) {
                    return this.getClassDetail(x.previous(), true);
                } else {
                    return this.getClassDetail(x.parentElement.parentElement.previous(), true);
                }
            }
        }
    },
    parseSchedule:function(s) {
        if (s === "") {
            return null;
        } else {
            return s.replace(/\(.*\)/, '').trim().split("\n").map(function(e) {
                return {
                    'weekday': e.split(' ')[0],
                    'start': e.split(' ')[1].split('-')[0],
                    'end': e.split(' ')[1].split('-')[1]
                }
            });
        }
    },
    appendStyles: function() {
        var a = document.createElement('style');
        a.type = 'text/css';
        var b = this.contents.css;
        if (a.styleSheet) a.styleSheet.cssText = b;
        else a.appendChild(document.createTextNode(b));
        document.getElementsByTagName('head')[0].appendChild(a);
    },
    appendHTML: function() {
        var a = document.createElement('div');
        a.setAttribute('id', 'sg-grid-container');
        a.innerHTML = this.contents.html;
        document.getElementsByTagName('body')[0].appendChild(a);
    },
    appendClass:function(id, class_index) {
        var e, i, c = this.getClass(id);
        if (c.schedule !== null) {
            for (i = 0; i < c.schedule.length; i++) {
                e = document.createElement('div');
                e.innerHTML = '<a title="'+ c.detail.name+'" href="#'+c.element_id+'">'+c.detail.cod+'</a>';
                e.classList.add('sg-i');
                e.classList.add('sg-' + c.schedule[i].weekday.toLowerCase());
                e.classList.add('sg-' + parseInt(c.schedule[i].start.split(':')[0]));
                e.classList.add('cid-' + id);
                if ( parseInt(c.schedule[i].start.split(':')[1]) > 0 ) e.classList.add('sg-b');
                if (c.schedule.length === 1) e.classList.add('sg-d');
                if (typeof class_index === 'number') e.classList.add('sg-i-c' + class_index);
                e.addEventListener('dblclick', function(ev) {
                    ev.preventDefault();
                    document.querySelector('input[value="'+id+'"]').checked = false;
                    sgbuild.buildGrid();
                });
                e.addEventListener('contextmenu', function(ev) {
                    ev.preventDefault();
                    PainelTurma.show(id)
                });
                document.querySelector('#sgbuild .sg-g-i').appendChild(e);
            }
        }
    },
    removeClass:function(id) {
        var e;
        while (document.getElementsByClassName('cid-' + id).length > 0) {
            e = document.getElementsByClassName('cid-' + id)[0];
            e.parentElement.removeChild(e);
        }
    },
    emptyGrid:function() {
        var e = document.querySelector('#sgbuild .sg-g-i');
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }
    },
    buildGrid:function() {
        var i, e = document.querySelectorAll('input[name="selecaoTurmas"]:checked');
        sgbuild.emptyGrid();
        for (i = 0; i < e.length; i++) {
            sgbuild.appendClass(e[i].value, i+1)
        }
        if (e.length > 0) {
            document.querySelector('#sgbuild .sg-s').innerText = e.length + ' disciplina(s) selecionada(s).';
        } else {
            document.querySelector('#sgbuild .sg-s').innerText = 'Nenhuma disciplina selecionada.';
        }
    },
    showAvailableClasses: function(k) {
        var s, i, e;
        s = document.querySelector('.sg-o');
        while(s.firstChild) {
            s.removeChild(s.firstChild);
        }
        if (sgbuild.data.db.hasOwnProperty(k)) {
            for (i = 0; i < sgbuild.data.db[k].length; i++) {
                e = document.createElement('a');
                e.setAttribute('href', '#' + sgbuild.data.db[k][i].id);
                e.setAttribute('class', 'sg-o-i');
                e.innerText = sgbuild.data.db[k][i].detail.cod + ' - ' + sgbuild.data.db[k][i].detail.name + ' - ' + sgbuild.data.db[k][i].schedule_text;
                e.addEventListener('click', function(ev) {
                    ev.preventDefault();
                    document.querySelector('input[value="' + ev.target.hash.replace('#','') + '"]').checked = true;
                    sgbuild.buildGrid();
                }, false);
                e.addEventListener('contextmenu', function(ev) {
                    ev.preventDefault();
                    PainelTurma.show(parseInt(ev.target.hash.replace('#','')))
                });
                s.appendChild(e);
            }
        } else {
            s.innerText = 'Não há disciplinas disponíveis nesse horário.';
        }
    },
    trackUse: function() {
        var e = document.createElement('iframe');
        e.src = 'https://falmeidaco.github.io/sigaabuild/track.html';
        e.name = 'sgbuild-track';
        e.style.width = '1px';
        e.style.height ='1px';
        e.style.visibility = 'hidden';
        document.getElementsByTagName('body')[0].appendChild(e);
    },
    create:function() {
        var cl, k, c, i, e = document.querySelectorAll('input[name="selecaoTurmas"]');
        this.appendStyles();
        this.appendHTML();
        for (i = 0; i < e.length; i++) {
            c = sgbuild.getClass(e[i].value);
            if (c.schedule !== null) {
                k = c.schedule[0].weekday.toLowerCase() + parseInt(c.schedule[0].start.split(':')[0]);
                if (sgbuild.data.db.hasOwnProperty(k)) {
                    sgbuild.data.db[k].push(c);
                } else {
                    sgbuild.data.db[k] = [c];
                }
                document.querySelector('div[data-pos="'+k+'"').setAttribute('class','sg-c sg-m');
            }
            e[i].addEventListener('change', function(ev) {
                sgbuild.buildGrid();
            }, false);
        }
        cl = document.querySelectorAll('.sg-c');
        for (i = 0; i < cl.length; i++) {
            cl[i].addEventListener('click', function(ev) {
                sgbuild.showAvailableClasses(ev.target.dataset.pos);
            }, false);
        }
        this.trackUse();
    }
};
if (document.getElementById('sg-grid-container') !== null) {
    if (document.getElementById('sg-grid-container').style.display !== 'none') {
        document.getElementById('sg-grid-container').style.display = 'none';
    } else {
        document.getElementById('sg-grid-container').style.display = 'block';
    }
} else {
    window.sgbuild = sgb;
    sgbuild.create();
}