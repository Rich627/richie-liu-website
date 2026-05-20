// Data arrays for experience
const workExperienceData = [
  {
    icon: "fas fa-briefcase",
    time: "Oct 2025 - Present",
    title: "Studio Associate, AI Guild - Next Lab",
    company: "Next Lab, Arizona State University",
    companyUrl: "https://nextlab.asu.edu/",
    location: "Arizona, US",
    responsibilities: [
      "Built and integrated a multi-agent WhatsApp learning assistant on AWS ECS, enabling students to access AI-driven study support via a chat interface",
      "Used LangSmith for LLM tracing, monitoring, and evaluation"
    ],
    achievements: [
      "Enabled AI-driven study support for students through a conversational chat interface"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Oct 2024 - Present",
    title: "Solutions Architect (AI/ML)",
    company: "iKala Interactive Media Inc.",
    companyUrl: "https://www.ikala.com/",
    location: "Taipei, Taiwan / Remote",
    responsibilities: [
      "Led GenAI solutioning for 60+ customer engagements on Amazon Bedrock, SageMaker, Vertex AI, and AgentSpace — delivering high-fidelity PoCs and advising on production RAG design including chunking strategies, embedding model selection, and retrieval quality",
      "Architected and executed AWS migration for a Magento 2 e-commerce platform with HA architecture across ECS, EC2, ALB, and RDS, secured by WAF and CloudFront with Redis caching",
      "Built Infrastructure-as-Code automation with Terraform (AWS CAF) to deploy AWS Landing Zone, Control Tower, SSO-based access, IAM, and centralized security services",
      "Migrated ETL processes from EC2 to AWS Glue to optimize performance for downstream modeling and reporting"
    ],
    achievements: [
      "Reduced ETL processing time by 40% through Glue migration",
      "Cut infrastructure cost by 20% on the Magento 2 migration",
      "Scaled governance across 80+ AWS accounts",
      "Accelerated customer adoption through impactful PoCs and demos"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Jul 2024 - Sep 2024",
    title: "Data Scientist Intern, IT-AI",
    company: "Advantech Co., Ltd.",
    companyUrl: "https://www.advantech.com/",
    location: "Taipei, Taiwan",
    responsibilities: [
      "Applied time-series analysis with Amazon Forecast for demand planning",
      "Built a multi-agent system with LangGraph, exposing GraphQL APIs and integrating a NoSQL datastore, deployed on Azure using Docker Compose",
      "Implemented a video translation platform integrating open-source LLMs and neural networks with a Gradio interface"
    ],
    achievements: [
      "Achieved 90% accuracy in demand forecasting",
      "Reduced R&D issue resolution time by 30% with multi-agent system",
      "Improved translation speed by 50%"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Mar 2024 - Jun 2025",
    title: "AWS Educate Cloud Ambassador",
    company: "Amazon Web Services Taiwan",
    companyUrl: "https://aws.amazon.com/tw/",
    location: "Taipei, Taiwan",
    responsibilities: [
      "Led a 7-member team within an Agile framework using Jira",
      "Hosted an AWS Amplify and Amazon Bedrock workshop for 80+ participants, demonstrating the use of Bedrock Flows and agentic workflows to build a GenAI chatbot for concert data analysis and visualization",
      "Delivered live online AWS training sessions via YouTube Live for 400+ participants, covering Amazon Q Developer, SageMaker, Route 53, and CloudFront",
      "Conducted a hands-on workshop using CloudFront and Lambda@Edge"
    ],
    achievements: [
      "Built serverless email system reducing workload by 80% at $1.94/month",
      "Achieved 4.85 average satisfaction rating across training sessions",
      "Earned 4.9 satisfaction rating for CloudFront/Lambda@Edge workshop",
      "Launched a six-month certification program with 1,000+ registrations"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Feb 2024 - May 2024",
    title: "Cloud Developer Intern, AI&Data",
    company: "eCloudvalley Digital Technology Co., Ltd.",
    companyUrl: "https://www.ecloudvalley.com/",
    location: "New Taipei, Taiwan",
    responsibilities: [
      "Optimized ETL with AWS Glue and PySpark for large-scale data processing",
      "Leveraged AWS Personalize to build recommendation systems"
    ],
    achievements: [
      "Reduced data preprocessing time by 20%",
      "Achieved 90% precision marketing rate with recommendation system"
    ]
  }
];


export default function Experience() {
  return (
    <section id="resume" className="py-16 sm:py-24 bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Professional journey in AI/ML, Cloud, and Data Science
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {workExperienceData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/5 to-transparent rounded-full blur-2xl group-hover:from-sky-500/10 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative flex flex-col h-full">
                {/* Header with Time */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-sky-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-sky-400 font-semibold mb-2 inline-block hover:text-sky-300 hover:underline transition-colors duration-300">
                        {item.company}
                        <i className="fas fa-external-link-alt text-sky-400/50 text-[10px] ml-1.5"></i>
                      </a>
                    ) : (
                      <p className="text-sm text-sky-400 font-semibold mb-2">{item.company}</p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <i className="fas fa-map-marker-alt text-sky-400 text-xs"></i>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-xl h-fit">
                    <i className={`${item.icon} text-sky-400 text-sm`}></i>
                    <span className="text-sm text-sky-400 font-bold whitespace-nowrap">{item.time}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-tasks text-sky-400 text-sm"></i>
                      <h4 className="text-sm font-bold text-neutral-300">Key Responsibilities</h4>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-neutral-300 leading-relaxed list-disc">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-auto pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-trophy text-yellow-400 text-sm"></i>
                      <h4 className="text-sm font-bold text-neutral-300">Key Achievements</h4>
                    </div>
                    <ul className="space-y-1.5 pl-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-200 leading-relaxed">
                          <i className="fas fa-check text-emerald-400 text-xs mt-1.5 flex-shrink-0"></i>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/0 via-blue-500/0 to-sky-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-sky-500/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 