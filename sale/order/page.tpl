<div class="featured-image" style="background-image: url({THEME}/img/about.jpg);"></div>

<!-- Content -->
<section class="container padding-top-3x padding-bottom-3x">
	<h1>Корзина</h1>
	<hr>
	<div class="sale-order-page">
		<table class="sale-full-order">
			<tbody>
				{items}
			</tbody>
		</table>
		[onoff-discount]
		<div class="sale-order-discounts">
			{discounts}
		</div>
		<div class="sale-user-discount">
			[user-discount]Ваша накопленная скидка <b>{discount}%</b>[/user-discount]
			[next-discount]Ваша скидка на <b>{next}-ю</b> покупку <b>{discount}%</b>[/next-discount]
			[total-discount]Скидка <b>{discount}%</b> на все товары[/total-discount]
			{text}
			[first]<div class="sale-reg-for-dis"><i class="fa fa-info"></i> <a href="/index.php?do=register"><b>Зарегистрируйся</b></a> и получи скидку в <b>{first}%</b> на первую покупку!</div>[/first]
		</div>
		[/onoff-discount]
		<div class="sale-buy-info">
			[if-discount]Без скидок: {no-discount}[/if-discount]<span>Товаров: <b>{count}</b> / На сумму: <b>{total}</b></span>
		</div>
	</div>
</section>