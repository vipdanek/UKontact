import React, { useState, useEffect } from "react";

export const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    // уведомление о том что что-то изменилось
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div></div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
        </div>
      )}
      {setEditMode && (
        <div>
          <input
            onBlur={deactivateEditMode}
            autoFocus={true}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </>
  );
};
