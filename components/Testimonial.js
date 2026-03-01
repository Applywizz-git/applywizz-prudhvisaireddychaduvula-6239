"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">Testimonials & Recommendations</span>
                    <h2>
                      Hear What <span>My Team & Mentors</span> Say
                    </h2>
                    <p>
                      I’ve collaborated with cross-functional teams, analysts, and business stakeholders to translate complex data requirements into scalable SQL transformations.
                      Here's what they say about my contributions to ETL pipelines, data quality, and reliability.
                    </p>

                  </div>

                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img src="assets/images/testimonials/image2_men.png" alt="Author" className="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “Prudhvisaireddy’s ETL pipeline design using Azure Data Factory and Databricks drastically reduced our manual data preparation efforts by 40%.”
                    </div>
                    <div className="testi-des">
                      <h5>Michael R.</h5>
                      <span>Senior Data Architect</span>
                    </div>
                  </div>

                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img src="assets/images/testimonials/image1_women.png" alt="Author" className="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “His ability to implement incremental data loads with Delta Lake cut our daily pipeline runtimes effectively, while maintaining absolute data accuracy.”
                    </div>
                    <div className="testi-des">
                      <h5>Anita S.</h5>
                      <span>Lead Analytics Engineer</span>
                    </div>
                  </div>

                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img src="assets/images/testimonials/image1_men.png" alt="Author" className="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “Prudhvisaireddy took the lead on data quality validations. His schema checks using Databricks significantly lowered downstream defects.”
                    </div>
                    <div className="testi-des">
                      <h5>Raj K.</h5>
                      <span>Data Engineering Manager</span>
                    </div>
                  </div>

                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img src="assets/images/testimonials/image2_women.png" alt="Author" className="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “Working with him on SQL transformations for database consolidation resulted in much higher reliability and consistency for our recurring reports.”
                    </div>
                    <div className="testi-des">
                      <h5>Dr. Lisa M.</h5>
                      <span>Business Intelligence Lead</span>
                    </div>
                  </div>
                </Slider>

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
  }
}
