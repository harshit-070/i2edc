import { about } from "../../portfolio";
import "./About.css";
import React from "react";
const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Welcome to <span className="about__name link">E-cell!</span>
        </h1>
      )}

      {role && <h2 className="about__role link">About Us</h2>}
      <p className="about__desc">
        The Entrepreneurship Cell, IIT Jammu, aims to identify the brightest
        ideas from aspirants and helps them by giving them a platform to convert
        their ideas into successful startups. The cell&apos;s mission is to help
        aspiring entrepreneurs start and grow their businesses by creating
        various opportunities like interactive sessions with professionals and
        business competitions to increase awareness to help them understand the
        business world, foster entrepreneurial thinking, and instil confidence
        in every aspirant. The cell&apos;s vision is to help students with an
        idea, product and burning desire to give HR, management, influential
        skills, market exposure and investors for their startup.
      </p>

      {role && <h2 className="about__role link">What We Do</h2>}
      <p className="about__desc">
        E-Cell organises a variety of events to promote entrepreneurial
        activities in and around the campus.Events like Case study
        Competition,Ideathon,Treasure Hunt and other exploration games have been
        conducted,which are mind boosting sessions for IIT Jammu Students.
        E-Cell also conducts workshops and talks of well-known Entrepreneurs.
      </p>
      {/* <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */}

      {/* {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )} */}

      {/* {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </> */}
      {/* )}
      </div> */}
    </div>
  );
};

export default About;
