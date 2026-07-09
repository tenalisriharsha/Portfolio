import { useState } from 'react';
import PropTypes from 'prop-types';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  const [hasError, setHasError] = useState(false);

  const getInitials = (lang) => {
    return lang
      .split(/[\s\-+.]+/)
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        {hasError ? (
          <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center transform transition-transform duration-300">
            <span className="text-white font-bold text-xl md:text-2xl">
              {getInitials(Language)}
            </span>
          </div>
        ) : (
          <img
            src={TechStackIcon}
            alt={`${Language} icon`}
            className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

TechStackIcon.propTypes = {
  TechStackIcon: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired,
};

export default TechStackIcon;
