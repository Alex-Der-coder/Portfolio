import React from 'react';

const Footer = () => {
    return(
        <footer>
            <div className='container_link' >
            <div>
                <div className='col-row'>
                    <h3 className='text_gradient'>Lien Utile</h3>
                    <ul>
                        <li><a href="https://uicolors.app/create">Color Generator</a></li>
                        <li><a href="https://animista.net/">Animasta</a></li>
                        <li><a href="https://www.canva.com/">Canva</a></li>
                        <li><a href="https://fontawesome.com/">FontAwesome</a></li>
                        <li><a href="https://www.svgrepo.com/">SvGPro</a></li>
                    </ul>
                    <p>© Portfolio de Alexandre De Roeck 2024</p>
                </div>
            </div>

            <div>
                <div className='col-row'>
                    <h3  className='text_gradient'>Lien Utile</h3>
                    <ul>
                        <li><a href="https://www.figma.com">Figma</a></li>
                        <li><a href="https://www.w3schools.com/">W3schools</a></li>
                        <li><a href="https://validator.w3.org/">W3C Validator</a></li>
                        <li><a href="https://github.com/">Github</a></li>
                        <li><a href="https://vercel.com/">Vercel</a></li>
                    </ul>
                </div>
            </div>
            <div>
            <div className='col-row'>
                    <h3  className='text_gradient'>Lien Utile</h3>
                    <ul>
                        <li><a href="https://uiverse.io">Uiverse</a></li>
                        <li><a href="https://codepen.io/">Code Pen</a></li>
                        <li><a href="https://www.skeleton.dev/">Skeleton dev</a></li>
                        <li><a href="https://jsben.ch/">JSBench</a></li>
                        <li><a href="https://www.minifier.org/">Minifier code</a></li>
                    </ul>
                </div>
                <hr align="RIGHT"  width="40%" />
            </div>
            </div>
        </footer>
    )
}

export default Footer;