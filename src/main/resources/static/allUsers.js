

const table = $('#usersTable');

const personsFetchUrl = "http://localhost:8080/api/users";
findAll();

function findAll() {
    table.empty()
    fetch(personsFetchUrl)
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                let usersTable = `$(
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.surname}</td>
                            <td>${user.login}</td>   
                            <td>${user.age}</td>
                            <td>${user.password}</td>
                            <td>${user.roles.map(e => e.role)}</td>
                            
                            <td>
                                <button type="button" class="btn btn-info"
                                data-bs-toogle="modal"
                                data-bs-target="#editModal"
                                onclick="editForm('${user.id}')">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger" 
                                data-toggle="modal"
                                data-bs-target="#deleteModal"
                                onclick="deleteForm(${user.id})">Delete</button>
                            </td>
                        </tr>)`;
                table.append(usersTable);
            })
        })
}