$( document ).ready(function()
{
const myDialog = document.getElementById('d');
myDialog.addEventListener('click', () => myDialog.close());

const myDiv = document.getElementById('inner-dialog');
myDiv.addEventListener('click', (event) => event.stopPropagation());
});
