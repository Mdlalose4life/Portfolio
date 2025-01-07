/* eslint-disable react/prop-types */
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
                    {item.school && <p>{item.school}</p>}
                    {item.date && <p>{item.date}</p>}
                </div>
            </div>
        ))}
    </div>
  );
};

export default Timeline;