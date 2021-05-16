import React from "react"
class Certification extends React.Component {

    // async componentDidMount() {
    //     try {
    //         let response = await this.getCertificationData()
    //         let json = await response.json()
    //         this.setState({certification: json.certification, certificationStyle: json.certificationStyle});
    //     } catch (error) {

    //     }
    // }

    // getCertificationData() {
    //     return fetch('./data/certification.json');
    // }

    render() {
        return (
            <section id="certification" className="certification">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Certification</h2>
                        <p></p>
                    </div>
                    <div className="col-lg-12 text-center">
                        <img src="./CERTIFICATE_LANDING_PAGE.jpeg" width="1050" height="550"/>
                        <a className="d-md-block" href="https://coursera.org/share/fb09a2cfaa987ba33dc9a8c97bb813a4">Project Management Principles and Practices Specialization</a>
                    </div>
                </div>
            </section>
        )
    }
}
export default Certification;
