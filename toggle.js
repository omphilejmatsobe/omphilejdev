const [toggle, setActiveToggle] = useState("Active");
const [toggleIcon, setActiveIcon] = useState('closedIcon');

function toggle()
{
    if (toggle == 'Active')
    {
        setActiveToggle('inActive')
        setActiveIcon('closedIcon');
    }
    else
    {
        setActiveToggle('Active')
        setActiveIcon('openIcon');
    }
}