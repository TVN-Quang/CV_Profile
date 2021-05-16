import React from "react"
class About extends React.Component {
    state = {
        about: {
            slogan: "",
            occupation: "",
            birthday: "",
            website: "#",
            phone: "",
            city: "",
            email: "",
            degree: "",
            freelance: "",
            article: ""
        },
        aboutStyle: {}
    }

    async componentDidMount() {
        try {
            let response = await this.getAboutData()
            let json = await response.json()
            this.setState({about: json.about, aboutStyle: json.aboutStyle});
        } catch (error) {

        }
    }

    getAboutData() {
        return fetch('./data/about.json');
    }

    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>{this.state.about.slogan}</p>
                        <p>̶ Erich Fromm</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src={this.state.about.avatar} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>{this.state.about.occupation}</h3>
                            <p className="fst-italic">
                              </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{this.state.about.birthday}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{this.state.about.website}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{this.state.about.phone}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{this.state.about.city}</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{this.state.about.birthday}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{this.state.about.degree}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>{this.state.about.email}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{this.state.about.freelance}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                               {this.state.about.article}
                  </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
