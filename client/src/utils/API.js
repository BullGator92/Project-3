import axios from 'axios';

export default {
  // Gets all users
  getUsers: function() {
    return axios.get('/api/users');
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get('/api/users/' + id);
  },
  getUserByEmail: function(email) {
    return axios.get('/api/users?email=' + email);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete('/api/users/' + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios
      .post('/api/users', userData)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getNudges: function() {
    return axios.get('/api/nudges');
  },
  // Gets the user with the given id
  getNudge: function(id) {
    return axios.get('/api/nudges/' + id);
  },
  // Deletes the user with the given id
  deleteNudge: function(id) {
    return axios.delete('/api/nudges/' + id);
  },
  // Saves a user to the database
  saveNudge: function(nudgesData) {
    return axios.post('/api/nudges', nudgesData);
  },
  sendText: function(data) {
    return axios.post('/api/send', data);
  },
  updateUser: function(id, userData) {
    console.log(userData);
    return axios.put('/api/users/' + id, userData);
  }
};
