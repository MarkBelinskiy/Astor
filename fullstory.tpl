[not-catlist=8]
<!-- Pager + Product Gallery -->
<section class="fw-section bg-gray bg-leather padding-top-3x">
	<!-- Page Navigation -->
	{custom id="{prev-news}" template="custom/prev-item" available="global" cache="yes"} {custom id="{next-news}" template="custom/next-item" available="global" cache="yes"}
	<div class="container padding-top">
		<!-- Product Gallery -->
		<div class="product-gallery">
			<!-- Preview -->
			<ul class="product-gallery-preview">
				{gallery}
			</ul>
			<!-- .product-gallery-preview -->
			<!-- Thumblist -->
			<ul class="product-gallery-thumblist">
				<!-- <li class="active"><a href="#preview02"><img src="[xfvalue_image_url_photo-1000]" alt="Product"></a></li> -->
				{gallery-thumb}
			</ul>
			<!-- .product-gallery-thumblist -->
		</div>
		<!-- .product-gallery -->
	</div>
	<!-- .container -->
	<div class="container">
		<div class="product-info padding-bottom text-center">
			<div class="inline-block">
				<h1 class="h2 space-bottom-half">{title}{favorites}</h1>
			</div>
			<h2>{price-real}{price-old}</h2>
			<p class="text-gray">{short-story}</p>
			<div class="product-meta">
				<div class="product-sku">
					<strong>Артикул: </strong>
					<span>[xfvalue_artikul]</span>
				</div>
				<div class="product-category">
					<strong>Категория: </strong>
					<a href="{category-url}">{category}</a>
				</div>
			</div>
			<!-- .product-meta -->
			<div class="row">
				<div class="product-tools shop-item col-xs-12">
					[xfgiven_price]
					<div class="count-input col-md-8 col-xs-12 ">
						{options}
					</div>
					[/xfgiven_price]
					<div class="col-md-4 col-xs-12">
						[buy]
						<em>В корзину</em>
						<svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
							<path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"></path>
						</svg>
						[/buy]
						<!-- .add-to-cart -->
					</div>
				</div>
				<!-- .product-tools -->
			</div>
			<div class="product-share">
				<span>Поделиться: </span>
				<div class="social-bar">
					<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
					<script src="//yastatic.net/share2/share.js"></script>
					<div id="share">
						<div class="ya-share2" data-services="vkontakte,facebook,twitter"></div>
					</div>
				</div>
			</div>
			<!-- .product-share -->
		</div>
		<!-- .product-info -->
	</div>
	<!-- .container -->
</section>
<!-- .fw-section.bg-gray -->
<!-- Product Tabs -->
<section class="container-fluid cata padding-bottom">
	<div class="row">
		<section class="container padding-top-2x padding-bottom-2x">
			<!-- Nav Tabs -->
			<ul class="nav-tabs text-center" role="tablist">
				<li class="active">
					<a href="#description" role="tab" data-toggle="tab">
						<i class="material-icons">info_outline</i> Описание</a>
				</li>
				<li>
					<a href="#additional" role="tab" data-toggle="tab">
						<i class="material-icons">settings</i> Характеристики</a>
				</li>
				<!-- <li>
					<a href="#reviews" role="tab" data-toggle="tab">
						<i class="material-icons">chat_bubble_outline</i> Отзывы
						<sup></sup>
					</a>
				</li> -->
			</ul>
			<!-- .nav-tabs -->
			<!-- Tab panes -->
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane transition fade in active" id="description">
					<div class="row space-top">
						<div class="col-md-6 space-bottom">
							<div class="embed-responsive embed-responsive-16by9">
								<iframe src="https://player.vimeo.com/video/105829213?color=77cde3&title=0&byline=0&portrait=0" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-md-6">
							{full-story}
						</div>
					</div>
				</div>
				<!-- .tab-pane -->
				<div role="tabpanel" class="tab-pane transition fade" id="additional">
					<div class="row">
						<div class="col-md-6">
							<table class="table-no-border">
								[xfgiven_artikul]
								<tr>
									<th>Артикул:</th>
									<td>[xfvalue_artikul]</td>
								</tr>
								[/xfgiven_artikul] [xfgiven_manufacter]
								<tr>
									<th>Производитель:</th>
									<td>[xfvalue_manufacter]</td>
								</tr>
								[/xfgiven_manufacter] [xfgiven_size]
								<tr>
									<th>Размеры:</th>
									<td>[xfvalue_size]</td>
								</tr>
								[/xfgiven_size]
							</table>
						</div>
						<div class="col-md-6">
							<table class="table-no-border">
								[xfgiven_color]
								<tr>
									<th>Цвета:</th>
									<td>[xfvalue_color]</td>
								</tr>
								[/xfgiven_color] [xfgiven_other]
								<tr>
									<th>Другая информация:</th>
									<td>[xfvalue_other]</td>
								</tr>
								[/xfgiven_other] [xfgiven_type]
								<tr>
									<th>Вид мебели:</th>
									<td>[xfvalue_type]</td>
								</tr>
								[/xfgiven_type]
							</table>
						</div>
					</div>
				</div>
				<!-- .tab-pane -->
				<!-- <div role="tabpanel" class="tab-pane transition fade" id="reviews">
					Review
					<div class="review">
						<div class="review-author-ava">
							<img src="{THEME}/img/01_r.jpg" alt="Review Author">
						</div>
						<div class="review-body">
							<div class="review-meta">
								<div class="column">
									<h4 class="review-title">Очень стильно, супер сделка!</h4>
								</div>
								<div class="column">
								</div>
							</div>
							<p>Подробный классный отзыв.</p>
							<cite>Новый Вася</cite>
						</div>
					</div>
					.review
					Reviview Form
					<h4 class="padding-top">Оставить отзыв</h4>
					<form method="post" class="row padding-top">
						<div class="col-sm-6">
							<div class="form-element">
								<input type="text" class="form-control" placeholder="Имя*" required>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-element">
								<input type="email" class="form-control" placeholder="Email*" required>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-element">
								<textarea rows="8" class="form-control" placeholder="Отзыв*" required></textarea>
							</div>
							<div class="row">
								<div class="col-lg-3 col-md-4 col-sm-6 col-lg-offset-9 col-md-offset-8 col-sm-offset-6">
									<button type="submit" class="btn btn-block btn-primary waves-effect waves-light space-top-none space-bottom-none">Оставить отзыв</button>
								</div>
							</div>
						</div>
					</form>
					.row
				</div> -->
				<!-- .tab-pane -->
			</div>
			<!-- .tab-content -->
		</section>
		<!-- .container -->
	</div>
</section>
<!-- .container -->
<!-- Related Products -->
<section class="container padding-bottom">
	<h3 class="padding-top">Так же обратите внимание на другие товары этой категории</h3>
	<div class="row padding-top">
		{custom category="{category-id}" idexclude="{news-id}" template="custom/sale-block-main" limit="4" available="global" navigation="no" order="date" sort="desc" cache="no"}
	</div>
	<!-- .row -->
</section>
<!-- .container -->
[/not-catlist] [catlist=8]
<!-- Content should always be inside "article.single-post" -->
<article class="single-post">
	<h2>{title}</h2>
	<img src="[xfvalue_image_url_photo-1000]" class="space-bottom" alt="Post">
	<div class="blog-t">{full-story}</p>
		<hr>
		<!-- <div class="blog-post-meta">
		<div class="column">
			<span>by </span>
			<a href="#">{author}</a>
			<span class="divider"></span>
			<a href="#">{date}</a>
			<span class="divider"></span>
			<a href="#">#tagname</a>
		</div>
		<div class="column">
			<a href="#">
				<i class="material-icons favorite_border"></i>
				13
			</a>
		</div>
	</div> -->
		<!-- .blog-post-meta -->
</article>
<!-- .single-post -->
[/catlist]
