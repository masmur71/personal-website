export type Project = {
  title: string;
  track: string;
  summary: string;
  metric: string;
  metricNote: string;
  stack: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    title: "Insurance Claim Review API",
    track: "Software Engineering",
    summary: "Scores vehicle insurance claims so reviewers know which ones to investigate first. Trained, evaluated and served as a containerised API.",
    metric: "1.86 s → 0.024 s",
    metricNote: "100 claims: individual requests vs one batch call, synthetic data",
    stack: ["Python", "scikit-learn", "FastAPI", "Docker", "GitHub Actions"],
    repo: "https://github.com/masmur71/insurance-fraud-detection-ml-pipeline",
  },
  {
    title: "Revenue Leakage Analysis",
    track: "Data Analytics",
    summary: "PostgreSQL and Excel analysis of sales, returns, pricing and receivables for a synthetic FMCG distributor, built to find where revenue actually leaks.",
    metric: "95.4%",
    metricNote: "of outstanding billed receivables overdue (IDR 3.24B), synthetic data",
    stack: ["PostgreSQL", "SQL", "Excel", "Power Query"],
    repo: "https://github.com/masmur71/revenue-leakage-analysis",
  },
  {
    title: "PolisKu Incident Lab",
    track: "Software Engineering",
    summary: "Five deliberate failures in a policy and claims API, each diagnosed with SQL, logs and runtime metrics, fixed, then re-measured.",
    metric: "78 ms → 0.2 ms",
    metricNote: "query execution after indexing, measured locally; HTTP throughput 92 → 377 req/s",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Prometheus", "Grafana"],
    repo: "https://github.com/masmur71/polisku-incident-lab",
  },
  {
    title: "Synthetic Claim Dataset",
    track: "Data Analytics",
    summary: "Seeded generator for the vehicle insurance claims the review API is trained on, with planted fraud, missing values and 2025 drift.",
    metric: "4 tables",
    metricNote: "customers, policies, claims, workshops; hidden labels kept separate",
    stack: ["Python", "pandas", "NumPy", "Jupyter"],
    repo: "https://github.com/masmur71/synthetic-vehicle-insurance-fraud",
  },
];

export const skills = [
{label:"Python",icon:"python"},
{label:"NumPy",icon:"numpy"},
{label:"pandas",icon:"pandas"},
{label:"Matplotlib",icon:"matplotlib"},
{label:"SQL",icon:"sql"},
{label:"JavaScript",icon:"javascript"},
{label:"TypeScript",icon:"typescript"},
{label:"React",icon:"react"},
{label:"Next.js",icon:"nextjs"},
{label:"Power BI",icon:"powerbi"},
{label:"TensorFlow",icon:"tensorflow"},
{label:"scikit-learn",icon:"scikitlearn"},
{label:"Git",icon:"git"},
{label:"GitHub",icon:"github"},
{label:"Docker",icon:"docker"},
{label:"Prometheus",icon:"prometheus"},
{label:"Grafana",icon:"grafana"}
];
