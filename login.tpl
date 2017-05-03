[not-group=5]
<div class="row">
	<div class="col-md-5">
		<div class="avatar">
			<img src="{foto}" style="width:100%" class="img-responsive img-thumbnail">
		</div>
	</div>
	<div class="col-md-7">
		<ul class="main-navigation space-bottom">
			<li><a title="Личный кабинет" href="{profile-link}"><i class="fa fa-home" aria-hidden="true"></i><span>{login}</span></a></li>
			[admin-link]
			<li><a title="Админпанель" target="_blank" href="{admin-link}"><i class="fa fa-cog" aria-hidden="true"></i><span>Админпанель</span></a></li>
			[/admin-link]
			<li><a title="Список пожеланий" href="{favorites-link}"><i class="fa fa-heart" aria-hidden="true"></i><span>Список пожеланий</span>
			({include file="engine/modules/favor.php?&template=favor"})</a></li>
			<li><a title="Выход" href="{logout-link}"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Выход</span></a></li>
		</ul>
	</div>
</div>
[/not-group]
[group=5]


<h3 class="toolbar-title space-bottom">Вы не залогинились.</h3>
<div class="inner">
	<form method="post" class="login-form">
		<input type="text" class="form-control" placeholder="Логин" name="login_name" id="login_name" required>
		<input type="password" class="form-control" placeholder="Пароль" name="login_password" id="login_password" required>
		<div class="form-footer">
			<div class="rememberme">
				<label class="checkbox">
					<input type="checkbox" checked> Запомнить меня
				</label>
				<a href="#forgot" class="toggle-section">Забыли пароль?</a>
			</div>
			<div class="form-submit">
				<input name="login" type="hidden" id="login" value="submit">
				<button type="submit" class="btn btn-primary btn-block waves-effect waves-light">Зайти</button>
			</div>
		</div>
	</form>
	<!-- .login-form -->
	<p class="text-sm space-top">Не зарегестрированы? <a href="#signup" class="toggle-section">Регистрация здесь</a> или используйте аккаунт соц. сети:</p>
	[facebook]
	<a href="{facebook_url}" class="social-signup-btn ssb-facebook">
		<i class="socicon-facebook"></i>
		<span>С помощью Facebook</span>
	</a>
	[/facebook]
	<a href="#" class="social-signup-btn ssb-google">
		<i class="socicon-googleplus"></i>
		<span>С помощью Google+</span>
	</a>
	<a href="#" class="social-signup-btn ssb-twitter">
		<i class="socicon-twitter"></i>
		<span>С помощью Twitter</span>
	</a>
</div>
<!-- .inner -->


[/group]