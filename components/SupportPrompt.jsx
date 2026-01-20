import { Link } from "react-router-dom";

const SupportPrompt = ({paragraphDescription, linkDescription,route}) => {
  return (
    <p className="support-text">
      {paragraphDescription}{' '}
      <Link
        to={route}
        className="support-link-2">
        {linkDescription}
      </Link>
    </p>
  );
};

export default SupportPrompt;