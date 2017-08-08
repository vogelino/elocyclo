	<?php 
	$pageName = 'Contact';
	$tabPage = false;
	include 'header.php'; ?>
	<div id="slider-container" class="page-slider-container">
		<section id="slider" class="page-slider">
			<ul class="row">
				<li>
					<blockquote class="full">
						<p>
							<strong>À l'écoute de toute question!</strong>
						</p>
					</blockquote>
				</li>
			</ul>
			<nav id="slider-nav"></nav>
		</section>
	</div>
	<div id="container">
		<section class="noisy">
			<form method="post" class="white-box" id="subscribe-form">
				<div class="fifif">
					<h3>Nous contacter</h3>
					<label>
						Nom et prénom: <input type="text" name="nom-prenom"/>
					</label>
					<label>
						Adresse e-mail: <input type="text" name="email"/>
					</label>
					<label>
						Objet du mail: <input type="text" name="object"/>
					</label>
					<label>
						Message: <textarea name="message"></textarea>
					</label>
					<input type="submit" class="simple-button gradient" value="Envoyer"/>
				</div>
			</form>
		</section>
		<?php include 'footer.php';?>
