
const firstTitle = "OmphileJDev Portfolio.";
const secondTitle = "Thank you for visiting!"

function first()
{
    document.title = firstTitle;

    setTimeout(() =>
    {
        second();
    }, 15000);
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