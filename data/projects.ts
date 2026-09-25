export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  reverse?: boolean;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    title: "DAMFit",
    description: "Gym management app for trainers and clients.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "JWT"],
    repoUrl: "https://github.com/Karls3fni/DAMFit",
    imageUrl: "/damfit.jpg",
  },
  {
    title: "Cuadra",
    description: "Personal expense management application.",
    stack: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "Angular"],
    repoUrl: "https://github.com/Karls3fni/cuadra",
    reverse: true,
    imageUrl: "/cuadra.jpg",
  },
];