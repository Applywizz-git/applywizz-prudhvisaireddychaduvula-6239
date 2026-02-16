import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const topSkills = ['Azure Data Factory', 'Azure Databricks', 'Azure Synapse', 'Python', 'SQL', 'Delta Lake'];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading mb-6 text-white">
            About <span className="text-gradient-gold">Me</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-luxury-gold font-semibold">Data Engineer</span> with over 3 years of experience building batch data pipelines, SQL transformation layers, and analytics-ready datasets in cloud environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proficient in Azure Data Factory, Azure Databricks, Azure Synapse Analytics, Python, PySpark, SQL, and Delta Lake to ingest and transform structured data from APIs, files, and databases. I specialize in incremental data processing, data quality validation, and delivering curated fact and dimension tables that improve data reliability.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: 3, suffix: '+', label: 'Years Experience' },
                { value: 40, suffix: '%', label: 'Efficiency Gain' },
                { value: 99, suffix: '%', label: 'Pipeline Success' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center glass p-4 rounded-xl hover:glass-gold transition-smooth border border-white/10"
                >
                  <div className="text-2xl lg:text-3xl font-heading text-luxury-gold mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs lg:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)' }}
                className="glass p-6 rounded-xl text-center cursor-pointer group border border-white/5"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-luxury-gold transition-smooth">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
