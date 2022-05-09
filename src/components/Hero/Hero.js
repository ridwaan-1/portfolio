import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Separator from '../Separator/Separator';
import './Hero.css';
const Hero = () => {
    return ( 
        <React.Fragment>
            <section className='hero-section'>
                <div className='leftSection'>
                    <p className='leftSection-text color-subtext'>Hello, my name is</p>
                    <p className='leftSection-name gradient__text'>Ibrahim Ridwaan</p>
                    <p className='leftSection-text color-text'>
                        I am a fullstack developer who focuses on writing clean and efficient code.
                    </p>

                    <button className='button'><a href='mailto: ridwaanibrahim75@gmail.com'>Contact Me</a></button>
                </div>
                
                <div className='rightSection'>
                    <BackgroundAnimation />
                </div>
            </section>
            <Separator />
        </React.Fragment>
    );
}
 
export default Hero;