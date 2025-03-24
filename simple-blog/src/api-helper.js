// api-helper.js
export const signupUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
      return { result, status: response.ok };
    } catch (error) {
      console.error('Error signing up:', error);
      return { result: 'There was an error signing up. Please try again later.', status: false };
    }
  };
  

export const loginUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    return { result, status: response.ok };
  } catch (error) {
    console.error('Error logging in:', error);
    return { result: 'There was an error logging in. Please try again later.', status: false };
  }
};
