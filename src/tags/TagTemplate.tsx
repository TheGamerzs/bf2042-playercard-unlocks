import { useState, useEffect } from "react";

function TagTemplate(props: { tagData: TagData }) {
  const [tagData, setTagData] = useState(null) as any;

  useEffect(() => {
    setTagData(props.tagData);
  }, [props]);

  function rTask(Task: Task) {
    const isCompleted = Task.completed >= Task.required;
    const cannotCompute = Task.canCompute ? "" : " - Cannot compute";

    return (
      <li key={Task.description} className="flex flex-row list-none">
        <input type="checkbox" checked={isCompleted} className="mr-2" />

        <p className="text-sm">
          {`${Task.completed}/${Task.required} - ${Task.description} ${cannotCompute}`}
        </p>
      </li>
    );
  }

  return (
    <div>
      {tagData ? (
        <div className="flex flex-row m-6">
          <img
            src={tagData.image}
            alt={tagData.name}
            className="rounded pr-4 w-16 h-16"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl">{tagData.name}</h3>
            <ul className="flex flex-col">
              {tagData.tasks.map((task: Task) => {
                return rTask(task);
              })}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TagTemplate;
