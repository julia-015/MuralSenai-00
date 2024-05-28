import React from 'react';
import { View, StyleSheet } from 'react-native';
import Gallery from 'react-native-awesome-gallery';


interface AvailabilityProps {
  available: boolean;
  message?: string;
}

const Availability: React.FC<AvailabilityProps> = ({ available, message }) => {
  return (
    <div>
      {available ? (
        <div className="available">
          <i className="fas fa-check"></i> Available
          {message && <span className="message">{message}</span>}
        </div>
      ) : (
        <div className="unavailable">
          <i className="fas fa-times"></i> Unavailable
          {message && <span className="message">{message}</span>}
        </div>
      )}
    </div>
  );
};

export default Availability;