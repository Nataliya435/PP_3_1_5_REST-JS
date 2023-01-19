async function openModal(form, modal, id){
    modal.show();
    let user = await getUser(id);
    form.id.value = user.id;
    form.name.value = user.name;
    form.surname.value = user.surname;
    form.login.value = user.login;
    form.age.value = user.age;
    form.password.value = user.password;
    form.roles.value = user.roles[0].id;
}