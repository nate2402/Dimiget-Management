$('.nav-link').click(function() {
  if ($(this).attr('href').startsWith('#')) scroll($(this).attr('href'));
});
scroll(location.hash)
