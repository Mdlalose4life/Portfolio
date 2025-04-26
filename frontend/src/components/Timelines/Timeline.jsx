/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/Timeline.css"

const Timeline = ({ items }) => {
  return (
    <div className="timeline-container">
        <div className="education-vertical-line"/>
        {items.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-cycle"></div>
            <div className="timeline-content">
                <h4>{item.title}</h4>
                {item.school === "Duck Pond's High School" ? (
                    <p>{item.school}</p>
                ) : (
                    <Link to={"https://www.alxafrica.com/"} target="__blank">
                        <p>{item.school}</p>
                    </Link>
                )}
                {item.date && <p>{item.date}</p>}
            </div>
        </div>
        ))}
    </div>
  );
};

export default Timeline;