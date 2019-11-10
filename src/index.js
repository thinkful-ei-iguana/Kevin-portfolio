const handleExpandNavbar = function() {
  $('.navbar-toggle').on('click', event => {
    $('#navbar').toggleClass('hidden');
  });
};
  
const main = function() {
  handleExpandNavbar();
};
  
$(main);