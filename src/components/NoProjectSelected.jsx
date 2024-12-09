import noProject from "../assets/no-task.png";
import Button from "./Button";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProject}
        alt="an empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        NO Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get starter with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
