import React, { useState, useEffect } from "react";
import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { teamData, TeamCategories } from "./team";

const Team: React.FC = () => {
  const categories: TeamCategories[] = [
    "FOURTH YEAR",
    "THIRD YEAR",
    "SECOND YEAR",
    "ALUMNI",
  ];

  const fullText = "Meet Our Team";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeDelay = 100;
    const deleteDelay = 100;
    const pauseDelay = 1000;

    const handleTyping = () => {
      if (isTyping) {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsTyping(false), pauseDelay);
        }
      } else {
        if (index > 0) {
          setDisplayedText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setTimeout(() => setIsTyping(true), pauseDelay);
        }
      }
    };

    const typingInterval = setTimeout(
      handleTyping,
      isTyping ? typeDelay : deleteDelay
    );
    return () => clearTimeout(typingInterval);
  }, [index, isTyping]);

  return (
    <div className="team-container bg-black text-white">
      <div className="text-center p-10">
        <h1 className="text-head text-3xl mb-6">{displayedText}</h1>

        {categories.map((category) => (
          <div key={category}>
            <h2 className="year-heading mb-4">{category}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamData[category].map((member, index) => (
                <div key={index} className="team-member">
                  <h3 className="member-pseudoName">{member.pseudoName}</h3>
                  <p className="member-name">{member.name}</p>
                  <p className="member-description text-sm mb-4">
                    {member.description}
                  </p>
                  {/* Separator line */}
                  <div className="separator"></div>
                  <div className="social-icons">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="1x"
                        className="text-blue-500 mr-2"
                      />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="1x"
                        className="text-gray-400"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
