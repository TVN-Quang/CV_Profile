import React from "react"
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        fullname: '',
        email: '',
        subject: '',
        message: ''
      },
      displayLoading: 'none',
      displayMessage: 'none',
      displayErr: 'none'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // async componentDidMount() {
  //   try {
  //     let response = await this.getResumeData()
  //     let json = await response.json()
  //     let resume = json
  //     resume.exprience = this.renderExprience(resume.exprience)
  //     resume.projects = this.renderProject(resume.projects)
  //     this.setState({ resume: resume })
  //   } catch (error) {

  //   }
  // }

  handleChange(event) {
    let target = event.target
    let field = target.name
    this.setState({ contact: {...this.state.contact, [field]: target.value} }, function () {
      console.log(JSON.stringify(this.state.contact))
    })
  }

  handleResponse(response) {
    if (response.status === 200) {
      this.setState({displayLoading: 'none', displayMessage: 'block', displayErr: 'none'})
    } else {
      throw response.errorMessage || response.statusText
    }
  }

  async createContact() {
    try {
      this.setState({displayLoading: 'block'})
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.contact)
      };
      let result = await fetch('https://wegdcv77hj.execute-api.ap-southeast-1.amazonaws.com/api/contact', requestOptions)
      let json = await result.json();
      this.handleResponse(json)
    } catch (error) {
      console.log(error)
      this.setState({displayLoading: 'none', displayErr: 'block'})
    }
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
                    <input type="text" name="fullname" className="form-control" onChange={this.handleChange} value={this.state.contact.fullname} id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.contact.email} id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" onChange={this.handleChange} value={this.state.contact.subject} id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" onChange={this.handleChange} value={this.state.contact.message} placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading" style={{display: this.state.displayLoading}}>Loading</div>
                  <div className="error-message text-center" style={{display: this.state.displayErr}}>There was an error during execution, sorry for the inconvenience.</div>
                  <div className="sent-message" style={{display: this.state.displayMessage}}>Your message has been sent. Thank you!</div>
                </div>
                <div className="address text-center"><button type="button" onClick={() => { this.createContact() }}>Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Contact;
