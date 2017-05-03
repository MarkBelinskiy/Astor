[available=showfull] [not-category=8] [/available]
<!DOCTYPE html>
<html lang="en">

<head>
	{headers}
	<!--Mobile Specific Meta Tag-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<!--Favicon-->
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<link href="{THEME}/css/nouislider.min.css" rel="stylesheet" media="screen">
	<!-- Google Material Icons -->
	<link href="{THEME}/css/material-icons.min.css" rel="stylesheet" media="screen">
	<!-- Brand Icons -->
	<link href="{THEME}/css/socicon.min.css" rel="stylesheet" media="screen">
	<!-- Bootstrap -->
	<link href="{THEME}/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<!-- SALE CSS -->
	<link href="{THEME}/css/sale.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" type="text/css" href="{THEME}/css/filters_xf.css" media="all" />
	<!-- Theme Styles -->
	<link href="{THEME}/css/theme.min.css" rel="stylesheet" media="screen">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&amp;subset=cyrillic" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Pattaya&amp;subset=cyrillic" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css" />
	<link rel="stylesheet" type="text/css" href="{THEME}/css/font-awesome.css" media="all" />
	<link href="{THEME}/css/jquery.mb.YTPlayer.min.css" rel="stylesheet" media="screen">
	<link href="{THEME}/css/upgrade.css" rel="stylesheet" media="screen">
	<script src="{THEME}/js/page-preloading.js"></script>
	<script src="{THEME}/js/modernizr.custom.js"></script>
</head>

<body class="page-preloading">
	<div class="page-preloader">
		<div class="preloader">
			<a class="site-logo visible-desktop ">
				АСТОР
			</a>
			<a class="site-logo visible-mobile ">
				АСТОР
			</a>
		</div>
	</div>
	<div class="all [not-available=static|main]cata[/not-available]">
		<div class="page-wrapper">
			<header class="navbar navbar-sticky">
				<a href="/" class="site-logo visible-desktop">
					АСТОР
				</a>
				<a href="/" class="site-logo visible-mobile">
					АСТОР
				</a>
				<ul class="main-navigation menu space-bottom">
					{categories-header} {static-header}
				</ul>
				<div class="phones text-right">
					<div class="phone">
						<i class="material-icons phone"></i>
						<a href="tel:+308123456789">+380(123)-456-789</a>
						<div class="more">
							<i class="fa fa-chevron-down" aria-hidden="true"></i>
							<div class="else-phones">
								<div class="phone">
									<i class="material-icons phone"></i>
									<a href="tel:+308123456789">+380(123)-456-789</a>
								</div>
								<div class="phone">
									<i class="material-icons phone"></i>
									<a href="tel:+308123456789">+380(123)-456-789</a>
								</div>
								<div class="phone">
									<i class="material-icons phone"></i>
									<a href="tel:+308123456789">+380(123)-456-789</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="toolbar">
					<div class="inner">
						<a href="#menu" class="toolbar-toggle visible-mobile">
							<i class="material-icons menu"></i>
						</a>
						<a href="#account" class="toolbar-toggle">
							<i class="material-icons person"></i>
						</a>
						[not-static=order]
						<!-- <a href="#cart" class="toolbar-toggle">
							<i>
								<div id="sale-box">
									<span class="material-icons shopping_basket close"></span>
									<span class="count sale-goods-count close">0</span>
								</div>
							</i>
						</a> -->
						[/not-static]
					</div>
				</div>
				<div class="toolbar-dropdown">
					<div class="toolbar-section" id="menu">
						<div class="inner">
							<ul class="main-navigation space-bottom">
								{categories-header} {static-header}
							</ul>
							<ul class="list-icon">
								<li>
									<i class="material-icons location_on"></i> ул. Пушкина, д. Колотушкина
									<br>Харьков, Украина
								</li>
								<li>
									<i class="material-icons phone"></i>
									<a href="tel:+308123456789">+380(123)-456-789</a>
								</li>
								<li>
									<i class="material-icons phone"></i>
									<a href="tel:+308123456789">+380(123)-456-789</a>
								</li>
								<li>
									<i class="material-icons phone"></i>
									<a href="tel:+308123456789">+380(123)-456-789</a>
								</li>
								<li>
									<i class="material-icons email"></i>
									<a href="mailto:support@paramik.com">support@paramik.com</a>
								</li>
								<li>
									<i class="socicon-skype"></i>
									<a href="#">skype_id</a>
								</li>
							</ul>
							<div class="social-bar display-inline">
								<a href="#" class="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
									<i class="socicon-facebook"></i>
								</a>
								<a href="#" class="sb-google-plus" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google+">
									<i class="socicon-googleplus"></i>
								</a>
								<a href="#" class="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
									<i class="socicon-twitter"></i>
								</a>
								<a href="#" class="sb-instagram" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
									<i class="socicon-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div class="toolbar-section" id="account">
						{login}
					</div>
					<div class="toolbar-section" id="forgot">
						<h3 class="toolbar-title space-bottom">Восстановление пароля</h3>
						<div class="inner">
							<form method="post" class="login-form" action="/index.php?do=lostpassword" name="registration">
								<input type="text" name="lostname" id="lostname" class="form-control" placeholder="Логин" required>
								<div class="form-footer">
									<div class="c-captcha">
										<a onclick="reload(); return false;" href="#" title="Кликните на изображение чтобы обновить код, если он неразборчив">
											<span id="dle-captcha">
												<img src="engine/modules/antibot/antibot.php" alt="Кликните на изображение чтобы обновить код, если он неразборчив" border="0" width="160" height="80">
											</span>
										</a>
										<input class="form-control" placeholder="Повторите код" title="Введите код указанный на картинке" type="text" name="sec_code" id="sec_code" required="">
									</div>
								</div>
								<div class="form-submit">
									<button type="submit" name="submit" class="btn btn-primary btn-block waves-effect waves-light">Восстановить</button>
									<input name="submit_lost" type="hidden" id="submit_lost" value="submit_lost">
								</div>
							</form>
							<p class="text-sm space-top">Вспомнили? Тогда
								<a href="#account" class="toggle-section">заходите</a>
							</p>
						</div>
					</div>
					<div class="toolbar-section" id="signup">
						<h3 class="toolbar-title space-bottom">Зарегестрируйся, это бесплатно :)</h3>
						<div class="inner">
							<form method="post" class="login-form" action="/index.php?do=register" name="registration" onsubmit="if (!check_reg_daten()) {return false;};" id="registration">
								<div class="login">
									<div id="result-registration"></div>
									<input type="text" id="name" name="name" class="form-control login" placeholder="Логин" required>
									<button class="btn btn-search" type="button" onclick="CheckLogin(); return false;">Проверить логин</button>
								</div>
								<input type="email" id="email" name="email" class="form-control" placeholder="E-mail" required>
								<input type="password" id="password" name="password1" pattern="[0-9]{6,}" title="Пароль должен содержать более 6ти символов" class="form-control" placeholder="Пароль" required>
								<input type="password" id="repeat-password" name="password2" pattern="[0-9]{6,}" title="Пароль должен содержать более 6ти символов" class="form-control" placeholder="Повторить пароль" required>
								<div class="form-footer">
									<div class="rememberme"></div>
									<div class="form-submit">
										<input name="submit_reg" type="hidden" id="submit_reg" value="submit_reg">
										<input name="do" type="hidden" id="do" value="register">
										<button type="submit" name="submit" class="btn btn-primary btn-block waves-effect waves-light">Зарегестрироваться</button>
									</div>
								</div>
							</form>
							<p class="text-sm space-top">Уже есть аккаунт? Тогда
								<a href="#account" class="toggle-section">войди</a>
							</p>
						</div>
					</div>
					<div class="toolbar-section" id="cart">
						<div class="shopping-cart">
							<table class="sale-goods">
								<tr class="sale-empty-tr">
									<td>Ваша корзина пуста</td>
								</tr>
							</table>
							<div class="text-right">
								<a href="#" class="btn btn-default btn-ghost close-dropdown">Продолжить покупки</a>
								<a href="/order.html" class="btn btn-primary waves-effect waves-light toggle-section">Оформить заказ</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			[available=showfull] [/not-category] [/available] [available=main]
			<section class="hero-slider">
				<div class="inner [webkit]chrome[/webkit][not-webkit]not-chrome[/not-webkit]">{custom category="2" template="custom/main-slider" available="main" navigation="no" order="date" sort="desc" cache="yes"}</div>
			</section>
			<section class="container-fluid padding-top-4x cata sp-block">
				<!-- .row -->
				<div class="row padding-top">
					{custom category="5" template="custom/special-offer" limit="1" available="main" navigation="no" order="date" sort="desc" cache="yes"}
					<!-- Products -->
					<div class="col-md-12">
						<!-- Nav Tabs -->
						<ul class="nav-tabs text-center" role="tablist">
							<li class="active">
								<a href="#newcomers" role="tab" data-toggle="tab">
									<i class="material-icons">timelapse</i> Новые поступления</a>
							</li>
							<li>
								<a href="#onsale" role="tab" data-toggle="tab">
									<i class="material-icons">timeline</i> Распродажа</a>
							</li>
						</ul>
						<!-- .nav-tabs -->
						<!-- Tab Panes -->
						<div class="tab-content">
							<!-- #newcomers -->
							<div role="tabpanel" class="tab-pane transition fade scale in active" id="newcomers">
								<div class="row space-top-half">
									{custom category="3-4" template="custom/sale-block-main" limit="8" available="main" navigation="no" order="date" sort="desc" cache="yes"}
								</div>
								<!-- .row -->
							</div>
							<!-- .tab-pane#newcomers -->
							<!-- #onsale -->
							<div role="tabpanel" class="tab-pane transition fade scale" id="onsale">
								<div class="row">
									{custom category="3-4" xfields="price-new" template="custom/sale-block-main" limit="8" available="main" navigation="no" order="date" sort="desc" cache="yes"}
								</div>
								<!-- .row -->
							</div>
							<!-- .tab-pane#onsale -->
						</div>
						<!-- .tab-content -->
					</div>
					<!-- .col-lg-9.col-md-8 -->
				</div>
				<!-- .row -->
			</section>
			<!-- .container-fluid -->
			<div class="container-fluid btd">
				<br>
			</div>
			<div class="container-fluid bgw">
				<div class="row">
					<section class="container padding-top-2x">
						<h3 class="text-center">Наши партнеры</h3>
						<div class="row padding-top">
							{custom category="6" template="custom/partners" available="main" navigation="no" order="date" sort="desc" cache="yes"}
						</div>
						<!-- .row -->
					</section>
					<section class="container padding-top-2x padding-bottom-3x">
						<h3 class="text-center">Популярные категории</h3>
						<div class="row padding-top cats">
							{custom category="10" template="custom/cats" available="main" navigation="no" order="date" sort="desc" cache="yes"}
						</div>
						<!-- .row -->
					</section>
				</div>
			</div>
			<!-- .container -->
			<!-- Video Popup -->
			<div class="fw-section space-top-2x video-b " data-parallax="scroll" data-position="center bottom">
				<div id="video-bg" class="videopop">
					<div id="bgndVideo" class="player" data-property="{videoURL:'https://youtu.be/8MA3D8S4s7A',containment:'body',autoPlay:true, mute:true, startAt:0, opacity:1}">My video</div>
					<!-- <video width="100%" height="60%" preload="auto" autoplay="autoplay" loop="loop" poster="">
						<source src="{THEME}/video/video_bg.mp4" type="video/mp4"></source>
						<source src="{THEME}/video/video_bg.webm" type="video/webm"></source>
						<source src="{THEME}/video/video_bg.ogv" type="video/ogv"></source>
					</video> -->
				</div>
			</div>
			<!-- <section class="container padding-top-1x padding-bottom">
				<hr>
				<div class="row">
					{custom category="7" template="custom/adv" available="main" navigation="no" order="date" sort="desc" cache="yes"}
				</div>
			</section> -->
			<!-- .fw-section -->
			[/available] [not-available=main|showfull] [available=cat|filters_xf] [not-category=8]
			<!-- Shop Catalog -->
			<section class="container-fluid padding-top padding-bottom-3x ">
				<!-- Sidebar Toggle / visible only on mobile -->
				<div class="sidebar-toggle">
					<i class="material-icons filter_list"></i>
				</div>
				<div class="row padding-top">
					<!-- Sidebar (Filters) -->
					<div class="col-lg-2 col-md-4 col-sm-4">
						<aside class="sidebar">
							<span class="sidebar-close">
								<i class="material-icons close"></i>
							</span>
							<div class="widget widget-sorting">
								<form method="get" class="search-box">
									<input type="text" class="form-control" placeholder="Поиск">
									<button type="submit">
										<i class="material-icons search"></i>
									</button>
								</form>
								<hr> {include file="engine/modules/filters_xf.php"}
							</div>
						</aside>
					</div>
					<!-- <div class="widget widget-catesgories">
									<h3 class="widget-title">Цена</h3>
									<form method="post" class="price-range-slider" data-start-min="250" data-start-max="650" data-min="0" data-max="1000" data-step="1">
										<div class="ui-range-slider"></div>
										<footer class="ui-range-slider-footer">
											<div class="column">
												<button type="submit" class="btn btn-ghost btn-sm btn-default">Применить</button>
											</div>
											<div class="column">
												<div class="ui-range-values">
													<div class="ui-range-value-min">
														$
														<span></span>
														<input type="hidden">
													</div> -
													<div class="ui-range-value-max">
														$
														<span></span>
														<input type="hidden">
													</div>
												</div>
											</div>
										</footer>
									</form>
								</div>
								<div class="widget widget-color">
									<h3 class="widget-title">Цвет</h3>
									<ul>
										<li>
											<a href="#">
												<span class="color" style="background-color: #93c4ef;"></span> Голубой
											</a>
										</li>
										<li>
											<a href="#">
												<span class="color" style="background-color: #a7c04d;"></span> Зеленый
											</a>
										</li>
										<li>
											<a href="#">
												<span class="color" style="background-color: #ef0568;"></span> Красный
											</a>
										</li>
										<li>
											<a href="#">
												<span class="color" style="background-color: #ffce2b;"></span> Желтый
											</a>
										</li>
									</ul>
								</div>
								<div class="widget widget-tags">
									<h3 class="widget-title">Популярные теги</h3>
									<a href="#">Тег</a>
									<a href="#">Тег</a>
									<a href="#">Тег</a>
									<a href="#">Тег</a>
									<a href="#">Тег</a>
									<a href="#">Тег</a>
									<a href="#">Тег</a>
								</div> -->
					<div class="col-lg-10 col-md-8 col-sm-8">
						<div class="products-grid row cati">
							{content}
						</div>
					</div>
				</div>
				<!-- .row -->
			</section>
			<!-- .container -->
			[/not-category] [category=8]
			<!-- Featured Image -->
			<div class="featured-image"></div>
			<!-- Single Post Content -->
			<section class="single-post-wrap">
				<!-- Close Btn -->
				<span class="close-btn">
					<i class="material-icons close"></i>
				</span>
				<!-- Preloader -->
				<div class="preloader">
					<img src="{THEME}/img/preloader.gif" alt="Preloader">
				</div>
				<div class="inner">
					<div class="post-content">
						<!-- Content loaded via Ajax goes here -->
					</div>
					<!-- .post-content -->
					<!-- <div class="post-share">
						<span>Поделиться:&nbsp;&nbsp;&nbsp;</span>
						<div class="social-bar">
							<a href="#" class="sb-facebook" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
								<i class="socicon-facebook"></i>
							</a>
							<a href="#" class="sb-twitter" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
								<i class="socicon-twitter"></i>
							</a>
							<a href="#" class="sb-instagram" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
								<i class="socicon-instagram"></i>
							</a>
						</div>
					</div> -->
					<!-- .post-share -->
				</div>
				<!-- .inner -->
			</section>
			<!-- .single-post-wrap -->
			<!-- Single Post Backdrop -->
			<!-- <div class="single-post-backdrop"></div> -->
			<!-- Content -->
			<div class="blog-f cata ">
				<section class="container padding-top-3x padding-bottom">
					<h1>Новости</h1> {custom category="8" template="custom/blog" available="cat" navigation="no" order="date" sort="desc" cache="yes"}
				</section>
			</div>
			<!-- .container -->
			[/category] [/available] [/not-available] [aviable=favorites]
			<section class="container padding-top-3x padding-bottom">
				<h1>Список пожеланий</h1>
				<div class="container">
					<div class="row">
						{content}
					</div>
				</div>
			</section>
			[/aviable] [available=showfull|static|register|lostpassword|userinfo] {info} {content} [/available] [available=showfull] [not-category=8] [/available]
		</div>
	</div>
	<!-- Footer -->
	<footer class="footer">
		<div class="column">
			<h4>Нужна помощь? Позвони нам
			</h4>
			<p>
			<a href="tel:+308123456789">+380(123)-456-789</a>
			<br><a href="tel:+308123456789">+380(123)-456-789</a>
			<br><a href="tel:+308123456789">+380(123)-456-789</a>
			</p>
			<div class="social-bar text-center space-bottom">
				<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
				<script src="//yastatic.net/share2/share.js"></script>
				<div id="share">
					<div class="ya-share2" data-services="vkontakte,facebook,twitter"></div>
				</div>
			</div>
			<!-- .social-bar -->
			<p class="copyright">&copy; 2016. Все права защищены.</p>
		</div>
		<!-- .column -->
		<div class="column">
			<h4>
				О нас
			</h4>
			<p>Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов).</p>
			<a href="http://astor.idteam.info/about.html">Подробнее о нас</a>
		</div>
		<!-- .column -->
		<div class="column">
			<h4>
				Методы оплаты
			</h4>
			<p>Вы можете осуществить покупку с помощью следующих операторов.</p>
			<div class="cards">
				<img src="{THEME}/img/cards.png">
			</div>
			<!-- Scroll To Top Button -->
			<div class="scroll-to-top-btn">
				<i class="material-icons trending_flat"></i>
			</div>
		</div>
		<!-- .column -->
	</footer>
	<!-- .footer -->
	</div>
	<!-- .page-wrapper -->
	{jsfiles}
	<!-- JavaScript (jQuery) libraries, plugins and custom scripts -->
	<script src="{THEME}/js/jquery-2.1.4.min.js"></script>
	<script src="{THEME}/js/bootstrap.min.js"></script>
	<!-- <script src="{THEME}/js/jqueryui.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	{AJAX}
	<script src="{THEME}/js/smoothscroll.js"></script>
	<script src="{THEME}/js/velocity.min.js"></script>
	<script src="{THEME}/js/waves.min.js"></script>
	<script src="{THEME}/js/icheck.min.js"></script>
	<script src="{THEME}/js/owl.carousel.min.js"></script>
	<script src="{THEME}/js/nouislider.min.js"></script>
	<script src="{THEME}/js/jquery.downCount.js"></script>
	<script src="{THEME}/js/magnific-popup.min.js"></script>
	<script type="text/javascript" src="{THEME}/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="{THEME}/js/jquery.form.min.js"></script>
	<script type="text/javascript" src="{THEME}/js/parallax.min.js"></script>
	<script type="text/javascript" src="{THEME}/js/jquery.mb.YTPlayer.min.js"></script>
	<script type="text/javascript" src="{THEME}/js/sale.js"></script>
	<script type="text/javascript" src="{THEME}/js/filters_xf.js"></script>
	<script src="{THEME}/js/snap.svg-min.js"></script>
	<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
	<script src="{THEME}/js/scripts.js"></script>
</body>
<!-- <body> -->

</html>
[available=showfull] [/not-category] [/available]
