import React from 'react';
import Markdown from 'react-markdown';

function Saint({
  title,
  title_arabic,
  preview_text,
  preview_text_arabic,
  description,
  description_arabic,
  lang,
  isSelected,
  selected,
  inactive,
  onSelect
}) {
  let _title = title,
      _previewText = preview_text,
      _description = description;

  if ('ar' === lang) {
    if (title_arabic) _title = title_arabic;
    if (preview_text_arabic) _previewText = preview_text_arabic;
    if (description_arabic) _description = description_arabic;
  }

  console.log("saint got lang" ,lang)

  return(
    <div
      className={["saint-wrap", "rtl", isSelected && "selected", selected && "selected", inactive && "inactive"].join(" ")}
      onClick={inactive ? null : onSelect}
    >
      <p className="name">{_title}</p>
      {!selected && <Markdown className="preview-text">{_previewText}</Markdown>}
      {selected && <Markdown className="body">{_description}</Markdown>}
    </div>
  )
}

export default Saint;
