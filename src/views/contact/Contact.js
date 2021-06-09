import React from "react"
class Contact extends React.Component {
  state = {
    contact: {
      fullname: '',
      email: '',
      subject: '',
      message: ''
    }
  }



  async componentDidMount() {
    try {
      let response = await this.getResumeData()
      let json = await response.json()
      let resume = json
      resume.exprience = this.renderExprience(resume.exprience)
      resume.projects = this.renderProject(resume.projects)
      this.setState({ resume: resume })
    } catch (error) {

    }
  }

  async createContact() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'a@gmail.com' })
    };
    let result = await fetch('https://wegdcv77hj.execute-api.ap-southeast-1.amazonaws.com/api/contact', requestOptions)
    
    console.log(result.json())
  }
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-1">

            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>HCM, Viet Nam</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>tranvonhatquang@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+84 989278624</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" value={this.state.contact.fullname} id="name" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" value={this.state.contact.email} id="email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" value={this.state.contact.subject} id="subject" placeholder="Subject" />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" value={this.state.contact.message} placeholder="Message" ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="teaddressxt-center"><button type="button" onClick={() => { this.createContact() }}>Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Contact;
