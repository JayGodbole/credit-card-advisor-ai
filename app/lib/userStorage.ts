import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'users.json');

// Ensure the data file exists
function ensureDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
}

// Read users from file
export function getUsers() {
  ensureDataFile();
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

// Save users to file
export function saveUsers(users: any[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));
}

// Find user by email
export function findUserByEmail(email: string) {
  const users = getUsers();
  return users.find((user: any) => user.email === email);
}

// Create a new user
export function createUser(userData: { name: string; email: string; password: string }) {
  const users = getUsers();
  
  // Check if user already exists
  if (findUserByEmail(userData.email)) {
    throw new Error('User with this email already exists');
  }
  
  // Add new user
  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  return newUser;
}

// Validate user credentials
export function validateUserCredentials(email: string, password: string) {
  const user = findUserByEmail(email);
  if (!user) {
    return null;
  }
  
  // In a real app, you would hash and compare passwords
  // For this demo, we're just checking if passwords match
  if (user.password === password) {
    // Return user without password
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  
  return null;
}