import React from 'react';
import './Footer.css';
// import BackToTop from "react-back-to-top";


function footer() {
    return(
        <div className="footer">
            <div className="footer-title" > 
                <BackToTop
                        showOnScrollUp
                        showAt={100}
                        speed={1500}
                        easing="easeInOutQuint">
                        <span>scroll up</span>
                </BackToTop>
            </div>

            <div className="footer-background">
                <div className="footer-banner">
                <div className="footer-categorie">
                    <div>
                        <ul>
                            <h3>Acheter</h3>
                            <li><a href="#">Comment acheter</a></li>
                            <li><a href="#">Categorie</a></li>
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Livraison</a></li>
                            <li><a href="#">Marques</a></li>
                        </ul>
                    </div>
                    <div className="footer-icon">
                    <img  src='https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png' 
                    alt=""/>
                    
                    </div>
                    <div>
                    <ul>
                            <h3>Customer Service</h3>
                            <li><a href="#">Covid-19</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Actualitée</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ & Support</a></li>
                            <li><a href="#">ENSA-H store</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                </div>
                
            </div>
            
            
            <div className="icons-payments">
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png"></img>
                </a>
                <a>
                    <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png"></img>
                </a>

            </div> 
            <div className="Copyright">Copyright 2020-2021 - tous droits réservés à ENSA-H Student</div>

        </div>
    );
    
}
export default footer;