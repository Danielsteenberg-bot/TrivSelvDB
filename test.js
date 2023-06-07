const { getUsers } = require('./app');

getUsers((error, users) => {
  if (error) {
    console.error('Error retrieving users:', error);
    // Handle the error appropriately
  } else {
    // Use the retrieved users
    console.log(users);
    // Perform any necessary operations with the users
  }
});
