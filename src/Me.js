import React from 'react';
import picture from './charlottestrand.jpg';

console.log(picture);

const Me = () => {

    return (
        <main>
            <div className="container">
                <img className="img-me" src={picture} alt="Charlotte"/>
                <div className="me-div">
                    <h1>Om mig</h1>
                        <p>Jag heter Charlotte Strand och bor i byn Sibbarp utanför Tvååker i Varbergs kommun.</p>
                        <p>Min familj består av man, tre barn och en katt. Det blir inte så mycket tid över till annat än skola och familj men hästar och musik har alltid stått högst på listan.</p>
                        <p>Nu står jag precis i början av andra läsaåret på BTH:s webbprogrammerarprogram på distans och hoppas på att hålla mig i fas det här året!</p>
                </div>
            </div>
        </main>
        );
};

export default Me;
