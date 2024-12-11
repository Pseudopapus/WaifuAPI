import React from "react";
import "./footer.css";

export default function Footer () {
	return(
        <footer className="center">
            <a className="heading" href="https://github.com/Pseudopapus">
                <h2>Pseudopapus</h2>
            </a>
            <div className="info">
                <div className="center">
                <h3>Creación</h3>
                <p>01/06/2024</p>
                </div>
                <div className="center">
                <h3>Autores</h3>
                <a href="https://github.com/McMaldo">@McMaldo</a>
                <a href="https://github.com/cabritapiupiu">@Cabritapiupiu</a>
                </div>
            </div>
            <div className="ubic">
                <p className="pais">Arg.</p>
                <p className="prov">Bs. As.</p>
            </div>
        </footer>
	);
}