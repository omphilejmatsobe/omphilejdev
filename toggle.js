
var toggleNav = document.getElementById('toggleNav');
var toggle = false;

function toggle()
{
    if (toggle == True)
    {
        toggle.classList.add('.active');
        console.log('On');
    }
    else if (toggle == False)
    {
        toggle.classList.remove('.active');
        console.log('off');
    }
}

export default toggle;