$( document ).ready(function()
{
    const myDialog = document.getElementById('inner-dialog');
    myDialog.addEventListener('click', (event) =>
    {
        if (event.target.id !== 'inner-dialog')
        {
            myDialog.close();
        }
    });
});
