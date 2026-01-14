// Simple test script to check if the chat API is working
const testChatAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello, what credit card would you recommend for travel?',
      }),
    });

    const data = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

testChatAPI();