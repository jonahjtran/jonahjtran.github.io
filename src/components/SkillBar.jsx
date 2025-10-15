
export default function SkillBar({ name, level }) {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="uppercase text-sm text-gray-300">{name}</span>
          <span className="text-gray-400 text-sm">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  }