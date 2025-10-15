import SkillBar from "./SkillBar";

export default function SkillsSection() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "JS/TS/React", level: 85 },
    { name: "C/C++", level: 70 },
    { name: "Java", level: 65 },
    { name: "SQL", level: 80 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">SKILLS</h2>
      <p className="text-gray-300 mb-6">
        Experienced in full-stack development and machine learning. 
        Below are my primary technical proficiencies:
      </p>

      {skills.map((skill, i) => (
        <SkillBar key={i} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}
