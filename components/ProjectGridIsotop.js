"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectGridIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("data-ops")}`}
          onClick={handleFilterKeyChange("data-ops")}
        >
          Data Operations
        </li>
        <li
          className={`c-pointer ${activeBtn("quality")}`}
          onClick={handleFilterKeyChange("quality")}
        >
          Data Quality
        </li>
        <li
          className={`c-pointer ${activeBtn("etl")}`}
          onClick={handleFilterKeyChange("etl")}
        >
          Data Pipelines
        </li>
      </ul>
      <div className="row project-masonry-active">
        <div className="col-lg-6 item data-ops">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/project_ds1.png" alt="Project" />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Data Operations</span>
              <h3>
                <Link legacyBehavior href="#">
                  SQL Server Consolidation & Reporting
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item quality">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/project_ds2.png" alt="Project" />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Data Quality</span>
              <h3>
                <Link legacyBehavior href="#">
                  Automated Data Validation Systems
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item etl">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/project_ds3.png" alt="Project" />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Data Pipelines</span>
              <h3>
                <Link legacyBehavior href="#">
                  Structured Reliability Pipelines
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectGridIsotop;
