import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import IconMap from "../../utils/IconsMap";


// eslint-disable-next-line react/prop-types
const ThemedIcons = ({ tech, size = 80, alt }) => {
    const { theme } = useContext(ThemeContext);

    const Icon = IconMap[tech]?.[theme];

    if (!Icon) return null

    return (
        <img
            src={Icon}
            alt={alt || `${tech} logo`}
            style={{ width: size, height: size }}
        />
    )
}
export default ThemedIcons