<div id="slide{news-id}">
	<div class="left-side"><span>{short-story}</span>
		[xfgiven_link-1]<a href="[xfvalue_link-1]" class="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">Подробнее</a>[/xfgiven_link-1]
	</div>
	<div class="right-side"><span>{full-story}</span>
		[xfgiven_link-2]<a href="[xfvalue_link-2]" class="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">Подробнее</a>[/xfgiven_link-2]
	</div>
	<svg class="slide{news-id}" width="100%" height="100%" viewbox="0 0 160 65">
		<defs>
			<radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
				<stop stop-color="#222" offset = "0%"/>
				<stop stop-color="#000" offset = "100%"/>
			</radialGradient>
			<radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
				<stop stop-color="#222" offset = "0%"/>
				<stop stop-color="#000" offset = "100%"/>
			</radialGradient>
			<radialGradient id="lineopacity" cx="50%" cy="50%" r="50%">
				<stop stop-opacity="1" stop-color="gold" offset = "0%"/>
				<stop stop-opacity="0" stop-color="#fff" offset = "100%"/>
			</radialGradient>
			<radialGradient id="lineopacity2" cx="50%" cy="50%" r="50%">
				<stop stop-opacity="1" stop-color="#901d78" offset = "0%"/>
				<stop stop-opacity="0" stop-color="##901d78" offset = "90%"/>
			</radialGradient>
			<pattern id="bg" patternUnits="userSpaceOnUse" width="14" height="14">
				<image xlink:href="/templates/astor/images/podium.jpg" x="0" y="0" width="14" height="14" />
			</pattern>
		</defs>
		<g>
			<rect height="100%" width="100%" x="0" y="0" fill="url(#gradient1)" />
			<image xlink:href="[xfvalue_image_url_photo-1920]" x="0" y="0" width="100%" height="100%" />
		</g>
		<g mask="url('#masking{news-id}')">
			<rect height="100%" width="100%" x="0" y="0" fill="url(#gradient1)" />
			<image xlink:href="[xfvalue_image_url_photo-1920-2]" x="0" y="0" width="100%" height="100%" />
		</g>
		<g class="lines2">
			<line x1="90" x2="70" y1="0" y2="65" stroke="url(#lineopacity2)" stroke-width="3" vector-effect="non-scaling-stroke" />
		</g>
		<g class="lines">
			<line x1="90" x2="70" y1="0" y2="65" stroke="url(#lineopacity)" stroke-width="3" vector-effect="non-scaling-stroke" />
		</g>
		<mask id="masking{news-id}" class="masking">
			<rect height="100%" width="100%" x="0" y="0" />
			<path d="M0,0 90,0 70,65 0,65z" />
		</mask>
	</svg>
</div>
