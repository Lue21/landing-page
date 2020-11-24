const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus'),
      date = document.getElementById('date');



function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        day = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();
        

    hour = 24-2;

    time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    date.innerHTML = `${day}<span>.<span>${month + 1}<span>.<span>${year}`;
    
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = 'url(assets/morning.jpg)';
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundColor = 'url(assets/day.jpg)';
        greeting.textContent = 'Good Day';
    } else {
        document.body.style.backgroundImage = 'url(assets/evening2.jpg)';
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }

      
}

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
