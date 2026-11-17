const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Завантаження та парсинг списку користувачів
export async function fetchUsers() {
    let response;

    try {
        response = await fetch(API_URL);
    } catch (error) {
        throw new Error('Мережева помилка: ' + error.message);
    }

    if (!response.ok) {
        throw new Error('Помилка HTTP: ' + response.status);
    }

    const text = await response.text();

    try {
        return JSON.parse(text);
    } catch (error) {
        throw new Error('Невалідний JSON: ' + error.message);
    }
}