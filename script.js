$(document).ready(function() {
  // ---- TABS
  var tabPrefix = 'js-set-tab-';

  function switchDetailTab(tabName) {
    var tabContentClassPrefix = 'js-tab-',
        tabContentClass       = '.' + tabContentClassPrefix + tabName;

    $('[class*=' + tabContentClassPrefix + ']').addClass('hide');
    $(tabContentClass).removeClass('hide');

    $('[class*=' + tabPrefix + ']').removeClass('active');
    $('.' + tabPrefix + tabName).addClass('active');
  }

  $('[class^=' + tabPrefix + ']').click(function(e) {
    e.preventDefault();
    if ( !$(this).hasClass('active') ) {
      var tabName = $(this).attr('class').replace(tabPrefix, '');
      switchDetailTab(tabName);
    }
  });

  switchDetailTab($('[class*=' + tabPrefix + ']').first().attr('class').replace(tabPrefix, ''));

  // ---- BUY BUTTON
  $('.js-buy').on('click', function() { //when you click on buy now button
    $(this).addClass('active'); // addClass active after click
    $(this).text('Added To Cart!'); // change text from buy now to Added to cart!

    var cartCount = parseInt($('.js-cart-count').text());
    cartCount += 1;
    $('.js-cart-count').text(cartCount);

    window.setTimeout(function() {
      // $(this) is not available because setTimeout runs in the global scope
      $('.js-buy').text('Buy Now!');
      $('.js-buy').removeClass('active');
    }, 500);
  });

});
