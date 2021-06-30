import React from 'react';
import './Login.css';

function LoginPage(params) {
    return(
        <div className="box-page">
            <div class="flash-vente">
                <img src="https://image.freepik.com/free-vector/flash-sale-discount-banner_1017-19822.jpg"></img>
            </div>
            <div className="box">
                <h2>S'identifier</h2>
                <p>Adresse e-mail ou numéro de téléphone portable</p>
                <input type="text"/>
                <div className="button-continue">
                <button in="bar-width" type="button" class="btn btn-light" ><span>continue</span></button>
                </div>
                <div className="login-text">
                <p>En passant votre commande, vous acceptez les Conditions générales de vente d’Amazon. Veuillez consulter notre Notice Protection de vos informations personnelles, notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.</p>
                </div>
                <div className="mdp">
                <p>Mot de passe oublié ?</p>
                <p>Autres problèmes de connexion ?</p>
                </div>
            <div className="button-continue btn1">
                <button class="btn btn-light">Login - click Here</button>
            </div>
            </div>
           
        </div>
    );
}
export default LoginPage;