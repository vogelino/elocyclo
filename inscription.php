	<?php 
	$pageName = 'Inscription';
	$tabPage = false;
	include 'header.php'; ?>
	<div id="slider-container" class="page-slider-container">
		<section id="slider" class="page-slider">
			<ul class="row">
				<li>
					<blockquote class="full">
						<p>
							<strong>Autant accessible que facile à utiliser!</strong>
						</p>
					</blockquote>
				</li>
			</ul>
			<nav id="slider-nav"></nav>
		</section>
	</div>
	<div id="container">
		<section class="noisy">
			<section class="white-box tabs" id="inscrip-txt">
				<h2>S'inscrire à Elocyclo</h2>
				<p>
					L’usage des vélos électrique est gratuit. Seule l’inscription est payante !
					CHFr 50.- pour un an.<br/>
					L’usage est réservé aux majeurs (18 ans révolus)<br/><br/>
					Nous vous enverrons par courrier une carte électronique de membre, avec son code PIN.<br/> Vous
					insérez cette carte dans les lecteurs des bornes interactives de nos stations Elocyclo pour employer
					un vélo Elocyclo.						
				</p>
			</section>
			<form method="post" class="white-box" id="subscribe-form">
				<div class="fifif">
					<h3>Informations de base</h3>
					<label>
						Nom: <input type="text" name="nom"/>
					</label>
					<label>
						Prénom: <input type="text" name="prenom"/>
					</label>
					<div class="label">
						Date de naissance: <br/>
						<select name="jour" class="simple-button select-button gradient"> 
							<option value="01" >01</option>
							<option value="02" >02</option>
							<option value="03" >03</option>
							<option value="04" >04</option>
							<option value="05" >05</option>
							<option value="06" >06</option>
							<option value="07" >07</option>
							<option value="08" >08</option>
							<option value="09" >09</option>
							<option value="10" >10</option>
							<option value="11" >11</option>
							<option value="12" >12</option>
							<option value="13" >13</option>
							<option value="14" >14</option>
							<option value="15" >15</option>
							<option value="16" >16</option>
							<option value="17" >17</option>
							<option value="18" >18</option>
							<option value="19" >19</option>
							<option value="20" >20</option>
							<option value="21" >21</option>
							<option value="22" >22</option>
							<option value="23" >23</option>
							<option value="24" >24</option>
							<option value="25" >25</option>
							<option value="26" >26</option>
							<option value="27" >27</option>
							<option value="28" >28</option>
							<option value="29" >29</option>
							<option value="30" >30</option>
							<option value="31" >31</option>
						</select>
						<select name="mois" class="simple-button select-button gradient"> 
							<option value="janvier" >janvier</option>
							<option value="fevrier" >février</option>
							<option value="mars" >mars</option>
							<option value="avril" >avril</option>
							<option value="mai" >mai</option>
							<option value="juin" >juin</option>
							<option value="juillet" >juillet</option>
							<option value="aout" >août</option>
							<option value="semptembre" >semptembre</option>
							<option value="octobre" >octobre</option>
							<option value="novembre" >novembre</option>
							<option value="decembre" >décembre</option>
						</select>
						<select name="birthyear" class="simple-button select-button gradient">
							<option value="1994">1994</option>
							<option value="1993">1993</option>
							<option value="1992">1992</option>
							<option value="1991">1991</option>
							<option value="1990">1990</option>
							<option value="1989">1989</option>
							<option value="1988">1988</option>
							<option value="1987">1987</option>
							<option value="1986">1986</option>
							<option value="1985">1985</option>
							<option value="1984">1984</option>
							<option value="1983">1983</option>
							<option value="1982">1982</option>
							<option value="1981">1981</option>
							<option value="1980">1980</option>
							<option value="1979">1979</option>
							<option value="1978">1978</option>
							<option value="1977">1977</option>
							<option value="1976">1976</option>
							<option value="1975">1975</option>
							<option value="1974">1974</option>
							<option value="1973">1973</option>
							<option value="1972">1972</option>
							<option value="1971">1971</option>
							<option value="1970">1970</option>
							<option value="1969">1969</option>
							<option value="1968">1968</option>
							<option value="1967">1967</option>
							<option value="1966">1966</option>
							<option value="1965">1965</option>
							<option value="1964">1964</option>
							<option value="1963">1963</option>
							<option value="1962">1962</option>
							<option value="1961">1961</option>
							<option value="1960">1960</option>
							<option value="1959">1959</option>
							<option value="1958">1958</option>
							<option value="1957">1957</option>
							<option value="1956">1956</option>
							<option value="1955">1955</option>
							<option value="1954">1954</option>
							<option value="1953">1953</option>
							<option value="1952">1952</option>
							<option value="1951">1951</option>
							<option value="1950">1950</option>
							<option value="1949">1949</option>
							<option value="1948">1948</option>
							<option value="1947">1947</option>
							<option value="1946">1946</option>
							<option value="1945">1945</option>
							<option value="1944">1944</option>
							<option value="1943">1943</option>
							<option value="1942">1942</option>
							<option value="1941">1941</option>
							<option value="1940">1940</option>
							<option value="1939">1939</option>
							<option value="1938">1938</option>
							<option value="1937">1937</option>
							<option value="1936">1936</option>
							<option value="1935">1935</option>
							<option value="1934">1934</option>
							<option value="1933">1933</option>
							<option value="1932">1932</option>
							<option value="1931">1931</option>
							<option value="1930">1930</option>
							<option value="1929">1929</option>
							<option value="1928">1928</option>
							<option value="1927">1927</option>
							<option value="1926">1926</option>
							<option value="1925">1925</option>
							<option value="1924">1924</option>
							<option value="1923">1923</option>
							<option value="1922">1922</option>
							<option value="1921">1921</option>
							<option value="1920">1920</option>
							<option value="1919">1919</option>
							<option value="1918">1918</option>
							<option value="1917">1917</option>
							<option value="1916">1916</option>
							<option value="1915">1915</option>
							<option value="1914">1914</option>
							<option value="1913">1913</option>
							<option value="1912">1912</option>
							<option value="1911">1911</option>
							<option value="1910">1910</option>
							<option value="1909">1909</option>
							<option value="1908">1908</option>
							<option value="1907">1907</option>
							<option value="1906">1906</option>
							<option value="1905">1905</option>
							<option value="1904">1904</option>
							<option value="1903">1903</option>
							<option value="1902">1902</option>
							<option value="1901">1901</option>
							<option value="1900">1900</option>
						</select>
					</div>
					<label>
						Adresse (rue): <input type="text" name="rue"/>
					</label>
					<label>
						Adresse (NPA, ville): <input type="text" name="ville"/>
					</label>
					<label>
						Adresse e-mail: <input type="text" name="email"/>
					</label>
					<label>
						N° de téléphone: <input type="text" name="telef"/>
					</label>
				</div>
				<div class="fifif">
					<h3>Informations de carte de crédit</h3>
					<label>
						Nom du possesseur: <input type="text" name="nomcarte"/>
					</label>
					<label>
						Numéro à 16 chiffres: <input type="text" name="nocarte"/>
					</label>
					<label>
						Date de validité (JJ/MM/AAAA): <input type="text" name="validcarte"/>
					</label>
					<label>
						Numéro de sécurité à 3 chiffres: <input type="text" name="nosecu"/>
					</label>
				</div>
				<input type="submit"  id="want-it" class="about-want gradient" value="M'inscrire"/>
			</form>
		</section>
		<?php include 'footer.php';?>
