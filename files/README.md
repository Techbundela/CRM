# RecruitCRM Cloud

SaaS CRM for Recruitment Agencies – Lead, Candidate and Job Management with AI Voice Integration

## Features

- Dashboard (Leads, Candidates, Calls, Performance)
- Lead & Candidate Management
- Bulk Candidate Import via Excel
- Call Logging, AI Voice Calls, Recording & Transcript
- WhatsApp Messaging Integration
- Task/Follow-up Management, Role-based Auth
- Vercel-Ready, Mobile-Responsive

## Stack

- **Frontend**: Next.js, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express, MongoDB

## Setup

1. Clone repository
2. Configure `.env`
3. `yarn install` in `/apps/frontend` and `/apps/backend`
4. `docker-compose up` or deploy to Vercel/Render

## Environment Variables

- `MONGODB_URI`: MongoDB Atlas connection string
- `NEXTAUTH_SECRET`: NextAuth secret for session encryption
- `AI_VOICE_API_KEY`: Your AI voice provider key
- `WHATSAPP_API_KEY`: WhatsApp API key

...