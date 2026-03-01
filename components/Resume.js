import Link from "next/link";

const Resume = () => {
  return (
    <section id="resume" className="resume-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
              <i className="flaticon-asterisk-1" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">My Resume</span>
                  <h2>
                    Real <span>Problem Solutions</span> Experience
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="resume-items-wrap">
              <div className="row justify-content-between">
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2025 - Present</span>
                      <h4>SDE Team Lead </h4>
                      <span className="company">Applywizz</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2021-2022</span>
                      <h4>Process Analyst</h4>
                      <span className="company">TCS</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2022-2024</span>
                      <h4>MCA Graduatee</h4>
                      <span className="company">Kakatiya University</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2018 - 2021</span>
                      <h4>Under Graduatee</h4>
                      <span className="company">Osmania University</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="resume-items-wrap">
              <div className="row justify-content-between">
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s rotate-45">
                    <div className="icon ">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">July 2025 - Present</span>
                      <h4>Data Engineer</h4>
                      <span className="company">DA2Technologies LLC</span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">Feb 2021 - July 2023</span>
                      <h4>Data Integration Engineer</h4>
                      <span className="company">Tecnics Integration Technologies Pvt Ltd</span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">Aug 2023 - May 2025</span>
                      <h4>Masters in Computer and Information Sciences</h4>
                      <span className="company">University of North Texas | TX, USA</span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">Jun 2016 - Jul 2020</span>
                      <h4>Bachelor of Technology in CSE</h4>
                      <span className="company">Gitam University | India</span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">Certifications</span>
                      <h4>Cloud & Architecture</h4>
                      <span className="company">
                        • AWS Certified Cloud Practitioner<br />
                        • Microsoft Certified Azure Fundamentals<br />
                        • Databricks Lakehouse Fundamentals
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">Certifications</span>
                      <h4>Data Engineering Specializations</h4>
                      <span className="company">
                        • Google Data Engineering Professional<br />
                        • IBM Data Engineering Professional<br />
                        • SQL for Data Science (Coursera)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Resume;

export const Resume2 = () => {
  return (
    <section
      id="resume"
      className="resume-area-two bgc-black rel z-1 pt-185 rpt-145 pb-140 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center pb-20">
          <div className="col-lg-8">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" />
                MY Expereince resume
              </span>
              <h2>work &amp; Education</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link legacyBehavior href="/contact">
              <a className="theme-btn mb-35">Contact Me</a>
            </Link>
          </div>
        </div>
        <div className="row no-gap">
          <div className="col-xl-6">
            <div className="resume-box-wrap design-two">
              <div className="timeline-heading wow fadeInUp delay-0-4s">
                <span className="title">work</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInLeft delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2021 - Present{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2018 - 2021{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2016 - 2018{" "}
                      </span>
                      <h5 className="title">Junior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2014 - 2016{" "}
                      </span>
                      <h5 className="title">Graphics Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="resume-box-wrap mt-110 rmt-75">
              <div className="timeline-heading wow fadeInDown delay-0-4s">
                <span className="title">study</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInRight delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2021 - Present{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2018 - 2021{" "}
                      </span>
                      <h5 className="title">Senior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2016 - 2018{" "}
                      </span>
                      <h5 className="title">Junior UI Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2014 - 2016{" "}
                      </span>
                      <h5 className="title">Graphics Designer</h5>
                    </div>
                    <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
