$(document).ready(function() {
	// адаптивное меню - бургер
	$('.header__burger').click(function(event){
		$('.header__burger, .menu__list').toggleClass('active');
		$('body').toggleClass('block');
	});
	// функция, делающая картинку в элементе с классом ibg фоновым изображением
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	};
	ibg();
	// очистка значения атрибута value при клике
	$('input').focus(function(){
		$(this).data('value',$(this).attr('value'))
		$(this).attr('value','');
	});
	$('textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	// возврат значения в поле при потере фокуса
	$('textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
	$('input').blur(function(){
		$(this).attr('value',$(this).data('value'));
	});

	// табы
	$('body').on('click', '.tab-nav a', function() {
		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.tab-pane').removeClass('active').removeClass('in');
		var id = $(href).addClass('active');
		setTimeout(function() {
			$(href).addClass('in');
		});
		return false;
	});
});