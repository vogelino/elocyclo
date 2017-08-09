import React from 'react';

export default () => (
	<div id="container">
		<section className="noisy">
			<form method="post" className="white-box" id="subscribe-form">
				<div className="fifif">
					<h3>Nous contacter</h3>
					<label>
						Nom et prénom: <input type="text" name="nom-prenom" />
					</label>
					<label>
						Adresse e-mail: <input type="text" name="email" />
					</label>
					<label>
						Objet du mail: <input type="text" name="object" />
					</label>
					<label>
						Message: <textarea name="message" />
					</label>
					<input type="submit" className="simple-button gradient" value="Envoyer" />
				</div>
			</form>
		</section>
	</div>
);
