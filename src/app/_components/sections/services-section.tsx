import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaRobot } from "react-icons/fa";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const ServiceCard = ({
  icon,
  title,
  description,
  idx,
}: Service & { idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: idx * 0.15 }}
    viewport={{ once: true }}
    className="rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow border border-border h-64"
    style={{ minHeight: 256 }}
  >
    <div className="flex flex-col items-center justify-center h-1/2 w-full">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
    <div className="flex items-center justify-center h-1/2 w-full">
      <p className="text-sm text-secondary-foreground text-center">
        {description}
      </p>
    </div>
  </motion.div>
);

export const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: <FaMobileAlt className="text-primary text-3xl mb-4" />,
      title: "Mobile App Development",
      description:
        "Creating seamless, high-performance mobile applications for iOS and Android platforms.",
    },
    {
      icon: <FaCode className="text-primary text-3xl mb-4" />,
      title: "Web Development",
      description:
        "Building fast, modern, and responsive web applications using the latest technologies.",
    },
    {
      icon: <FaDatabase className="text-primary text-3xl mb-4" />,
      title: "Database Design",
      description:
        "Designing robust, scalable, and secure database architectures tailored to your business needs.",
    },
    {
      icon: <FaRobot className="text-primary text-3xl mb-4" />,
      title: "AI Integration",
      description:
        "Integrating advanced AI solutions to automate processes and enhance your digital products.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          Services
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
        <p className="text-base sm:text-lg md:text-xl text-secondary-foreground leading-relaxed mb-8">
          I offer a range of services to help you bring your ideas to life and
          grow your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              idx={idx}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
