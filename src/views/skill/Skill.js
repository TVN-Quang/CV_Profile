import React from "react"
import 'waypoints/lib/noframework.waypoints.min.js';
class Skill extends React.Component {
  state = {
    skills: []
  }

  async componentDidMount() {
    try {
      let response = await this.getSkillsData()
      let json = await response.json()
      let skills = json.skills
      this.setState({skills: this.renderSkills(skills)}, () => {
        this.renderWaypoint()
      });
 
    } catch (error) {

    }
  }

  getSkillsData() {
    return fetch('./data/skill.json');
  }
  render() {
    return (
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Skills</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="row skills-content" id="skills-content">
              {this.state.skills}
              {/* 
            <div className="progress">
              <span className="skill">HTML <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    )
  }

  renderSkills(skills) {
    if (!skills.length) {
      return
    }
    let containerSkills = []
    let progressArr = []
    for (const [index, skill] of skills.entries()) {
      progressArr.push(this.renderProgress(skill, index))
      if ((index + 1) === skills.length || (index + 1) % 3 === 0 ) {
        containerSkills.push(this.renderContainerSkills(progressArr, index))
        progressArr = []
      }
    }
    return containerSkills
  }

  renderContainerSkills(progressArr, i) {
    return (<div className="col-lg-6" key={i}>
      {progressArr}
    </div>)
  }

  renderProgress(skill, i) {
    return (<div className="progress" key={i}>
      <span className="skill">{skill.name} <i className="val">{skill.val}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={skill.val} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>)
  }

  renderWaypoint() {
    let skillsContent = document.getElementById('skills-content');
    if (skillsContent) {
      new Waypoint({
        element: skillsContent,
        offset: '80%',
        handler: function (direction) {
          let progress = document.querySelectorAll('.progress .progress-bar');
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
  }
}
export default Skill;
