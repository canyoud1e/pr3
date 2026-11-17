export function filterByCity(users, city) {
    return users.filter(user => user.address.city === city);
}

export function sortByName(users) {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
}