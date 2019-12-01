const handleExpandNavbar = function() {
  $('.navbar-toggle').on('click', event => {
    $('#navbar').toggleClass('hidden');
  });
};

const handleNavLink = function() {
  $('#navbar').children().on('click', event => {
    $('#navbar').toggleClass('hidden');
  });
};
  
const main = function() {
  handleExpandNavbar();
  handleNavLink();
};
  
$(main);