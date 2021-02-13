import './header.scss'
import { Button } from '../Common/Button'
import asianWoman from '../../assets/img/asian-woman.png'

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
                        <Button className="mr-4 mb-3 px-4 py-3">Get Started</Button>
                        <Button className="px-4 py-3" outline>Learn more</Button>
                    </div>
                </aside>
                <aside className="hero__right">
                    <img src={asianWoman} alt="asian woman holding laptop" />
                </aside>
            </section>
        </>
    )
}

export default Header