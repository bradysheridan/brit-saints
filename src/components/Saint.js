import React from 'react';
import Markdown from 'react-markdown';

function Saint({ data, content, isSelected, selected, inactive, onSelect }) {
  return(
    <div
      className={["saint-wrap", isSelected && "selected", selected && "selected", inactive && "inactive"].join(" ")}
      onClick={inactive ? null : onSelect}
    >
      <p className="name">{data.name}</p>
      {!selected && <Markdown className="preview-text">{data.previewText}</Markdown>}
      {selected && <Markdown className="body">{content}</Markdown>}
    </div>
  )
}

export default Saint;
