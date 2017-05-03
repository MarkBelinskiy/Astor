[static=order]{include file="engine/modules/sale.php?do=order"}[/static] [static=contacts]
<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=ORuFrqQIkDrF_ePnM80mzdg6OeLZHZFL&amp;width=100%25&amp;scroll=false&amp;height=480&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
<section class="container-fluid cata">
	<div class="row">
		<section class="container space-top-3x">
			<h1>Контакты</h1>
			<div class="row padding-top">
				<div class="col-sm-5 padding-bottom-2x">
					<ul class="list-icon">
						<li>
							<i class="material-icons location_on"></i> ул. Пушкина д. Колотушкина Украина
						</li>
						<li>
							<i class="material-icons location_on"></i> пр. Петровско-Разувомский д. Колотушкина Украина
						</li>
						<li>
							<i class="material-icons phone"></i> 001 (917) 555-4836
						</li>
						<li>
							<i class="material-icons phone_iphone"></i> 001 (800) 333-6578
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
					<p>Работаем:
						<span class="text-gray">10
							<sup>00</sup> - 16
							<sup>00</sup>, Пн - Пт</span>
					</p>
				</div>
				<div class="col-sm-7 padding-bottom-2x">
					<form method="post" id="contact" class="ajax-form" action="/sendmail.php">
						<div class="contact-form container">
							<div class="row">
								<div class="col-sm-4">
									<div class="form-element">
										<input type="text" class="form-control" name="name" placeholder="Имя">
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-element">
										<input type="email" class="form-control" name="email" placeholder="E-mail">
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-element">
										<input type="text" class="form-control" name="tel" placeholder="Телефон">
									</div>
								</div>
							</div>
							<div class="form-element">
								<textarea rows="6" class="form-control" name="message" placeholder="Сообщение" required></textarea>
							</div>
							<button type="submit" class="btn btn-primary btn-block waves-effect waves-light space-top-none">Отправить</button>
						</div>
						<div class="status-message"></div>
					</form>
				</div>
			</div>
		</section>
	</div>
</section>
[/static] [static=about]
<section class="container-fluid cata">
	<div class="row">
		<section class="container padding-top-3x padding-bottom-3x cata">
			<h1>О нас</h1>
			<div class="row padding-top">
				<div class="col-md-12 padding-bottom blog-t">
					{static}
				</div>
			</div>
		</section>
	</div>
</section>
<div class="fw-section space-top-2x video-b " data-parallax="scroll" data-position="center bottom">
	<div id="video-bg" class="videopop">
		<div id="bgndVideo" class="player" data-property="{videoURL:'https://youtu.be/q8OQXulgW4k',containment:'body',autoPlay:true, mute:true, startAt:0, opacity:1}">My video</div>
	</div>
</div>
[/static]
