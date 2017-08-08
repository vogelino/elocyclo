<?php
	$siteUrl = 'http://demo.vogelino.ch/elocyclo';
	$siteName = '| Elocyclo, take it and live it | Location de vélos éléctriques à Monreux';
	
	switch ($pageName) {
		case 'Accueil':
			$homeActivity = "active";
			break;
		case 'À propos':
			$elocycloActivity = "active";
			$aboutActivity = "active";
			break;
		case 'Les stations':
			$elocycloActivity = "active";
			$stationsActivity = "active";
			break;
		case 'Inscription':
			$elocycloActivity = "active";
			$inscriptionActivity = "active";
			break;/*
		case 'Les vélos':
			$elocycloActivity = "active";
			$velosActivity = "active";
			break;*/
		case 'Actualités':
			$actuActivity = "active";
			break;
		case 'Contact':
			$contactActivity = "active";
			break;
	}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<title><?php echo $pageName; ?> <?php echo $siteName; ?></title>

<link rel="stylesheet" type="text/css" href="css/resetbrowser.css"/>
<link rel="stylesheet" type="text/css" href="css/main.css" />

<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js"></script>

<!--[if gte IE 9]>
  <style type="text/css">
    .gradient {
       filter: none;
    }
  </style>
<![endif]-->

</head>

<body id="top">
<div id="head-container" class="row bordered">
		<header class="noisy" id="main-header">
			<a id="logo" href="<?php echo $siteUrl; ?>" title="Accueil <?php echo $siteName; ?>"></a>
			<nav>
				<ul>
					<li>
						<a class="simple-button <?php echo $homeActivity; ?> gradient" href="<?php echo $siteUrl; ?>" title="Accueil <?php echo $siteName; ?>">Accueil</a>
					</li>
					<li>
						<div class="simple-button select-button gradient <?php echo $elocycloActivity; ?>" id="menu-select">
							L'association
							<section class="simple-button">
								<small class="rotate">&#123;</small>
							</section>
							<ul>
								<li>
									<a href="<?php echo $siteUrl; ?>/a-propos.php" title="À propos <?php echo $siteName; ?>" class=" <?php echo $aboutActivity; ?>">À propos</a>
								</li>
								<li>
									<a href="<?php echo $siteUrl; ?>/les-stations.php" title="Les stations <?php echo $siteName; ?>" class=" <?php echo $stationsActivity; ?>">Les stations</a>
								</li>
								<li>
									<a href="<?php echo $siteUrl; ?>/inscription.php" title="Inscription <?php echo $siteName; ?>" class=" <?php echo $inscriptionActivity; ?>">Inscription</a>
								</li>
								<!--<li>
									<a href="<?php echo $siteUrl; ?>/les-velos.php" title="Les vélos <?php echo $siteName; ?>" class=" <?php echo $velosActivity; ?>">Les vélos</a>
								</li>-->
							</ul>
						</div>
					</li>
					<li>
						<a class="simple-button gradient <?php echo $actuActivity; ?>" href="<?php echo $siteUrl; ?>/actualites.php" title="Actualités <?php echo $siteName; ?>">Actualités</a>
					</li>
					<li>
						<a class="simple-button gradient <?php echo $contactActivity; ?>" href="<?php echo $siteUrl; ?>/contact.php" title="Actualités <?php echo $siteName; ?>">Contact</a>
					</li>
				</ul>
			</nav>
			<ul id="lang-n-search">
				<li>
					<div class="simple-button gradient" id="mobile-menu-button">
						<span>Menu</span>
						<small>
							<b>i</b>
							<b>X</b>
						</small>
					</div>
				</li>
				<!--<li>
					<div class="simple-button active select-button lang-switch gradient">
						Fr
						<section class="lang-switch-button">
								<small class="rotate">&#123;</small>
						</section>
						<ul>
							<li>
								<a class="active" href="#" title="<?php echo $siteName; ?>">Fr</a>
							</li>
							<li>
								<a href="#" title="<?php echo $siteName; ?>">De</a>
							</li>
							<li>
								<a href="#" title="<?php echo $siteName; ?>">En</a>
							</li>
							<li>
								<a href="#" title="<?php echo $siteName; ?>">It</a>
							</li>
						</ul>
					</div>
				</li>-->
				<li>
					<div class="simple-button gradient" id="search-button">
						<small>
							<b>&ocirc;</b>
							<b>X</b>
						</small>
						<form>
							<input type="text" value="Search something" />
							<input type="submit" value="&ocirc;" />
						</form>
					</div>
				</li>
			</ul>
		</header>
	</div>