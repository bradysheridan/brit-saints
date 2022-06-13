import React from 'react';
import Markdown from 'react-markdown';

function Saint({ title, preview_text, description, isSelected, selected, inactive, onSelect }) {
  return(
    <div
      className={["saint-wrap", isSelected && "selected", selected && "selected", inactive && "inactive"].join(" ")}
      onClick={inactive ? null : onSelect}
    >
      <p className="name">{title}</p>
      {!selected && <Markdown className="preview-text">{preview_text}</Markdown>}
      {selected && <Markdown className="body">{description}</Markdown>}
    </div>
  )
}

export default Saint;
