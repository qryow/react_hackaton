import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  // Используем useSelector для доступа к foundProfile из Redux State
  const foundProfile = useSelector(state => state.profile.activeProfile);
  console.log(foundProfile);

  // Выводим информацию о найденном профиле
  return (
    <div>
      <h1>Profile Page</h1>
      {foundProfile ? (
        <div>
          <p>First Name: {foundProfile.firstName}</p>
          <p>Last Name: {foundProfile.lastName}</p>
          {/* Другие поля профиля */}
        </div>
      ) : (
        <p>No profile found</p>
      )}
    </div>
  );
};

export default Profile