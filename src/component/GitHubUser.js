import React, { useState, useEffect } from 'react';

// As you can see i am taking the username as a prop from any parent compoent 
const GitHubUser = ({ username }) => {
    // this is userData data in which we call the api and set the user data to this state variable
  const [userData, setUserData] = useState(null);
//   i added a loader as well until the data is fecth the loader is true so it will show on screen and 
// set false as the response came from the api
  const [loading, setLoading] = useState(true);
//   this is simple state to show error message that occur during the server call if any
  const [error, setError] = useState(null);


// this is the api call using the axios if you prefer it over fetch data

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         setUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('User not found');
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [username]);


// this is the api call in which i am doing a get resquest to the api using the 
// prop username dynamically in the api to the data for specific user


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

//   if loading is true we show this loader

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <img
        src={userData.avatar_url}
        alt={`${username}'s avatar`}
      />
      <div>{userData.login}</div>
      <h2>Repositories:</h2>
      <ul>
        {userData.repos_url && (
          <li>Loading repositories...</li>
        )}
        {userData.public_repos > 0 ? (
          userData.repos_url &&
          fetch(userData.repos_url)
            .then(response => response.json())
            .then(data => {
              return data.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                </li>
              ));
            })
        ) : (
          <li>No repositories found</li>
        )}
      </ul>
    </div>
  );
};

export default GitHubUser;
