# BloomStack Website

A collaborative software team dedicated to helping people and ideas bloom through technology.

Built from [nextjs-client-template](https://github.com/natsalinas/nextjs-client-template).

## Stack
- Next.js App Router, React, TypeScript
- Tailwind CSS, Lucide icons
- AWS SES for contact submissions

## Pages
- Home: mission, values, featured projects
- About: team and community
- Projects: ongoing and exploratory initiatives
- Contact: meeting, membership, and collaboration inquiries

## Run locally
```bash
npm ci
npm run dev
```
Visit http://localhost:3000.

## Contact form
The `/api/contact` endpoint uses AWS SES. Configure these **server-side** environment variables in your hosting platform or `.env.local`:

```dotenv
AWS_REGION=us-east-1
CONTACT_FROM_EMAIL=verified-sender@example.com
CONTACT_TO_EMAIL=team@example.com
```

Provide AWS credentials through a secure IAM role or credential provider. Verify the sender in SES; sandbox accounts may require recipient verification. Never commit secrets. Until configured, submissions return an honest unavailable message.

## Validate
```bash
npm run lint
npm run build
```

## Structure
`app/` routes and API handlers · `components/` reusable UI · `config/` site content and project data · `lib/` utilities.

Deploy to a Next.js-compatible hosting platform such as AWS Amplify Hosting, with appropriate SES permissions.
