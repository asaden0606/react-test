//----------------------------------------------------------------------
//device判定
//----------------------------------------------------------------------
console.log("called");


function device () {
	var device_type = ""
	var w = $(window).width();
	var x = 767;
	if (w <= x) {
			device_type = "SP"
	}else{
			device_type = "PC"
	}
	return device_type;
}



$(function () {
	ScrollOut({
		targets: ".jsfade",
		threshold: 0.5,
		once: "true",
		offsetY: 400
	});
	ScrollOut({
		targets: ".jsfadeup",		
		threshold: 0.5,
		once: "true",
		offsetY: 400
	});   
	ScrollOut({
		targets: ".jsfadeleft",
		threshold: 0.5,
		once: "true",
		offsetY: 400
	});

	ScrollOut({
		targets: ".jsfadedown",
		threshold: 0.5,
		once: "true",
		offsetY: 400
	});   
	ScrollOut({
		targets: ".jsfaderight",
		threshold: 0.5,
		once: "true",
		offsetY: 400
	});


	$(".topfirsttitle").attr("data-scroll","in");
});




//----------------------------------------------------------------------
//pageTop
//----------------------------------------------------------------------

$(function () {
	$('a[href^="#"]').click(function () {
			var speed = 400; // スクロールスピード(ミリ秒)
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('.lp,body,html').animate({ scrollTop: position }, speed, 'swing');
			return false;
	});
});

//----------------------------------------------------------------------
//header
//----------------------------------------------------------------------

$(function(){
	//header drawer
	var drawerBtn = $('.-js-btn');
	$(drawerBtn).on('click touch', function(){
			$(this).toggleClass('-show');
			$(".l-header-submenu").fadeOut('500');
			$(".l-header-message").fadeOut('500');
			$(".l-header-drawer").toggleClass('-show');
			$(".l-drawer-bg").toggleClass('-show');
	});

	//submenu-btn
	var main = $('.l-main');
	$(main).on('click touch', function () {
			$(".l-header-submenu").fadeOut('500');
			$(".l-header-message").fadeOut('500');
	});  


});



//----------------------------------------------------------------------
//画像置換
//----------------------------------------------------------------------

$(function () {
   console.log("called");

	$('.-js-hover').hover(function () {
			$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
	}, function () {
			if (!$(this).hasClass('currentPage')) {
					$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
			}
	});


});
//----------------------------------------------------------------------
//lp
//----------------------------------------------------------------------

$(function () {
	var topBtn = $('.lp-pagetop');
	topBtn.hide();
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
					topBtn.fadeIn();
			} else {
					topBtn.fadeOut();
			}
	});

	$('.js-lp-drawer').on('click', function () {
			$(this).toggleClass('-show');
			$('.lp-header-nav').toggleClass('-show');
	});

	$(".lp-header-list a").click(function(obj){
		var href = $(this).attr("href");
		if(href.length != ""){
			$('.lp-drawer-btn').click();
		}
	});		
});





$(function (){
	$(".category-title").each(function(i,elem){
		var $elem = $(elem);
		var text = $elem.text();
		$elem.text("");
		$elem.append("<span>" + text + "</span>");				
	})
});




$(function (){		
	$('.subtitle.animation').on('inview',function(){	
		console.log("inview");
		$(this).textillate({ 
			initialDelay: 0,
			in: { effect: 'bounceInDown' } 
		});			
		$(this).css("opacity",1);	
	})


	$('.topfkvback').delay(2 * 1000).queue(function(next) {
		$(".topfkvback").get(0).play();
		next();
	  });
});



mousePosition = new THREE.Vector2(0,0);
const CAT_VECTOR_SIZE = 2;
const INTERVAL = 50;

function calcCatPosition(){	
	$catParent = $(".trackingParent");
	let catPosition = new THREE.Vector2($catParent.position().left, $catParent.position().top);
	if(catPosition.length() == 0){
		return mousePosition;
	}
	
	let vec = mousePosition.clone().sub(catPosition);
	if (vec.length() <= CAT_VECTOR_SIZE * INTERVAL) {
		return mousePosition.clone();
	}


	vec.normalize();
	vec.multiplyScalar(CAT_VECTOR_SIZE * INTERVAL);
	return catPosition.add(vec);
}



function action(){
	$catParent = $(".trackingParent");
	let catPos = calcCatPosition();
	$catParent.offset({
		left: catPos.x,
		top: catPos.y,
	});	
}



$(function (){
	$(window).mousemove((event) => {
		mousePosition = new THREE.Vector2(event.pageX, event.pageY);
		$mouseParent = $(".mouseParent");
		$mouseParent.offset({
			left: mousePosition.x,
			top: mousePosition.y,
		});	
	});


	setInterval(function(){
		action();		
	},INTERVAL);	


});