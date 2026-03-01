import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Reliable <span>Data Solutions</span> For Analytics-Driven
                    Organizations
                  </h2>
                  <p>
                    I’m a Data Engineer with 3+ years of experience building batch data pipelines, SQL transformation layers, and analytics-ready datasets in cloud environments. I specialize in Azure Data Factory, Databricks, and Synapse Analytics to ingest and transform complex data sources.
                    <br />
                    From implementing incremental data loads to delivering high-quality fact and dimension tables, I focus on building reliable data foundations that empower business intelligence and advanced analytics.
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>Data Pipeline Development & ETL Processing</li>
                  <li>Azure Data Factory & Databricks (PySpark)</li>
                  <li>Azure Synapse Analytics & Delta Lake</li>
                  <li>SQL Transformations & Data Modeling</li>
                </ul>

                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email</span>
                      <br />
                      <a href="mailto:prudhvisaireddy1243@gmail.com">prudhvisaireddy1243@gmail.com</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Phone</span>
                      <br />
                      <a href="callto:+19408439399">+1 (940) 843-9399</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">

              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="assets/images/about/prudhvi_final_suit.png" alt="About Me" style={{ borderRadius: '20px' }} />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Data Engineer</h6>

                  <i className="fas fa-arrow-right" />
                </div>
                {/* <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                  <img src="assets/images/about/btn-image2.png"   className="w-[60px] h-[60px] object-contain" alt="Image" />
                  <h6>Vikram B</h6>
                  <i className="fas fa-arrow-right" />
                </div> */}
                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
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
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
                  i,m a digital <span>designer</span> studio connecting brands
                  to people through
                </h2>
              </div>
              <div className="text pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>New york</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>experience</small>
                    <b>20+ Years</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>date of birth</small>
                    <b>27 June 1983</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">project completed</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">Awward achievmentd</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={80} extraClass={"k"} />
                    <span className="counter-title">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
