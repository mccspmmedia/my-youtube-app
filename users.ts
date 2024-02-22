// users.ts
export interface User {
    username: string;
    password: string;
  }
  
  const users: User[] = [
    { username: 'admin', password: 'password123' },
    { username: 'user', password: '123456' },
    // Добавьте других пользователей по мере необходимости
  ];
  
  export default users;
  