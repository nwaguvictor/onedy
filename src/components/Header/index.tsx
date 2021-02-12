import Navbar from '../Navbar'
import asianWoman from '../../assets/img/asian-woman.png'
import google from '../../assets/svgs/google.svg'
import businessInsider from '../../assets/svgs/business-insider.svg'
import careem from '../../assets/svgs/careem.svg'
import linkedin from '../../assets/svgs/linkedin.svg'
import samsung from '../../assets/svgs/samsung.svg'
import './header.scss'
import { Button } from '../Common/Button'

function Header() {
    return (
        <>
            {/* Hero */}
            <section className="hero">
                <aside className="hero__left">
                    <header className="hero__text">
                        <h1 className="hero__text--main">
                            <span>Build</span> your passion by shaping your <span>Skill</span> at Onedy
                        </h1>
                        <p className="hero__text--sub">
                            online learning with thousands of classes on topics including illustration, design, photography, video,  and freelancing.
                        </p>
                    </header>
                    <div className="hero__cta">
                        <Button className="mr-4 mb-3">Get Started</Button>
                        <Button outline>Learn more</Button>
                    </div>
                </aside>
                <aside className="hero__right">
                    <img src={asianWoman} alt="asian woman holding laptop" />
                </aside>
            </section>

            {/* Media */}
            <section className="media-section">
                <div className="media">
                    <img src={google} alt="google logo" className="media__item"/>
                    <img src={linkedin} alt="linkedin logo" className="media__item"/>
                    <img src={businessInsider} alt="businessInsider logo" className="media__item"/>
                    <img src={samsung} alt="samsung logo" className="media__item"/>
                    <img src={careem} alt="careem logo" className="media__item"/>
                </div>
            </section>
        </>
    )
}

export default Header