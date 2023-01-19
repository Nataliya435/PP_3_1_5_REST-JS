userInfo();

function userInfo() {
    fetch("http://localhost:8080/user/userAuth")
        .then(res => res.json())
        .then(data => {
            $('#headerUserName').append(data.login);

            let roles =  data.roles.map(e => e.role) ;
            $('#headerRole').append(roles);
            let user = `$(
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.surname}</td>
                    <td>${data.login}</td>
                    <td>${data.age}</td>   
                    <td>${data.password}</td>   
                    <td>${roles}</td>
                </tr>)`;
            $('#userTable').append(user);
        })
}