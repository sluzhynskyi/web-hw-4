function email_validation() {
    const emailNode = document.getElementById('email');
    const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
    emailErrorNode.innerHTML = '';
    let emailErrors = document.createElement('ul');
    emailErrors.setAttribute("role", "alert");

    if (emailNode.value.length < 5) {
        let li = document.createElement('li')
        li.innerText = 'Email is to short';
        emailErrors.appendChild(li);
    }
    if (emailNode.value.length > 64) {
        let li = document.createElement('li')
        li.innerText = 'Email is to long';
        emailErrors.appendChild(li);
    }
    if (!emailNode.value.match('^[a-zA-Z0-9]([a-zA-Z0-9_\\-.!#$%&\'*+\\-\\/=?^_`{|]+)[a-zA-Z0-9]@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')) {
        let li = document.createElement('li');
        li.innerText = 'Email format is incorrect';
        emailErrors.appendChild(li);
    }
    if (emailErrors.childElementCount > 0) {
        emailErrorNode.appendChild(emailErrors);
        return false;
    } else return true;
}

function phone_validation() {
    const phoneNode = document.getElementById('phone');
    const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block');
    phoneErrorNode.innerHTML = '';
    let phoneErrors = document.createElement('ul');
    phoneErrors.setAttribute("role", "alert");

    if (phoneNode.value.length < 12) {
        let li = document.createElement('li')
        li.innerText = 'Phone number is to short';
        phoneErrors.appendChild(li);
    }
    if (!phoneNode.value.match('^(\\+380(\\([0-9]{2}\\)|[0-9]{2}|-[0-9]{2}))(( [0-9]{3}){1}( [0-9]{2}){2}|(-[0-9]{3}){1}(-[0-9]{2}){2}|([0-9]{7})$)')) {
        let li = document.createElement('li')
        li.innerText = 'Phone number format is incorrect';
        phoneErrors.appendChild(li);
    }
    if (phoneErrors.childElementCount > 0) {
        phoneErrorNode.appendChild(phoneErrors);
        return false;
    } else return true;

}

function name_validation() {
    const nameNode = document.getElementById('name');
    const nameErrorNode = nameNode.parentNode.querySelector('p.help-block');
    nameErrorNode.innerHTML = '';
    let nameErrors = document.createElement('ul');
    nameErrors.setAttribute("role", "alert");

    if (nameNode.value.length < 1) {
        let li = document.createElement('li');
        li.innerText = 'Name is to short';
        nameErrors.appendChild(li);
    }
    if (!nameNode.value.match('(^([a-zA-Z]+( ){0}|( ){2})+)$')){
        let li = document.createElement('li');
        li.innerText = 'Name format is incorrect (Should be two spaces between words)';
        nameErrors.appendChild(li);
    }


    if (nameErrors.childElementCount > 0) {
        nameErrorNode.appendChild(nameErrors);
        return false;
    } else return true;
}

function message_validation(){
    const messageNode = document.getElementById('message');
    const messageErrorNode = messageNode.parentNode.querySelector('p.help-block');
    messageErrorNode.innerHTML = '';
    let messageErrors = document.createElement('ul');
    messageErrors.setAttribute("role", "alert");

    if (messageNode.value.length < 10) {
        let li = document.createElement('li');
        li.innerText = 'Message is to short';
        messageErrors.appendChild(li);
    }
    if(messageNode.value.toLowerCase().match('^.*ugly.*|.*damm.*|.*stupid.*|.*pig.*|.*ignorant.*$')){
        let li = document.createElement('li')
        li.innerText = 'Message shouldn\'t contain rude words';
        messageErrors.appendChild(li);
    }

    if (messageErrors.childElementCount > 0) {
        messageErrorNode.appendChild(messageErrors);
        return false;
    } else return true;
}

function validateMe(event) {
    event.preventDefault();

    let name_v = name_validation();
    let email_v = email_validation();
    let phone_v = phone_validation();
    let message_v = message_validation();

    return name_v && email_v && phone_v && message_v;
}