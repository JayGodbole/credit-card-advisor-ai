# Credit Card Advisor AI

A professional, conversion-focused web app to help users choose the right credit card using AI recommendations.

## Features

- Modern SaaS-style website with blue-white color theme
- Responsive design for desktop and mobile
- Professional UI with soft gradients and rounded edges
- Conversion-focused landing page with clear CTAs
- Membership pricing at ₹499/month
- Secure payment integration
- Dashboard for personalized recommendations
- Support and FAQ section

## Pages

1. **Home Page** - Main landing page with hero section, benefits, testimonials, and pricing
2. **Payment Page** - Secure checkout via PhonePe
3. **Thank You Page** - Confirmation after successful payment
4. **Dashboard Page** - User's personalized credit card insights
5. **Support Page** - Contact form and FAQ
6. **Terms & Privacy Page** - Legal information

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This app is ready for deployment to Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

Create a `.env.local` file with the following:
```
NEXT_PUBLIC_INSTAMOJO_URL=your_payment_link_here
```

## Customization

To customize the payment link, update the `NEXT_PUBLIC_INSTAMOJO_URL` environment variable.