const content = {
    about: {
        header: {
            avatar: "M4 20c0-4 3.6-7 8-7s8 3 8 7",
            name: "Emily Huynh",
            description: "Software developer, Co-op Student",
            city: "Ottawa, ON",
        },
        education: {
            program: "Honours Computer Science, Cybersecurity Stream",
            university: "Carleton University",
            start: "Sep 2024",
            end: "",
        },
        interests: [
            "Volleyball",
            "Soccer",
            "Sketching",
            "Video games",
            "Puzzles",
        ],
        languages: [ 
            {
                language: "English",
                level: "native"
            }, 
            {
                language: "French",
                level: "intermediate",
            }
        ]
    },
    experience: [
        {
            role: "Software Developer (Co-op)",
            company: "Government of Canada",
            start: "May 2026",
            end: "",
            tags: [],
            description: [],
        },
        {
            role: "Teaching Assistant — COMP 1005/1405, COMP 1006/1406",
            company: "Carleton University",
            start: "Sep 2025",
            end: "Apr 2026",
            tags: [
                "Python",
                "Java",
            ],
            description: [
                "Graded student code for correctness, logic, and design",
                "Held office hours for debugging and concept help",
                "Ran tutorials and workshops on course material and assignments",
            ],
        }
    ],
    projects: [
        {
            title: "NETAnalyzer",
            description: "A live network packet capture and analysis tool.",
            features: [
                "Real-time packet capture", 
                "Network visualization", 
                "Anomaly detection", 
                "AI session analysis",
            ],
            tags: [
                "Python",
                "FastAPI",
                "React",
                "Scapy",
                "SQLite",
                "SQLAlchemy",
                "WebSockets",
                "Openpyxl"
            ],
            url: "https://github.com/emiHuy/net-analyzer.git",
            private: false,
        },
        {
            title: "Summarizer",
            description: "An AI-powered tool that summarizes content from text, webpages (URLs), and uploaded files into clear, concise insights.",
            features: [
                "Text, URL & file input", 
                "Multiple output formats", 
                "Copy & save results",
            ],
            tags: [
                "Python",
                "Cohere API",
                "PySide6",
                "BeautifulSoup",
                "Requests",
            ],
            url: "https://github.com/emiHuy/summarizer.git",
            private: false,
        },
        {
            title: "Movie Streaming Platform",
            description: "A full-stack web app for browsing and ordering movies across multiple streaming services.",
            features: [
                "User auth & sessions", 
                "Browse & order movies", 
                "Admin permissions", 
                "Service statistics",
            ],
            tags: ["Node.js", "Express", "MongoDB", "Pug", "JavaScript"],
            url: "",
            private: true,
        },
        {
            title: "Ghost Hunt Simulation",
            description: "A multi-threaded C simulation where hunters explore a haunted house to identify a ghost by collecting evidence.",
            features: [
                "Concurrent hunter & ghost threads",
                "Bitmasked evidence tracking", 
                "Shared case file across hunters", 
                "Dynamic room traversal", 
            ],
            tags: ["C", "Multithreading", "Semaphores", "Makefile"],
            url: "", 
            private: true,
        },
    ],
    skills: {
        languages: [
            "Python",
            "Java",
            "JavaScript",
            "C++",
            "C",
            "HTML",
            "CSS",
        ],
        frameworks: [
            "React",
            "Node.js",
            "Express.js",
            "FastAPI",
        ],
        databases: [
            "MongoDB",
        ],
        tools: [
            "Git",
            "Postman",
            "VS Code",
        ],
        courses: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Software Engineering",
            "Systems Programming",
            "Web Applications",
            "Cryptography & Authentication",
            "Statistical Modelling",
            "Linear Algebra",
            "Calculus",
        ]
    },
    contact: [
        {
            label: "Email",
            value: "emilyhuynh06@gmail.com",
            url: "mailto:emilyhuynh06@gmail.com",
            svgPath: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        },
        {
            label: "GitHub",
            value: "emiHuy",
            url: "https://github.com/emiHuy",
            svgPath: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        },
        {
            label: "LinkedIn",
            value: "emily-huynh-tt8",
            url: "https://linkedin.com/in/emily-huynh-tt8",
            svgPath: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
        },
    ]
}

const stringMap = {
    titles: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
    },
    skills: {
        languages: "Languages",
        frameworks: "Frameworks & Libraries",
        databases: "Databases",
        tools: "Tools",
        concepts: "Concepts",
        courses: "Relevant Coursework",
    }
}