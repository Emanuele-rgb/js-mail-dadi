var bottoneTira = document.getElementById('bottoneTira');

var containerbot = document.getElementById('botwin');
var containerumano = document.getElementById('umanowin');



bottoneTira.addEventListener('click',
    function() {
      containerumano.className = 'hidden';
      containerbot.className = 'hidden';

      var tiroBot = Math.floor( Math.random() * 6) + 1;
      var tiroUmano = Math.floor( Math.random() * 6) + 1;

      if (tiroBot > tiroUmano) {


        containerbot.className = 'show';

      } else if (tiroUmano> tiroBot) {

        containerumano.className = 'show';
      }

      document.getElementById('tiroBot').innerHTML = tiroBot;
      document.getElementById('tiroUmano').innerHTML = tiroUmano;
    }
  );

  
