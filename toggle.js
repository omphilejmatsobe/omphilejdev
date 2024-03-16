var toggler = false;
var toggleNav = document.getElementById('toggleNav');
var toogleIcon = document.getElementById('toggleIcon');

function toggle()
{
    if (toggler == true)
    {
        toggleNav.classList.remove('active');
        toggleIcon.classList.remove('active');
        console.log('off');
        toggler = false;
    }
    else if (toggler == false)
    {
        toggleNav.classList.add('active');
        toggleIcon.classList.add('active');
        console.log('on');
        toggler = true;
    }
}

function offToggle()
{
    if (toggler == true)
    {
        toggleNav.classList.remove('active');
        toggleIcon.classList.remove('active');
        console.log('off');
        toggler = false;
    }
}