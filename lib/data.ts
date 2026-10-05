// TODO: replace every YOUR_* placeholder with your real profile URL.
export const links = {
  github: "https://github.com/AnkitCoder81",
  linkedin: "https://www.linkedin.com/in/ankit-mishra-566637341",
  leetcode: "https://leetcode.com/u/7ykeYO9m11",
  gfg: "https://www.geeksforgeeks.org/user/ankit23es1i",
  resume: "/Ankit_Mishra_Resume.pdf",
  email: "ankit23459869@gmail.com",
};
export const repos = {
  cortexai: "https://github.com/AnkitCoder81/cortex-ai",
  stock: "https://github.com/AnkitCoder81/stock-analyst-ai",
  research: "https://github.com/AnkitCoder81/deep_reseacher_agent",
};
export const nav = ["Home","About","Skills","Projects","Achievements","Education","Contact"];
export const stats = [["1000+","DSA problems solved"],["7.86/10","Current CGPA"],["1684","LeetCode rating"],["2027","Expected graduation"]];
export const skills: Record<string,string[]> = {
  "Languages":["Python","Java","C","JavaScript"],
  "Core CS":["Data Structures & Algorithms","DBMS","Operating Systems","Computer Networks","OOP","SDLC"],
  "Web & Databases":["HTML","CSS","React.js","Redux","MongoDB","SQL","PostgreSQL"],
  "Backend":["Node.js","Express.js","FastAPI","REST API Development","Microservices","Firebase Auth","Razorpay","MERN Stack"],
  "AI / Generative AI":["Machine Learning","Deep Learning","LangChain","LangGraph","LangSmith","MCP","NLP","Agentic RAG","Vector Databases","n8n"],
  "Cloud & DevOps":["AWS EC2","AWS S3","Application Load Balancer","Docker","Docker Compose","CI/CD","Linux"],
  "Tools":["Git","GitHub","Postman","Streamlit"],
};
export const agents = ["Chat","Coding","Image","PDF","PDF-RAG","PPT","Search","Vision"];
export const services = ["Gateway","Agent","Auth","Billing","Chat"];
export const features = [
  ["Microservices Architecture","Independent gateway, agent, auth, billing, and chat services."],
  ["AI Orchestration","LangGraph-based multi-agent workflow with dynamic routing and state management."],
  ["Billing","Razorpay integration with credit-based usage metering."],
  ["Authentication","Google OAuth through Firebase, enforced at the API gateway."],
  ["Storage","AWS S3 file storage."],
  ["Cloud Infrastructure","Dockerized services deployed on AWS EC2 behind an Application Load Balancer."],
  ["Frontend","React + Redux responsive chat interface."],
  ["Document Generation","Automated PDF/PPT report generation."],
];
export const projects = [
  { name:"Stock Analyst", type:"AI financial intelligence platform", desc:"Generates investment research reports for global equities.", tech:["Python","LangGraph","Groq LLM","Streamlit"], concepts:["Financial data retrieval","Technical analysis pipelines","Multi-agent workflow","Automated report generation","Interactive Streamlit interface"], repo:repos.stock },
  { name:"AI Deep Research Agent", type:"Autonomous research agent", desc:"Iterative web exploration and multi-source information synthesis.", tech:["LangGraph","LangChain","Groq LLM","Tavily Search"], concepts:["Iterative web exploration","Multi-source synthesis","Groq LLM inference","AI-generated research reports","Streamlit dashboard"], repo:repos.research },
];
export const dsaTopics = ["Arrays","Strings","Linked Lists","Stacks","Queues","Trees","Graphs","Dynamic Programming","Greedy","Binary Search","Sliding Window","Monotonic Stack"];
export const achievements = [
  ["1000+ DSA Problems","Solved across coding platforms."],
  ["LeetCode — 1684 Rating","Top 20% (1,000 of 15,000+) in LeetCode Biweekly Contest 92."],
  ["Error Hunt","2nd place in a college-level coding competition."],
  ["Binary Club","Member; managed a team of 50+ members and led club operations."],
  ["Hackathons","Participated in ByteVerse 7.0 (NIT Patna) and Power Blitz, a Power BI hackathon."],
];
