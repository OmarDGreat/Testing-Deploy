import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import selfie from "../assets/images/selfie.jpeg";
import heroBanner from "../assets/images/HeroBanner.png"

function Home() {
  return (
    <div>
      <Hero src={heroBanner}>
        <h1>Emily Kent's Portfolio</h1>
        <h2>Learn a little more about me</h2>
      </Hero>
      <div>
        <h2>About me</h2>
        <p>
          With a previous background in primary education which provided
          opportunities to teach children about computer safety and coding
          applications, a passion to learn and discover more indepth knowledge
          on the coding community was developed. Studies were carried out to
          develop an understanding of the coding profession and the tools and
          applications utilised to perform web development tasks. Initially, a
          level 2 coding course was completed which provided an insight into the
          termonology and workflow of a coding professional. Upon completion of
          that course, an enrolment into the Skills Bootcamp for FrontEnd web
          development was initiated and is currently being completed. This
          course has provided opportunities to activly engage with softwares
          such as HTML, CSS, JavaScript, Jquery, React and the utalisation of
          APIs. Alongside this, opportunities to work collaboratively within a
          group to generate a unique website or application has also been
          provided. With this growing knowledge being obtained from these
          studies, an eager desire to utilse these newly created skills within a
          professional environent has arisen and an excitement to continue this
          knowledge journey is consistently active.
        </p>
        <aside>
          <img src={selfie} />
        </aside>
      </div>
    </div>
  );
}

export default Home;
