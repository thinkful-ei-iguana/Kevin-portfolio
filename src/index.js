const handleExpandNavbar = function() {
  $('.navbar-toggle').on('click', event => {
    $('#navbar').toggle();
  });
};
  
const main = function() {
  handleExpandNavbar();
};
  
$(main);