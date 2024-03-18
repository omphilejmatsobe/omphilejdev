window.addEventListener('scroll', reveal);
var pageHeight = window.innerHeight;

function reveal()
{
  var reveals = document.querySelectorAll('.reveal');

  for (var x = 0; x < reveals.length; x++)
  {
      var revealTop = reveals[x].getBoundingClientRect().top;
      var revealPosition = 150;

      if(revealTop < pageHeight - revealPosition)
      {
        reveals[x].classList.add('active');
      }
    }
}

function change()
{
  var color = document.getElementsById('Navlinks');
  var section = document.getElementById('about');

  var sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < pageHeight)
  {
    color.classList.add('color');
  }
  else
  {
    color.classList.remove('color');
  }
}