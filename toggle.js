
var toggleNav = document.getElementById('toggleNav');
var toggle = false;

function toggle()
{
    if (toggle == True)
    {
        toggle.classList.add('.active');
    }
    else if (toggle == False)
    {
        toggle.classList.remove('.active');
    }
}

export default toggle;