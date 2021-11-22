let ric = confirm('Не желаете ли обоссать мой плед?');
let answer = document.querySelector('.dick');

if (ric == true) {
    answer.textContent = 'Спасибо, что обоссали мой плед';
} else {
    answer.textContent = 'Очень зря';
}
