import Auth from '../utils/auth';
import type { UserData } from '../interfaces/UserData';

const retrieveUsers = async () => {
  try {
    const response = await fetch('/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

const register = async (userInfo: UserData) => {
  try {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Signup failed');
    }

    return data;
  } catch (err) {
    console.error('Error from user registration:', err);
    return Promise.reject('Could not register user');
  }
};



export { retrieveUsers, register };
