import React from "react"
class Resume extends React.Component {
    state = {
        resume: { summary: {}, education: {}, exprience: [], projects: [] }
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

    getResumeData() {
        return fetch('./data/resume.json');
    }

    renderExprience(expriences) {
        let elements = []
        for (const [index, exprience] of expriences.entries()) {
            elements.push(this.rederExprienceElement(exprience, index))
        }
        return elements
    }

    rederExprienceElement(exprience, index) {
        return (
            <div className="resume-item" key={index}>
                <h4>{exprience.title}</h4>
                <h5>{exprience.time}</h5>
                <p><em>{exprience.company}</em></p>
                <span>
                    {exprience.article}
                </span>
            </div>
        )
    }

    renderProject(projects) {
        let elements = []
        for (const [index, project] of projects.entries()) {
            elements.push(this.rederProjectElement(project, index))
        }
        return elements
    }

    rederProjectElement(project, index) {
        return (
            <div className="resume-item" key={index}>
                <h4>{project.title}</h4>
                <p><em>{project.company}</em></p>
                <ul>
                    <h5>Main Responsibilities</h5>
                    {this.renderProjectArticle(project.responsible)}
                </ul>
                <ul>
                    <h5>Project description</h5>
                    {this.renderProjectArticle(project.decription, true)}
                </ul>
            </div>
        )
    }

    renderProjectArticle(articles, description) {
        let list = []
        let listNested = []
        for (const [index, article] of articles.entries()) {
            if (description && index > 0) {
                listNested.push((<li key={index}>{article}</li>))
            } else {
                list.push((<li key={index}>{article}</li>))
            }
        }
        list.push((<ul>{listNested}</ul>))
        return list
    }
    render() {
        return (
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p></p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>{this.state.resume.summary.name}</h4>
                                <p><em>{this.state.resume.summary.article}</em></p>
                                <ul>
                                    <li>{this.state.resume.summary.address}</li>
                                    <li>{this.state.resume.summary.phone}</li>
                                    <li>{this.state.resume.summary.email}</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>{this.state.resume.education.university}</h4>
                                <p style={{ color: 'grey' }}>{this.state.resume.education.major}</p>
                                <h5>{this.state.resume.education.time}</h5>
                                <p><em>{this.state.resume.education.address}</em></p>
                                <p>{this.state.resume.education.article}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Professional Experience</h3>
                            {this.state.resume.exprience}
                            {this.state.resume.projects}
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default Resume;