window.sgbuild = {
    contents: {
        css:"#sg-grid{position:fixed;left:50%;top:0;margin-left:-360px;width:720px;height:175px;z-index:9999;box-shadow:0 0 10px gray}#sg-grid .sg-r{height:25px;background-color:#fff;line-height:23px;text-align:left}#sg-grid .sg-r:nth-child(odd){background-color:#f1f1f1}#sg-grid .sg-r .sg-c-time{text-align:center;float:left;width:40px;height:25px}#sg-grid .sg-r .sg-c-time:first-child{margin-left:40px}#sg-grid .sg-r .sg-c-time:nth-child(odd){background-color:#fff}#sg-grid .sg-classes{position:absolute;top:0;left:0}#sg-grid .sg-classes .sg-classes-content{display:block;position:relative;width:720px;height:175px}#sg-grid .sg-classes .sg-classes-content .sg-class{position:absolute;background-color:rgba(0,244,0,.2);color:#333;width:80px;height:25px;text-align:center;line-height:25px;border-radius:20px;border:1px solid #333;box-sizing:border-box}#sg-grid .sg-classes .sg-classes-content .sg-class a{color:#333;text-decoration:none}#sg-grid .sg-classes .sg-classes-content .sg-d{width:160px}#sg-grid .sg-classes .sg-classes-content .sg-m{transform:translateX(-20px)}#sg-grid .sg-classes .sg-classes-content .sg-seg{top:25px}#sg-grid .sg-classes .sg-classes-content .sg-ter{top:50px}#sg-grid .sg-classes .sg-classes-content .sg-qua{top:75px}#sg-grid .sg-classes .sg-classes-content .sg-qui{top:100px}#sg-grid .sg-classes .sg-classes-content .sg-sex{top:125px}#sg-grid .sg-classes .sg-classes-content .sg-sab{top:150px}#sg-grid .sg-classes .sg-classes-content .sg-06{left:40px}#sg-grid .sg-classes .sg-classes-content .sg-07{left:80px}#sg-grid .sg-classes .sg-classes-content .sg-08{left:120px}#sg-grid .sg-classes .sg-classes-content .sg-09{left:160px}#sg-grid .sg-classes .sg-classes-content .sg-10{left:200px}#sg-grid .sg-classes .sg-classes-content .sg-11{left:240px}#sg-grid .sg-classes .sg-classes-content .sg-12{left:280px}#sg-grid .sg-classes .sg-classes-content .sg-13{left:320px}#sg-grid .sg-classes .sg-classes-content .sg-14{left:360px}#sg-grid .sg-classes .sg-classes-content .sg-15{left:400px}#sg-grid .sg-classes .sg-classes-content .sg-16{left:440px}#sg-grid .sg-classes .sg-classes-content .sg-17{left:480px}#sg-grid .sg-classes .sg-classes-content .sg-18{left:520px}#sg-grid .sg-classes .sg-classes-content .sg-19{left:560px}#sg-grid .sg-classes .sg-classes-content .sg-20{left:600px}#sg-grid .sg-classes .sg-classes-content .sg-21{left:640px}#sg-grid .sg-classes .sg-classes-content .sg-22{left:680px}",
        html:'<div id="sg-grid"> <div class="sg-r sg-r-time"> <div class="sg-c-time">06</div><div class="sg-c-time">07</div><div class="sg-c-time">08</div><div class="sg-c-time">09</div><div class="sg-c-time">10</div><div class="sg-c-time">11</div><div class="sg-c-time">12</div><div class="sg-c-time">13</div><div class="sg-c-time">14</div><div class="sg-c-time">15</div><div class="sg-c-time">16</div><div class="sg-c-time">17</div><div class="sg-c-time">18</div><div class="sg-c-time">19</div><div class="sg-c-time">20</div><div class="sg-c-time">21</div><div class="sg-c-time">22</div></div><div class="sg-r sg-r-w-seg">SEG</div><div class="sg-r sg-r-w-ter">TER</div><div class="sg-r sg-r-w-qua">QUA</div><div class="sg-r sg-r-w-qui">QUI</div><div class="sg-r sg-r-w-sex">SEX</div><div class="sg-r sg-r-w-sex">SAB</div><div class="sg-classes"> <div id="sg-content" class="sg-classes-content"> </div></div></div>'
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
    appendClass:function(id) {
        var e, i, c = this.getClass(id);
        if (c.schedule !== null) {
            for (i = 0; i < c.schedule.length; i++) {
                e = document.createElement('div');
                e.innerHTML = '<a href="#'+c.element_id+'">'+c.detail.cod+'</a>';
                e.classList.add('sg-class');
                e.classList.add('sg-' + c.schedule[i].weekday.toLowerCase());
                e.classList.add('sg-' + c.schedule[i].start.split(':')[0]);
                e.classList.add('cid-' + id);
                if (c.schedule.length === 1) e.classList.add('sg-d');
                document.getElementById('sg-content').appendChild(e);
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
        var e = document.getElementById('sg-content');
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }
    },
    buildGrid:function() {
        var i, e = document.querySelectorAll('input[name="selecaoTurmas"]:checked');
        sgbuild.emptyGrid();
        for (i = 0; i < e.length; i++) {
            sgbuild.appendClass(e[i].value)
        }
    },
    create:function() {
        var i, e = document.querySelectorAll('input[name="selecaoTurmas"]');
        this.appendStyles();
        this.appendHTML();
        for (i = 0; i < e.length; i++) {
            e[i].addEventListener('change', function(ev) {
                sgbuild.buildGrid()
            }, false);
        }
    }
};
sgbuild.create()
