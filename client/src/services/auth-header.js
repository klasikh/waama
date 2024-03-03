export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 
      'Access-Control-Allow-Credentials': true,
      'x-access-token': user.accessToken,
      "Content-Type": "application/vnd.api+json", 
      "Accept": "application/vnd.api+json", 
    };       // for Node.js Express back-end
  } else {
    return {};
  }
}
