import { NextResponse } from 'next/server';

// Mock AI recommendations generator
// In a real implementation, this would connect to a local AI model like Ollama
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userData, spendingPatterns } = body;

    // Validate required fields
    if (!userData || !spendingPatterns) {
      return NextResponse.json(
        { error: 'User data and spending patterns are required' },
        { status: 400 }
      );
    }

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate mock recommendations based on spending patterns
    const recommendations = generateMockRecommendations(spendingPatterns);

    return NextResponse.json({
      message: 'AI recommendations generated successfully',
      recommendations
    });
  } catch (error) {
    console.error('AI recommendation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate AI recommendations' },
      { status: 500 }
    );
  }
}

// Mock recommendation generator
// In a real implementation, this would use a local AI model
function generateMockRecommendations(spendingPatterns: any) {
  const recommendations = [];
  
  // Analyze spending patterns
  const travelPercentage = spendingPatterns.travel || 0;
  const groceriesPercentage = spendingPatterns.groceries || 0;
  const diningPercentage = spendingPatterns.dining || 0;
  const shoppingPercentage = spendingPatterns.shopping || 0;
  
  // Generate recommendations based on spending patterns
  if (travelPercentage > 20) {
    recommendations.push({
      id: 1,
      name: "Platinum Travel Rewards Card",
      issuer: "Global Bank",
      annualFee: 500,
      cashback: "3% on travel, 2% on dining",
      introOffer: "50,000 bonus points",
      rating: 4.8,
      bestFor: "Frequent travelers",
      estimatedSavings: Math.round(travelPercentage * 80),
      features: ["Airport lounge access", "No foreign transaction fees", "Travel insurance"],
      explanation: "Based on your travel spending, this card maximizes your rewards with 3% cashback on all travel purchases."
    });
  }
  
  if (groceriesPercentage > 15) {
    recommendations.push({
      id: 2,
      name: "Premium Gold Card",
      issuer: "City Finance",
      annualFee: 250,
      cashback: "5% on groceries, 3% on gas",
      introOffer: "20% off first year",
      rating: 4.7,
      bestFor: "Family shoppers",
      estimatedSavings: Math.round(groceriesPercentage * 60),
      features: ["Extended warranty", "Purchase protection", "Concierge service"],
      explanation: "With significant grocery spending, this card offers the highest cashback in that category."
    });
  }
  
  if (diningPercentage > 10) {
    recommendations.push({
      id: 3,
      name: "Dining Rewards Card",
      issuer: "Restaurant Bank",
      annualFee: 95,
      cashback: "4% on dining, 2% on entertainment",
      introOffer: "₹1000 dining credit",
      rating: 4.5,
      bestFor: "Food enthusiasts",
      estimatedSavings: Math.round(diningPercentage * 40),
      features: ["Restaurant discounts", "Reservation benefits", "Entertainment perks"],
      explanation: "Your dining spending qualifies you for this card with excellent restaurant rewards."
    });
  }
  
  // Always include a general cashback option
  recommendations.push({
    id: 4,
    name: "Cashback Mastercard",
    issuer: "National Bank",
    annualFee: 0,
    cashback: "1.5% on all purchases",
    introOffer: "₹500 cashback on first purchase",
    rating: 4.5,
    bestFor: "General spending",
    estimatedSavings: Math.round((travelPercentage + groceriesPercentage + diningPercentage + shoppingPercentage) * 15),
    features: ["No annual fee", "Zero liability protection", "Mobile wallet support"],
    explanation: "A solid all-around card with no annual fee and consistent cashback on all purchases."
  });
  
  return recommendations;
}