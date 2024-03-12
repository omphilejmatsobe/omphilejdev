window.addEventListener('scroll', reveal);

function reveal()
{
  var reveals = document.querySelectorAll('.reveal');

  for (var x = 0; x < reveals.length; x++)
  {
      var pageHeight = window.innerHeight;
      var revealTop = reveals[x].getBoundingClientRect().top;
      var revealPosition = 150;

      if(revealTop < pageHeight - revealPosition)
      {
        reveals[x].classList.add('active');
      }
    }
}