export type ResumeData = {
  summary: string,
  skills: SkillsSection,
  education: EducationSection,
  experience: ExperienceSection
};

export type SkillsSection = {
  [key: string]: string[]
};

export type EducationSection = {
  [key: string]: InstitutionType
};

export type InstitutionType = {
  institution: string,
  credential: string,
  startDate: string,
  endDate?: string,
  description: string,
  competencies: string[]
};

export type ExperienceSection = {
  [key: string]: JobType
};

export type JobType = {
  title: string,
  company: string,
  startDate: string,
  endDate?: string,
  duties: string[],
  competencies: string[]
};

export const resumeData: ResumeData = {
  summary:
    "I am a passionate, skilled software developer with a strong background in web development and three years' experience in healthcare revenue cycle management.  My skills include programming in Python and JavaScript with the Flask and React frameworks, PostgreSQL databases, and REST APIs.  I am also skilled at developing for the cloud with Docker, Kubernetes, and Microsoft Azure.  I have recognized skills in analysis, problem solving, training and coaching, and written and oral communication.",
  skills: {
    DevOps: ["azure", "docker", "git", "linux", "continuousIntegration"],
    Libraries: ["flask", "jQuery", "reactjs", "restApi", "postgreSQL"],
    Languages: ["python", "javaScript", "ceePlusPlus", "english", "french"],
  },
  education: {
    fcc: {
      institution: "freeCodeCamp",
      credential: "Certifications in Responsive Web Design and JavaScript Algorithms and Data Structures",
      startDate: "2022-03-15",
      endDate: "2022-04-30",
      description:
        "Self-paced boot camp-style curriculum in major libraries used for frontend Web development, including jQuery, React, Redux, and Bootstrap.",
      competencies: [
        "JavaScript",
        "React.js",
        "Redux",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    algoexpert: {
        institution: "AlgoExpert",
        credential: "Certificate of Completion",
        startDate: "2022-01-14",
        endDate: "2022-04-22",
        description:
          "Self-paced curriculum in algorithms and data structures, including linked lists, arrays, graphs, trees, strings, recursion, and dynamic programming.",
        competencies: [
          "Python",
          "TypeScript",
          "Algorithms",
          "Data structures"
        ]
    },
    nucamp: {
      institution: "Nucamp",
      credential:
        "Certification in Backend Development with Python, SQL, and DevOps",
      startDate: "2021-08-03",
      endDate: "2021-11-20",
      description:
        "<p>Boot camp course in modern backend Web development with the Python language, PostgreSQL, Flask, Django, and DevOps deployments to Microsoft Azure, Google Cloud, and Amazon AWS.</p><p>Offered coaching and assistance to classmates throughout the course.</p>",
      competencies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "Microsoft Azure",
        "Git",
        "CI/CD",
        "Visual Studio Code",
      ],
    },
    tcatk: {
      institution: "Tennessee College of Applied Technology",
      credential: "Diploma in Medical Office Information Technology",
      startDate: "2018-05-01",
      endDate: "2018-08-24",
      description:
        "<p>Broad-ranging instruction in concepts and procedures of the medical billing office, including reimbursement principles, medical terms, medical coding, and practice-management software.</p><p>Offered coaching and assistance to classmates throughout the course.</p>",
      competencies: [
        "Medical coding",
        "Medical billing",
        "Microsoft Word",
        "Microsoft Excel",
        "Medical terminology",
        "Teamwork",
      ],
    },
    utk: {
      institution: "University of Tennessee",
      credential: "Bachelor of Science in Computer Science",
      startDate: "2006-08-20",
      endDate: "2011-05-13",
      description:
        "Practical and theoretical instruction in computer science, including systems programming, object-oriented systems, graphical user interfaces, technical writing, and theoretical computer science, combined with traditional liberal-arts curriculum.",
      competencies: [
        "C++",
        "Java",
        "Technical writing",
        "Teamwork",
        "Public speaking",
        "LaTeX",
        "OpenGL",
        "Subversion",
        "Emacs",
      ],
    },
  },
  experience: {
    upaAR: {
      title: "Accounts Receivable Representative",
      company: "University Physicians' Association",
      startDate: "2019-11-18",
      endDate: undefined,
      duties: [
        "Collaborated with a 10-member cross-functional team that reduced outstanding claims by 40% quarter-over-quarter, reducing A/R days by 33%",
        "Evaluated and resolved an average of 35 claims per day with 98% accuracy",
        "Assessed denied claims and reviewed for appeal processes",
        "Drafted appeal letters to all major carriers, overturning 70% of denials",
        "Recognized as my team's point of knowledge for questions on diagnosis and procedure coding",
        "Guided and trained personnel within a 55-member department, training on coding rules, standard workflows, software usage, and appeal letter origination",
      ],
      competencies: [
        "Telecommuting",
        "Medical coding",
        "Medical billing",
        "Writing",
        "Teamwork",
        "Time management",
        "Detail orientation",
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft Access",
      ],
    },
    upaBilling: {
      title: "Medical Billing Representative",
      company: "University Physicians' Association",
      startDate: "2018-09-10",
      endDate: "2019-11-15",
      duties: [
        "Partnered with an established 10-member team to review more than 8,000 outbound line items per day",
        "Reviewed 1,200 line items per day with 100% accuracy",
        "Increased clean claim rate by 5% on average by practice, reducing A/R overhead and turnaround time",
        "Analyzed an average of $100,000 of charges per day for inaccuracies",
        "Proposed workflow alterations which led to 10% faster turnaround of paper charge batches"
      ],
      competencies: [
        "Medical billing",
        "Medical coding",
        "Data entry",
        "Time management",
        "Teamwork",
        "Microsoft Excel",
        "Detail orientation",
      ],
    },
    wci: {
      title: "Office Cleaner",
      company: "We Clean It CJS",
      startDate: "2006-08-01",
      endDate: "2018-09-09",
      duties: [
        "Supervised a two-person cleaning crew maintaining 50,000 square feet per night",
        "Led review initiatives of cleaning and training protocols, increasing productivity by 33%",
        "Redeveloped internal tracking systems to reduce lead time on bids by 50%",
        "Implemented a company website that doubled inbound sales calls",
      ],
      competencies: [
        "Time management",
        "Teamwork",
        "Detail orientation",
        "WordPress",
        "Linux",
        "nginx",
      ],
    },
  },
};
