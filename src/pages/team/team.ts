interface TeamMember {
  pseudoName: string;
  name: string;
  description: string;
  linkedin: string;
  github: string;
}

export type TeamCategories = "FOURTH YEAR" | "THIRD YEAR" | "SECOND YEAR" | "ALUMNI";

export const teamData: Record<TeamCategories, TeamMember[]> = {
  "FOURTH YEAR": [
    {
      pseudoName: "p0k3m0n",
      name: "Ansh Rane",
      description: "Forensics",
      linkedin: "https://linkedin.com/ansh",
      github: "https://github.com/ansh",
    },
    // Add more team members here...
  ],
  "THIRD YEAR": [
    {
      pseudoName: "p0k3m0n",
      name: "Ansh Rane",
      description: "Forensics",
      linkedin: "https://linkedin.com/ansh",
      github: "https://github.com/ansh",
    },
  ],
  "SECOND YEAR": [
    {
      pseudoName: "p0k3m0n",
      name: "Ansh Rane",
      description: "Forensics",
      linkedin: "https://linkedin.com/ansh",
      github: "https://github.com/ansh",
    },
  ],
  "ALUMNI": [
    {
      pseudoName: "p0k3m0n",
      name: "Ansh Rane",
      description: "Forensics",
      linkedin: "https://linkedin.com/ansh",
      github: "https://github.com/ansh",
    },
  ],
};
