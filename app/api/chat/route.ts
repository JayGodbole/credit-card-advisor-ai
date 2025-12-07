import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('Chat API called');
    const body = await request.json();
    const { message } = body;
    console.log('Received message:', message);

    // Validate required fields
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Connect to local AI model (Ollama)
    console.log('Connecting to Ollama API');
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tinyllama',
        prompt: `You are a credit card advisor AI assistant. Provide helpful advice about credit cards, rewards programs, and financial management. The user asks: ${message}`,
        stream: false
      }),
    });

    console.log('Ollama API response status:', response.status);
    const data = await response.json();
    console.log('Ollama API response data:', data);
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to generate response');
    }

    return NextResponse.json({
      response: data.response
    });
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}