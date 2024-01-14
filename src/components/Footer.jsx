import Button  from './ui/Button'
import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './footer.style'






const Footer = () => {
  return (
    <div className='' style={{backgroundColor:'black'}}>
        <div class="" style={{backgroundColor:'black'}}>

            <footer style={{backgroundColor:"grey"}}className="text-center text-lg-start">
            <div className="container p-4">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">Nous contacter</h5>

                <ul className="list-unstyled mb-4">
                    <li>
                    <a href="#!" className="text-white">ardi@gmail.com</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">ardi2@gmail.com</a>
                    </li>

                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">Information</h5>

                <ul className="list-unstyled">
                    <li>
                    <a href="#!" className="text-white">FAQs</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Qui sommes nous ?</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Politique de confidentialité</a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">Services</h5>

                <ul className="list-unstyled">
                    <li>
                    <a href="#!" className="text-white">Mode de paiement</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Signaler un produit</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Comment acheter chez nous ?</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Retour et remboursement</a>
                    </li>
                </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">S'inscrire à notre newsletter</h5>

                <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" className="form-control" />
                    <label className="form-label text-white" for="form5Example2" >Adresse mail</label>
                    <StyledButton> sqd</StyledButton>

                </div>

                </div>
            </div>
            </div>

            <div class="text-center p-3 border-top border-black text-white">
            © 2024 Copyright:
            <a class="text-white" href="#">patrick mulu</a>
            </div>
        </footer>
        
        </div>
    </div>
  )
}

export default Footer
