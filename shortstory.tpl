[catlist=3-4]
<div class="col-lg-[aviable=cat|filters_xf]3[/aviable][aviable=favorites|search]3[/aviable] col-sm-6">
	<div class="shop-item">
		<div class="shop-thumbnail">
			<div class="prod-info">
				[xfgiven_hit]
				<span class="shop-label text-danger">Хит продаж</span>[/xfgiven_hit] [xfgiven_new]
				<span class="shop-label text-danger new-prod">Новинка</span>[/xfgiven_new]
			</div>
			[xfgiven_price-new]
			<div class="svg-sale">
				<svg width="100px" height="100px">
					<defs>
						<mask id="mask-{news-id}" x="0" y="0" width="100px" height="100px">
							<rect class="alpha" x="0" y="0" width="100px" height="100px"/>
							<text class="title" x="50%" y="50%" dy=".35em">-[xfvalue_price-new]%</text>
						</mask>
					</defs>
					<!-- <text class="before-title" x="20%" y="50%" dy=".35em">-</text> -->
					<circle mask="url('#mask-{news-id}')" class="base" cx="50" cy="50" width="100%" height="100%" r="30"/>
					<!-- <text id="after-title" x="85%" y="50%" dy=".35em">%</text> -->
				</svg>
			</div>
			[/xfgiven_price-new]
			<div class="product-image-container">
				<a href="{full-link}" class="item-link">
					<img src="[xfvalue_thumb_url_photo-1000]">
				</a>
				[xfgiven_gal]
				<ul class="product-thumbs nt-open">
					{gallery}
				</ul>
				[/xfgiven_gal]
			</div>
			<div class="shop-item-tools">
				{favorites} [buy]
				<em>В корзину</em>
				<svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
					<path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
				</svg>
				[/buy]
			</div>
		</div>
		<div class="shop-item-details">
			<h3 class="shop-item-title">
				<a href="#">{title}</a>
			</h3>
			<span class="shop-item-price">
				{price-real}{price-old}
			</span>
		</div>
	</div>
</div>
[/catlist]
