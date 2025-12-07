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
    const longQuestionKeywords = ['analysis', 'compare', 'detailed', 'explain', 'how', 'why', 'benefits', 'advantages', 'disadvantages', 'chart', 'graph', 'visualize', 'best', 'recommend'];
    
    if (longQuestionKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      responseType = 'detailed';
    }

    // Create prompt based on response type with better guidance
    let prompt;
    if (responseType === 'detailed') {
      prompt = `You are a credit card advisor AI assistant. Provide helpful advice about credit cards, rewards programs, and financial management. The user asks: ${message}
      
      Please provide a comprehensive response with:
      1. Specific credit card recommendations when applicable (mention actual card names like "Chase Sapphire Preferred", "American Express Gold", etc.)
      2. Clear explanations of why these cards are suitable
      3. Key features and benefits of recommended cards
      4. Any important considerations or limitations
      
      If the question involves numerical data that can be visualized (like comparing rewards rates, fees, or benefits), include a CHART_DATA section in your response using this format:
      
      CHART_DATA_START:{"type":"bar|pie","data":{"labels":["Label1","Label2"],"values":[10,20]}}CHART_DATA_END
      
      Even if you don't have the latest specific details about particular cards, provide general guidance based on typical features of similar cards. Focus on well-known card types and their common benefits.
      
      Format your response in a clear, structured way with paragraphs.`;
    } else {
      prompt = `You are a credit card advisor AI assistant. Provide a concise, clear answer about credit cards, rewards programs, and financial management. The user asks: ${message}
      
      Give a brief, direct answer in 1-2 short paragraphs. When recommending cards, mention specific card names (like "Chase Sapphire Preferred", "American Express Gold", etc.) rather than just describing features.
      
      Even if you don't have the latest specific details about particular cards, provide general guidance based on typical features. Focus on well-known card types.`;
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
    
    // Clean up the response by removing extra whitespace
    formattedResponse = formattedResponse.trim();

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