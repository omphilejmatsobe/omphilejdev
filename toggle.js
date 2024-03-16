var toggler = false;
var toggleNav = document.getElementById('toggleNav');

function toggle()
{
    if (toggler == true)
    {
        toggleNav.classList.remove('active');
        console.log('off');
        toggler = false;
    }
    else if (toggler == false)
    {
        toggleNav.classList.add('active');
        console.log('on');
        toggler = true;
    }
}

function offToggle()
{
    if (toggler == true)
    {
        toggleNav.classList.remove('active');
        console.log('off');
        toggler = false;
    }
}