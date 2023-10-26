import { useState, useEffect } from "react";

function TagTemplate(props: { tagData: TagData }) {
  const [tagData, setTagData] = useState(null) as any;

  useEffect(() => {
    setTagData(props.tagData);
  }, [props]);

  function rTask(Task: Task) {
    return (
      <li key={Task.description} className="list-none">
        <div className="p-4">
          <div
            className={`w-40 rounded-full flex ${
              Task.canCompute ? "bg-teal-900" : "bg-purple-900"
            }`}
          >
            <div
              className="h-2 rounded-full bg-green-300"
              style={{ width: `${(Task.completed / Task.required) * 100}%` }}
            ></div>
          </div>

          <p className="text-sm">
            {`${Task.completed}/${Task.required} - ${Task.description}`}
          </p>
        </div>
      </li>
    );
  }

  return (
    <div>
      {tagData ? (
        <div className="m-6 items-center inline-flex flex-row">
          <img
            src={tagData.image}
            alt={tagData.name}
            className="rounded pr-4"
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
