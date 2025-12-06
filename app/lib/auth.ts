// Simple authentication and subscription management
import { cookies } from 'next/headers';

// Mock user data - in a real app, this would come from a database
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    isSubscribed: true,
    subscriptionDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    isSubscribed: false,
    subscriptionDate: null
  }
];

// Get current user (mock implementation)
export function getCurrentUser() {
  // In a real app, you would check the session/token
  // For now, we'll simulate with a cookie
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  
  if (!userId) return null;
  
  return mockUsers.find(user => user.id === userId) || null;
}

// Check if user is subscribed
export function isUserSubscribed() {
  const user = getCurrentUser();
  return user ? user.isSubscribed : false;
}

// Get subscription status
export function getSubscriptionStatus() {
  const user = getCurrentUser();
  if (!user) return { isSubscribed: false, needsPayment: true };
  
  return { 
    isSubscribed: user.isSubscribed, 
    needsPayment: !user.isSubscribed 
  };
}