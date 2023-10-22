import { useState, useEffect } from "react";

function TagTemplate(props: { tagData: TagData }) {
  const [tagData, setTagData] = useState(null) as any;

  useEffect(() => {
    setTagData(props.tagData);
  }, [props]);

  return (
    <div>
      {tagData ? (
        <div>
          <img src={tagData.image} alt={tagData.name} />
          <div>
            <h3>{tagData.name}</h3>
            <ul>
              {tagData.tasks.map((task: any) => {
                return (
                  <li key={task.id}>
                    <h4>{task.name}</h4>
                    <p>
                      {task.completed}/{task.required}
                    </p>
                  </li>
                );
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
