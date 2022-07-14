import React from 'react';
import Markdown from 'react-markdown';

import lorem from '../config/lorem';

function About({ lang, content }) {
  let text = ("en" === lang)
    ? content.text
    : content.text_arabic

  return(
    <div className="about__wrap rtl">
      <div className="about__wrap-inner no-list-style">
        <Markdown>
          {text}
        </Markdown>
      </div>
    </div>
  )
}

export default About;
