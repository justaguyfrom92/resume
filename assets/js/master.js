$( document ).ready(function()
{
    const myDialog = document.getElementById('d');
    myDialog.addEventListener('click', (event) =>
    {
        if (event.target.id !== 'inner-dialog')
        {
            myDialog.close();
        }
    });
});
