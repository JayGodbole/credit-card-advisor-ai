import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // Validate required fields
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Determine response style based on question complexity
    let responseType = 'concise';
    const longQuestionKeywords = ['analysis', 'compare', 'detailed', 'explain', 'how', 'why', 'benefits', 'advantages', 'disadvantages'];
    
    if (longQuestionKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      responseType = 'detailed';
    }

    // Create prompt based on response type
    let prompt;
    if (responseType === 'detailed') {
      prompt = `You are a credit card advisor AI assistant. Provide a detailed analysis about credit cards, rewards programs, and financial management. The user asks: ${message}
      
      Please provide a comprehensive response with:
      1. A clear explanation
      2. Specific examples when relevant
      3. Key considerations
      4. Actionable advice
      
      Format your response in a clear, structured way with paragraphs.`;
    } else {
      prompt = `You are a credit card advisor AI assistant. Provide a concise, clear answer about credit cards, rewards programs, and financial management. The user asks: ${message}
      
      Give a brief, direct answer in 1-2 short paragraphs.`;
    }

    // Connect to local AI model (Ollama)
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tinyllama',
        prompt: prompt,
        stream: false
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to generate response');
    }

    // Format the response
    let formattedResponse = data.response;
    
    // Clean up the response by removing extra whitespace and formatting
    formattedResponse = formattedResponse
      .replace(/
\s*
\s*
/g, '

') // Remove extra blank lines
      .trim();

    return NextResponse.json({
      response: formattedResponse
    });
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}