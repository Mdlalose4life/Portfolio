/* eslint-disable react/prop-types */
import "../../styles/Exptimeline.css"

const Exptimeline = ( { items } ) => {
    return(
    <div className="timeline-container">
        <div className="experience-vertical-line"/>
        {items.map((item, index) => (
            <div className="timeline-item" key={index}>
                <div className="timeline-cycle"></div>
                <div className="timeline-content">
                    <h4>{item.companyName}</h4>
                    <div>{item.date}</div>
                    <ul>
                        {item.desc}
                    </ul>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Exptimeline;