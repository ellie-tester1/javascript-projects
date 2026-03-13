const newUser ={
    name: 'Maria'
    
};

fetch('https://reqres.in/api/users')
.then(res => {
  if (!res.ok){
    console.log('Problem');
    return;
  }
  return res.jsosn();
})
.then(data => {
    console.log(data.data[2].first_name);
})
.catch(error => {
    console.log(error);
});
document.getElementById("root").innerHTML = "<h1>Edusity Landing Page</h1>";