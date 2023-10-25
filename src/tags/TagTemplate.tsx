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
      <li
        key={Task.description}
        style={{
          listStyle: "none",
          textDecoration: isCompleted ? "line-through" : "none",

          display: "flex",
          flexDirection: "row",
        }}
      >
        <input type="checkbox" checked={isCompleted} />

        <p>
          {`${Task.completed}/${Task.required} - ${Task.description} ${cannotCompute}`}
        </p>
      </li>
    );
  }

  return (
    <div>
      {tagData ? (
        <div>
          <img src={tagData.image} alt={tagData.name} />
          <div>
            <h3>{tagData.name}</h3>
            <ul>
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
