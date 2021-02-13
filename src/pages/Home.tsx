import {IoChevronForwardSharp} from 'react-icons/io5'
import Header from "../components/Header"
import './home.scss'

import google from '../assets/svgs/google.svg'
import businessInsider from '../assets/svgs/business-insider.svg'
import careem from '../assets/svgs/careem.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import samsung from '../assets/svgs/samsung.svg'
import feature1 from '../assets/svgs/feature-1.svg'
import feature2 from '../assets/svgs/feature-2.svg'
import feature3 from '../assets/svgs/feature-3.svg'
import { Card } from "../components/Common/Card"
import { Button } from "../components/Common/Button"

const Home: React.FC = () => {
    return (
        <>
            {/* Header */}
            <Header />

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

            {/* Features */}
            <section className="features-section">
                <header>
                    <h3 className="secondary__title">Features</h3>
                    <p className="paragraph">
                        You can explore the features that we provide with fun and <br /> have their own functions each feature.
                    </p>
                </header>
                <div className="features">
                    <Card icon={feature1} title="HQ Curriculum"
                        className="features__item features__item--1"
                    >
                        We provide a curriculum formed by a team of onedy experts who is proven to shape students better
                    </Card>
                    <Card icon={feature2}
                        title="Profesional Instructor"
                        className="features__item features__item--2"
                    >
                        Our instructors are highly professional people who are experts in teaching and learning
                    </Card>
                    <Card icon={feature3} title="Study Report"
                        className="features__item features__item--3"
                    >
                        We provide a report on the learning outcomes of students who have completed the class
                    </Card>
                </div>
            </section>

            {/* Course Preview */}
            <section className="course-preview">
                <header className="header">
                    <div className="header__left">
                        <h3 className="secondary__title">Our Popular Class</h3>
                        <p className="paragraph">
                            You can explore the courses we provide with fun and full of new knowledge.
                        </p>
                    </div>
                    <div className="header__right">
                        <form action="#">
                            <select name="filter" id="filter" value="all" onChange={() => ''}>
                                <option value="all">All</option>
                                <option value="new">New</option>
                                <option value="populsr">Popular</option>
                            </select>
                        </form>
                        <Button className="py-2 px-3 ml-3" iconRight={<IoChevronForwardSharp />} >
                            See All Class
                        </Button>
                    </div>
                </header>
                <div className="courses">
                    <div className="course__item">course-1</div>
                    <div className="course__item">course-2</div>
                    <div className="course__item">course-3</div>
                </div>
            </section>
        </>
    )
}

export default Home