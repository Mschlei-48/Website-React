import React from 'react'
import retro_img from '/src/assets/image-retro-pcs.jpg';
import laptop_img from '/src/assets/image-top-laptops.jpg';
import gaming_img from '/src/assets/image-gaming-growth.jpg';
import './footer.css'


function Footer(){
    return(
        <div className='main-container'>

            <div className='retro-content'>
                <div className='retro-image-container'>
                    <img src={retro_img} className='retro-img'/>
                </div>
                <div className='retro-content-container'>
                    <h2 id='One'>01</h2>
                    <h4>Reviving Retro PCs</h4>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>

            <div className="laptop-content">
                <div className='laptop-inage-container'>
                    <img src={laptop_img} className="laptop-img"/>
                </div>
                <div className="laptop-content-container">
                    <h2 id='Two'>02</h2>
                    <h4>Top 10 Laptops of 2022</h4>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>

            <div className='gaming-content'>
                <div className='gaming-image-container'>
                    <img src={gaming_img} className='gaming-img'/>
                </div>
                <div className='gaming-content-container'>
                    <h2 id='Three'>03</h2>
                    <h4>The Growth of Gaming</h4>
                    <p>How the pandeminc has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;