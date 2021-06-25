window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      dots: '.carousel__indicadores',
      draggable: false,
      arrows: {
          prev: '.glider-l',
          next: '.glider-r'
      }
  });
}); 

 