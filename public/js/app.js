const userInfo = document.querySelector('#user-info');
const msg = document.querySelector('.form-message');

// userInfo.addEventListener('submit', postName);


// AJAX SUBMITTING FORMS

// function postName(e) {
//     e.preventDefault();
//     const name = document.querySelector("#name").value.trim();
//     const sex = document.querySelector("#sex").value.trim();
//     const hobby = document.querySelector("#hobby").value.trim();
//     const msg = document.querySelector('.form-message');
//     var params = `name=${name}&sex=${sex}&hobby=${hobby}`;

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'includes/process.inc.php', true);
//     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

//     xhr.onload = function(){

//         let response = this.responseText;

//         if (response.includes("User Added")) {
//             msg.classList.remove("text-red-500");
//             msg.classList.add("text-green-500");
//             msg.innerText = response;
//             userInfo.reset();
            
//         } else if(response.includes("Fill all forms")) {
//             msg.classList.remove("text-green-500");
//             msg.classList.add("text-red-500");
//             msg.innerText = response;
//         }

        
//     }

//     xhr.send(params);

// };

// ASYNC AND AWAIT SUBMIT USERS TO THE DATA - POST METHOD

userInfo.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userInfo);
    formData.append('property','value');
    addUsers(formData)
    .then(data => {

        if (data.includes("User Added")) {
            msg.classList.remove("text-red-500");
            msg.classList.add("text-green-500");
            msg.innerText = data;
            userInfo.reset();
            
        } else if(data.includes("Fill all forms")) {
            msg.classList.remove("text-green-500");
            msg.classList.add("text-red-500");
            msg.innerText = data;
        }
        
    })
    .catch(err => console.log('rejected', err.message));
});


const addUsers = async (formData) => {

    const response = await fetch('includes/process.inc.php', {
        method: 'POST',
        body: formData
    });

    if (response.status !== 200) {
        throw new Error('Cannot fetch data');
    }
    const data = await response.text();

    return data;
};


//Fetch Users from the database

// document.querySelector('#btn').addEventListener("click", loadUsers);

// function loadUsers() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'includes/users.inc.php', true);
    
//     xhr.onload = function () {
//         if(this.status == 200) {
//             var users = JSON.parse(this.responseText);

//             var output = '';

//             for(var i in users) {
//                 output += '<li>ID:' +users[i].id+ '</li>' +
//                 '<li>ID:'+ users[i].name +'</li>' +
//                 '<li>ID:'+ users[i].sex +'</li>' +
//                 '<li>ID:' +users[i].hobby +'</li>';
//             }

//             document.querySelector('#users').innerHTML = output;
//         }
//     }

//     xhr.send();
// }


// FETCH API ONLY

// document.querySelector('#btn').addEventListener("click", fetchUserData);

// function fetchUserData(e) {
//     e.preventDefault();

//     fetch('includes/users.inc.php')
//         .then(response => response.json())
//         .then(users => {
//             let output = '';

//             users.forEach(user => {
//                 output += `<li> ${user.name} </li> 
//                             <li> ${user.sex} </li> 
//                             <li> ${user.hobby} </li>
//                             `
//             })
//             document.querySelector('#users').innerHTML = output;
//         })
// }


// ASYNC AND AWAIT
document.querySelector('#btn').addEventListener("click", async () => {
    getUsers()
    .then(users => {
        let output = '';

            users.forEach(user => {
                output += `<li> ${user.name} </li> 
                            <li> ${user.sex} </li> 
                            <li> ${user.hobby} </li>
                            `
            })
        document.querySelector('#users').innerHTML = output;
    })
    .catch(err => console.log('rejected', err.message));
});


const getUsers = async () => {
    const response = await fetch('includes/users.inc.php');

    if (response.status !== 200) {
        throw new Error('Cannot fetch data');
    }
    const users = await response.json();

    return users;
};



