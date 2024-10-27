const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'}
  };
  
  fetch('https://api.qase.io/v1/custom_field', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));