var sgb = {
    data: {
        db:{}
    },
    contents: {
        css:'${CSS}',
        html:'${HTML}'
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