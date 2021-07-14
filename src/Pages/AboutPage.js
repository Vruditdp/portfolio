import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Java'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Android'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'React Js'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'SQL'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'75%'} width={'75%'} />
            </div>

            <Tittle title={'Intrested In'} span={'Intrested In'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'I love Web Designing, I know HTML, CSS, JS and core concept of React Js. I prefer unique style and features.'}
                />
                <ServicesSection image={intelligence} title={'AI / ML'} 
                text={'AI/ML is my favourite horizon. I have clear understanding of basic ML with Python.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'GD is one of the most shining technology currently dominating the digital world.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;