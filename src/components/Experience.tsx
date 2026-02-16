import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'DA2Technologies LLC',
    role: 'Data Engineer',
    period: 'July 2025 - Present',
    // location: 'Little Elm, TX',
    responsibilities: [
      'Engineered batch ETL pipelines using Azure Data Factory and Python to ingest structured data from REST APIs and cloud storage, reducing manual data preparation effort for analytics teams by 40%.',
      'Developed PySpark transformation workflows in Azure Databricks to cleanse, normalize, and standardize raw JSON and CSV datasets into curated Delta tables for reliable analytical consumption.',
      'Modeled fact and dimension tables in Azure Synapse SQL with optimized joins and schemas, enabling faster analytical queries and lowering average report query time by 30%.',
      'Implemented incremental data load logic with Delta Lake to process only new and updated records, cutting daily pipeline runtimes by 25% while maintaining historical accuracy.',
      'Validated data quality through schema checks, null thresholds, and record-count comparisons within Databricks transformation layers, supporting governed access and metadata visibility using Unity Catalog and decreasing downstream data defects by 35%.',
      'Integrated multi-format datasets including JSON, CSV, and Parquet into a unified data model, improving consistency and usability of data consumed across reporting and analysis workflows.',
      'Monitored pipeline executions and failure logs across Azure Data Factory and Databricks, collaborating with cross-functional teams to resolve issues and maintain 99% successful pipeline completion rates.',
    ],
  },
  {
    company: 'Tecnics Integration Technologies Pvt Ltd',
    role: 'Data Integration Engineer',
    period: 'Feb 2021 - July 2023',
    // location: 'Hyderabad, India',
    responsibilities: [
      'Automated data-dependent operational tasks using shell scripting on Linux systems, improving reliability of scheduled data jobs and reducing manual intervention by 20% across production environments.',
      'Supported SQL Server and IBM DB2 databases by validating data availability, integrity, and consistency for application workflows and internal reporting needs used by multiple teams.',
      'Analyzed data discrepancies through targeted SQL queries to identify record-level issues, collaborating with engineering teams to reduce investigation and resolution cycles by 30%.',
      'Optimized frequently executed SQL queries by reviewing execution plans and access patterns, contributing to more stable data retrieval during peak operational workloads.',
      'Investigated data flow issues between application layers and backend databases in partnership with cross-functional teams, improving accuracy and completeness of production data outputs.',
      'Documented SQL queries, data validation steps, and operational procedures to support long-term maintainability and smoother knowledge transfer for data-related workflows.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-royal-blue/10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading mb-6">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-luxury-gold/30 hidden lg:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 lg:mb-20 ${index % 2 === 0 ? 'lg:pr-[50%] lg:text-left' : 'lg:pl-[50%] lg:text-left'
                }`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)] hidden lg:flex">
                <Briefcase className="w-6 h-6 text-midnight" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl hover:glass-gold transition-smooth border border-white/5"
              >
                <div className="flex items-start gap-4 lg:hidden mb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-midnight" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading text-luxury-gold mb-1">{exp.company}</h3>
                    <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                  </div>
                </div>

                <div className="hidden lg:block mb-4">
                  <h3 className="text-2xl font-heading text-luxury-gold mb-1">{exp.company}</h3>
                  <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                </div>

                <div className="text-muted-silver mb-4 font-medium flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-luxury-gold" />
                    <span>{exp.period}</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    <span>{exp.location}</span>
                  </div> */}
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-luxury-gold mt-1.5">▸</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
