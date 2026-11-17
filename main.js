import { fetchUsers } from './api.js';
import { filterByCity, sortByName } from './utils.js';

async function main() {
    const list = document.getElementById('users');
    const errorBox = document.getElementById('error');

    try {
        const users = await fetchUsers();
        const filtered = filterByCity(users, 'Gwenborough');
        const sorted = sortByName(filtered);

        // Вивід у консоль
        console.log(sorted);

        // Вивід у HTML
        if (sorted.length === 0) {
            list.innerHTML = '<li>Користувачів не знайдено</li>';
            return;
        }

        sorted.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email}) - ${user.address.city}`;
            list.appendChild(li);
        });
    } catch (error) {
        errorBox.textContent = error.message;
        console.error(error);
    }
}

main();