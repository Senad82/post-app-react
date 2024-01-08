import React from "react";

const active = {
  backgroundColor: "#165a72",
  color: "#fff",
};

function Sidebar({ tags, selectedTag, currentTag }) {
  const renderTags = () =>
    tags.map((tag, index) => {
      return (
        <li key={index} className="list-group-item">
          <button
            className="btn btn-info w-100"
            style={currentTag === tag ? active : null}
            onClick={() => selectedTag(tag)}
          >
            {tag}
          </button>
        </li>
      );
    });

  return <ul className="list-group list-group-flush">{renderTags()}</ul>;
}

export default Sidebar;
