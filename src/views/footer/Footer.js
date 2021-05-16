import React from "react"
class Footer extends React.Component {
    render () {
        return (
            <footer id="footer">
                <div className="container">
                <h4>Teamplate Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> </h4>
                <h5>Edit for ReactJS by - Tran Vo Nhat Quang</h5>
                {/* <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div> */}
                <div className="copyright">
                    &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
