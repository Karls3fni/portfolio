export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "DAMfit",
    description: "Aplicación de gestión de gimnasio para entrenadores y clientes.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "JWT"],
    repoUrl: "https://github.com/Karls3fni/DAMFit",
  },
  {
    title: "Cuadra",
    description: "Aplicación de gestión de gastos personales.",
    stack: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "Angular"],
    repoUrl: "https://github.com/Karls3fni/cuadra",
  },
];