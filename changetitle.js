const firstTitle = "Omphile J Matsobe: Software Engineer & Game Developer.";
const secondTitle = "Thank you for visiting!"

function first()
{
    document.title = firstTitle;

    setTimeout(() =>
    {
        second();
    }, 17000);
}

function second()
{
    document.title = secondTitle;

    setTimeout(() =>
    {
        first();
    }, 5000);
}

first();