import React from "react";

import Basquete from "../../assents/basquete.jpg";
import Futebol from "../../assents/futebol.jpg";
import Volei from "../../assents/volei.jpg";
import "./cards.css";

function Cards () {
    return (
        <>
            <div className="container">
                <div className="card-content">
                    <div class="card">
                        <img class="card-img-top" src={Futebol} alt="Imagem de capa do card" />
                        <div class="card-body">
                            <h5 class="card-title">Futebol</h5>
                            <p class="card-text">Acompanhe o jogo de Futebol e opine qual será o vencedor</p>
                            <a href="#" class="btn btn-primary">Visitar</a>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div class="card">
                        <img class="card-img-top" src={Basquete} alt="Imagem de capa do card" />
                        <div class="card-body">
                            <h5 class="card-title">Basquete</h5>
                            <p class="card-text">Acompanhe o jogo de Basquete e opine qual será o vencedor</p>
                            <a href="#" class="btn btn-primary">Visitar</a>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div class="card">
                        <img class="card-img-top" src={Volei} alt="Imagem de capa do card" />
                        <div class="card-body">
                            <h5 class="card-title">Volei</h5>
                            <p class="card-text">Acompanhe o jogo de Volei e opine qual será o vencedor</p>
                            <a href="#" class="btn btn-primary">Visitar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;