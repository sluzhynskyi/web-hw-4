function email_validation() {
    const emailNode = document.getElementById('email');
    const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
    emailErrorNode.innerHTML = '';
    let emailErrors = document.createElement('ul');
    emailErrors.setAttribute("role", "alert");

    max_length(emailErrors, emailNode.value, 5, 'Email is to short');
    if (emailNode.value.length > 64) {
        let li = document.createElement('li')
        li.innerText = 'Email is to long';
        emailErrors.appendChild(li);
    }
    format(emailErrors, emailNode.value,
        '^[a-zA-Z0-9]([a-zA-Z0-9_\\-.!#$%&\'*+\\-\\/=?^_`{|]+)[a-zA-Z0-9]@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
        'Email format is incorrect');
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

    max_length(phoneErrors, phoneNode.value, 12, 'Phone number is to short');
    format(phoneErrors, phoneNode.value,
        '^(\\+380(\\([0-9]{2}\\)|[0-9]{2}|-[0-9]{2}))(( [0-9]{3}){1}( [0-9]{2}){2}|(-[0-9]{3}){1}(-[0-9]{2}){2}|([0-9]{7})$)',
        'Phone number format is incorrect')
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

    max_length(nameErrors, nameNode.value, 1, 'Name is to short');

    format(nameErrors, nameNode.value, '(^([a-zA-Z]+( ){0}|( ){2})+)$', 'Name format is incorrect (Should be two spaces between words)');

    if (nameErrors.childElementCount > 0) {
        nameErrorNode.appendChild(nameErrors);
        return false;
    } else return true;
}

function message_validation() {
    const messageNode = document.getElementById('message');
    const messageErrorNode = messageNode.parentNode.querySelector('p.help-block');
    messageErrorNode.innerHTML = '';
    let messageErrors = document.createElement('ul');
    messageErrors.setAttribute("role", "alert");

    max_length(messageErrors, messageNode.value, 10, 'Message is to short');

    format(messageErrors, messageNode.value.toLowerCase(), '^.*ugly.*|.*damm.*|.*stupid.*|.*pig.*|.*ignorant.*$', 'Message shouldn\'t contain rude words')

    if (messageErrors.childElementCount > 0) {
        messageErrorNode.appendChild(messageErrors);
        return false;
    } else return true;
}

function max_length(nodeErrors, txt, maxL, errorMsg) {
    if (txt.length < maxL) {
        let li = document.createElement('li');
        li.innerText = errorMsg;
        nodeErrors.appendChild(li);
    }
}

function format(nodeErrors, txt, matchReg, errorMsg) {
    if (!txt.match(matchReg)) {
        let li = document.createElement('li');
        li.innerText = errorMsg;
        nodeErrors.appendChild(li);
    }
}

function validateMe(event) {
    event.preventDefault();

    let name_v = name_validation();
    let email_v = email_validation();
    let phone_v = phone_validation();
    let message_v = message_validation();

    return name_v && email_v && phone_v && message_v;
}