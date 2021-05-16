import React from "react"
import Typed from "typed.js"

class HeroSection extends React.Component {
    state = {
        hero: {
            name: "",
            typed: [],
            skype: "",
            facebook: "",
            linkedIn: ""
        },
        heroStyle: {
            background: "",
            backgroundSize: ""
        }
    };

    async componentDidMount() {
        try {
            let response = await this.getHeroData()
            let json = await response.json()
            let heroStyle = {background : json.background, backgroundSize: json.backgroundSize}
            this.renderTyped(json.typed)
            this.setState({hero: json, heroStyle: heroStyle});
        } catch (error) {

        }
    }

    getHeroData() {
        return fetch('./data/hero.json');
    }

    render() {
        return (
            <section style={this.state.heroStyle} id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>{this.state.hero.name}</h1>
                    <p>I'm <span className="typed"></span></p>
                    <div className="social-links">
                        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
                        <a href={this.state.hero.facebook} target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                        {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                        <a href={this.state.hero.skype} target="_blank" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href={this.state.hero.linkedIn} target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        )
    }

    renderTyped(typed) {
        if (typed) {
            new Typed('.typed', {
                strings: typed,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }

    }
}
export default HeroSection;