		<footer id="main-footer">
			<div  id="back-top-btn">
				<a href="#top">
					Retour au haut
				</a>
			</div>
			<div id="footer-content">
				<ul>
					<li>
						&copy; Elocyclo 2012, tous droits reservés
					</li>
					<li>
						<a href="#" title="Mentions légales <?php echo $siteName; ?>">Mentions légales</a>
					</li>
					<li>
						<a href="#" title="Plan du site <?php echo $siteName; ?>">Plan du site</a>
					</li>
					<li>
						<a href="#" title="Contact <?php echo $siteName; ?>">Contact</a>
					</li>
					<li>
						<a href="mailto:info@elocyclo.org" title="Contact <?php echo $siteName; ?>">info@elocyclo.org</a>
					</li>
				</ul>
			</div>
		</footer>
	</div>

<script src="js/actions.js"></script>
<?php if ($pageName == 'Accueil'){?>
<script src="js/responsiveslides.min.js"></script>
<script>
	$(document).ready(function () {
	
		$("#slider ul").responsiveSlides({
			auto: false,
			pager: true,
			nav: false,
			speed: 100,
			controls: '#slider-nav'
		});
		
		$('#home-about-tab-nav').tabify();
	
	});
</script>
<?php } else{}; 
if ($tabPage){?>
<script>
	$(document).ready(function () {
		$('#tab-nav').tabify();
	});
</script>
<?php }else{};?>
</body>
</html>