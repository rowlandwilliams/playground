import React from 'react';

interface Props {
  locations: string[];
}

export const ExperienceLocations: React.FC<Props> = ({ locations }) => {
  return (
    <div className="flex gap-x-1">
      {locations.map((location, index) => (
        <React.Fragment key={index}>
          {index < 1 && locations.length > 1 ? (
            <p>
              {location} <span className="text-indigo-500">&#8226; </span>
            </p>
          ) : (
            <p>{location}</p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};