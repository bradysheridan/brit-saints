import React from 'react';
import Markdown from 'react-markdown';

import lorem from '../config/lorem';

function About() {
  return(
    <div className="about__wrap no-list-style">
      <Markdown>
{`*Maps are not territory; they are spaces, spaces to be crossed and recrossed and experienced from every angle. The only to understand a map is to get down into it, to play at the edges, to jump into the center and back out again.” (Pinto 2016)*

*“What persists is what was recently defined as an ‘archaeology of the disappeared’: material traces or (immaterial traces...) that allow us to recreate a sacred space that defines the territories in which they are found.” (Aillet and Tuil Leonetti 2015; El Hour 2022)*

**This project was narrated on the authority of:**
- Brittany Landorf [(Emory University, Graduate Division of Religion)](http://gdr.emory.edu/people/student-directory.html). When not mapping, she writes about [Sufism, gender, and sexuality in North Africa](https://brill.com/view/journals/jie/4/1-2/article-p128_7.xml?language=en), the figuring of madness, and the ethics of bewilderment.
- Muḥammad ibn Ja‘far al-Kattānī (1857-1927), *Salwat al-anfās wa muḥādathat al-akyās mi-man uqbira min al-‘ulamā’ wa sulahā’ bi Fās* (1887)
- Muḥammad al-Idrīsī (d. 1165), *Kitāb Nuzhat al-mushtāq fī ikhtirāq al-āfāq.* Oxford, Bodleian Library MS. Pococke 375: [https://digital.bodleian.ox.ac.uk/objects/ced0d8bd-1019-4af2-9086-e411115f1507/](https://digital.bodleian.ox.ac.uk/objects/ced0d8bd-1019-4af2-9086-e411115f1507/surfaces/09067ca1-6c3d-47af-af47-8ad4d3f5756b/)

**Many thanks to:**
- Meriem El Haitami, for whose friendship, insights, and love of the female saints of Fez, past and present, made this project possible.
- Emory Center for Digital Scholarship & the HASTAC Digital Humanities Fellowship
- Brady Sheridan, the scholar-coder. (@Brady Sheridan link your website!)`}
      </Markdown>
    </div>
  )
}

export default About;
