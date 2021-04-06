import React from 'react';
import MediaCard from './MediaCard';
import photo from '../images/mafalda.png';

function MediaList(props) {
  console.log('props de este elemento:', props);

  return (
    <ul>
      <li>
        <MediaCard
          name="Mafalda"
          date="20 de febrero de 2021"
          image={photo}
          description="Test description to Mafalda social card"
          likes="135"
          heart={true}
        />
      </li>
      <li>
        <MediaCard
          name="Sara"
          date="23 de marzo de 1981"
          image={photo}
          description="Test description to Sara social card"
          likes="9"
          heart={true}
        />
      </li>
      <li>
        <MediaCard
          name="Ana"
          date="21 de febrero de 2021"
          image={photo}
          description="Test description to Ana social card"
          likes="35"
          heart={false}
        />
      </li>
    </ul>
  );
}

export default MediaList;
