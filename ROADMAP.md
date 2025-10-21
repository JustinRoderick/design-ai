# Interior Design AI App - Development Plan

## Project Overview

An AI-powered interior design application that allows users to visualize, edit, and redesign their spaces using the nano banana model via Fal.ai, with 3D visualization capabilities through World Labs.

### Core Features

- Google OAuth authentication
- Image upload and AI-powered redesign
- Interactive canvas for precise furniture placement
- Preset furniture and style library
- Sketch to photorealistic conversion
- 3D space visualization with World Labs
- Free tier (limited requests) and Pro subscription via Polar
- Chat-like interface similar to Vercel's V0

### Tech Stack

- **Frontend**: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: Better-auth (Google OAuth)
- **Database**: PostgreSQL (Supabase/PlanetScale), Drizzle ORM
- **Validation**: Zod
- **API Layer**: tRPC (main APIs), Hono (image generation)
- **AI/ML**: Fal.ai (nano banana), AI SDK, World Labs 3D
- **Payments**: Polar
- **Storage**: AWS S3

---

## Phase 1: Foundation & Setup

### Project Initialization

1. Create Next.js project with TypeScript and Tailwind
2. Set up project structure with organized folders
3. Initialize Git and configure `.gitignore`
4. Install all core dependencies (tRPC, Drizzle, Better-auth, etc.)
5. Install UI dependencies (shadcn, Tailwind, Lucide icons)
6. Configure TypeScript with path aliases

### Database Setup

1. Choose and provision database (Supabase or PlanetScale)
2. Set up Drizzle ORM configuration
3. Define database schema:
   - Users (id, email, name, image, timestamps)
   - Accounts (OAuth provider data)
   - Sessions (authentication sessions)
   - Subscriptions (plan, status, usage limits)
   - Projects (user designs)
   - Images (original, generated, edited)
   - Presets (furniture, styles, templates)
4. Generate and run migrations

### Environment Configuration

1. Create `.env.local` with all required variables
2. Document all environment variables needed
3. Set up environment validation with Zod

---

## Phase 2: Authentication System

### Better-auth Implementation

1. Configure Better-auth with Google OAuth provider
2. Set up auth API routes (`/api/auth/[...auth]`)
3. Create authentication utilities and middleware
4. Implement session management helpers
5. Set up protected route middleware

### Auth UI Components

1. Create sign-in button with Google
2. Build user dropdown menu with avatar
3. Create sign-out functionality
4. Build protected route wrapper components
5. Add loading and error states for auth flows

---

## Phase 3: API Architecture

### tRPC Setup

1. Initialize tRPC with context and configuration
2. Set up tRPC app router
3. Configure tRPC client for React
4. Add tRPC provider to root layout
5. Create Next.js API route handler for tRPC

### tRPC Routers

1. **User Router**: Profile management and usage stats
2. **Subscription Router**: Plan management, limit checks, usage tracking
3. **Project Router**: CRUD operations for design projects
4. **Image Router**: Image management and S3 upload URL generation

### Hono Backend Setup

1. Initialize Hono app for image generation endpoints
2. Create routes for:
   - `/api/generate` - Generate new designs
   - `/api/edit` - Edit existing images with coordinates
   - `/api/sketch-to-photo` - Convert sketches to photorealistic
3. Add authentication middleware
4. Add rate limiting protection
5. Mount Hono in Next.js API routes

---

## Phase 4: Cloud Storage Integration

### AWS S3 Configuration

1. Create and configure S3 bucket
2. Set up CORS policy for client uploads
3. Configure lifecycle rules (optional)
4. Add AWS credentials to environment

### S3 Service Layer

1. Build presigned URL generator for uploads
2. Build presigned URL generator for downloads
3. Implement file deletion functionality
4. Create unique key generation utility
5. Add error handling and retry logic
6. Ability to share links with anyone to see final designs

---

## Phase 5: AI Integration

### Fal.ai Service

1. Set up Fal.ai client with API key
2. Implement image generation function (text-to-design)
3. Implement image editing function (coordinate-based placement)
4. Implement sketch-to-photorealistic conversion
5. Create Zod schemas for all AI parameters
6. Add error handling and fallbacks

### AI SDK Integration

1. Configure AI SDK for streaming responses
2. Build chat interface for prompts
3. Implement prompt enhancement logic
4. Add support for conversation context
5. Create typing indicators and loading states

---

## Phase 6: Marketing & Landing Page

### Hero Section

1. Build modern hero with gradient background
2. Add compelling headline and subheadline
3. Create CTA button (Get Started / Sign In)
4. Add demo image or video
5. Implement responsive design

### Content Sections

1. **Features Grid**: Showcase key capabilities with icons
2. **How It Works**: Step-by-step visual guide
3. **Pricing**: Free vs Pro tier comparison
4. **Social Proof**: Testimonials or showcase (optional)
5. **Footer**: Links, legal pages, social media

### Pricing Integration

1. Display tier comparison table
2. Add Polar checkout buttons
3. Highlight feature differences
4. Create FAQ component

---

## Phase 7: Dashboard & Navigation

### Dashboard Layout

1. Create protected dashboard shell
2. Build top navigation:
   - Logo and branding
   - User menu with avatar
   - Usage indicator (requests remaining)
   - Upgrade button for free tier users
3. Build sidebar navigation:
   - Projects list
   - New Design
   - Preset Library
   - Settings
4. Implement responsive mobile menu

### Projects Management

1. Create projects grid/list view
2. Build project cards with thumbnails
3. Add create new project flow
4. Implement search and filtering
5. Add pagination or infinite scroll
6. Build project detail view with image history

---

## Phase 8: Core Design Interface

### Chat-Style Interface

1. Create main canvas/viewer area for images
2. Build chat sidebar for prompts and history
3. Implement message list with generations
4. Add prompt input with send button
5. Show loading states and progress
6. Display generated images inline
7. Add action buttons (Use, Regenerate, Edit)

### Image Upload System

1. Build drag-and-drop upload component
2. Add file input button
3. Support camera capture on mobile devices
4. Validate image format and size
5. Show upload progress bar
6. Display preview of uploaded image

### Interactive Canvas Editor

1. Integrate canvas library (Fabric.js/Konva or custom)
2. Display current image on canvas
3. Implement click-to-place functionality:
   - User clicks on canvas location
   - Show placement marker
   - Send coordinates to AI generation
4. Add drawing tools for manual masking
5. Implement zoom and pan controls
6. Add undo/redo functionality
7. Add rulers or grid overlay (optional)

### Preset Library

1. Build preset browser with categories
2. Organize by type (furniture, lighting, decor, colors)
3. Add search and filter functionality
4. Create grid view with thumbnails
5. Implement "Add to design" action
6. Load presets from database
7. Add ability to save custom presets

### Style Controls

1. Create style selector (modern, rustic, minimalist, etc.)
2. Build color palette selector
3. Add lighting intensity controls
4. Implement material/texture options
5. Add custom prompt text input

---

## Phase 9: AI Generation Workflow

### Request Validation

1. Check user subscription status
2. Verify request limits (free vs pro)
3. Increment usage counter
4. Handle rate limiting
5. Show warnings when approaching limits

### Generation Pipeline

1. **Upload Phase**:
   - Get presigned S3 upload URL
   - Upload original image from client
   - Store image URL in database
2. **Processing Phase**:
   - Collect all parameters (prompt, style, coordinates)
   - Validate with Zod schemas
   - Call Fal.ai service with parameters
   - Handle errors and implement retries
3. **Storage Phase**:
   - Receive generated image from Fal.ai
   - Upload to S3 with unique key
   - Store metadata in database
   - Return image URL to client
4. **UI Update**:
   - Display generated image in chat
   - Add to project history
   - Show success notification

### Specialized Workflows

1. **Text-to-redesign**: Natural language prompt processing
2. **Click-to-place**: Coordinate-based furniture placement
3. **Sketch-to-photo**: Low quality to photorealistic conversion
4. Implement smart prompt enhancement for better AI results

---

## Phase 10: Subscription & Payments

### Polar Integration

1. Set up Polar account and obtain API keys
2. Install and configure Polar SDK
3. Create Polar service layer
4. Build webhook endpoint for payment events

### Subscription Plans

1. Define Free Tier:
   - 10 requests per month (configurable)
   - Basic features only
   - Standard resolution
2. Define Pro Tier:
   - Unlimited requests
   - Advanced features
   - Higher resolution outputs
   - Priority processing
   - 3D visualization access
3. Store plan configuration in database

### Checkout & Upgrade Flow

1. Create upgrade page/modal
2. Integrate Polar checkout component
3. Handle checkout success redirect
4. Update subscription in database
5. Send confirmation notification

### Webhook Management

1. Create webhook endpoint `/api/webhooks/polar`
2. Verify webhook signatures
3. Handle subscription lifecycle events:
   - Subscription created
   - Subscription updated
   - Subscription canceled
   - Payment successful/failed
4. Update database based on events
5. Send user notifications

### Subscription UI

1. Build settings/billing page
2. Display current plan and usage stats
3. Add upgrade/downgrade buttons
4. Show billing history
5. Implement cancel subscription flow
6. Add portal redirect to Polar customer portal

---

## Phase 11: 3D Visualization

### World Labs Integration

1. Research World Labs API documentation
2. Obtain API credentials
3. Create World Labs service layer
4. Implement image-to-3D conversion endpoint

### 3D Model Generation

1. Create request handler for 3D generation
2. Handle long-running 3D conversion process
3. Store 3D model URLs in database
4. Add polling or webhook for completion
5. Implement loading states and progress tracking

### 3D Viewer Component

1. Choose 3D rendering library (Three.js, React Three Fiber)
2. Build 3D viewer component
3. Implement camera controls (orbit, pan, zoom)
4. Add "View in 3D" button on generated images
5. Handle mobile touch interactions
6. Add fullscreen mode

### 3D Features

1. Enable user navigation through 3D space
2. Add measurement tools (optional)
3. Implement export 3D model option
4. Create shareable 3D view links
5. Add VR mode support (optional)

---

## Phase 12: Polish & Advanced Features

### Image Management

1. Display generation history with versions
2. Implement comparison view between versions
3. Add favorite/star functionality
4. Create export options (download, share link)
5. Add bulk actions for multiple images

### Templates & Presets

1. Create design template library
2. Build popular style templates
3. Allow users to save custom templates
4. Implement template search and categories
5. Add community templates (future)

### Performance Optimization

1. Optimize images with Next.js Image component
2. Implement lazy loading for heavy components
3. Add loading skeletons for better UX
4. Optimize bundle size with code splitting
5. Enable React Server Components where beneficial
6. Add service worker for offline support (optional)

### Error Handling

1. Create error boundary components
2. Add user-friendly error messages
3. Implement retry logic for failed requests
4. Add error tracking service (Sentry, LogRocket)
5. Create fallback UI for critical failures

### UX Improvements

1. Add keyboard shortcuts for power users
2. Implement auto-save for projects
3. Add undo/redo for editing actions
4. Create onboarding tutorial for new users
5. Add tooltips and contextual help

---

## Phase 13: Testing

### Testing Setup

1. Install testing framework (Jest/Vitest)
2. Install E2E testing tool (Playwright/Cypress)
3. Configure test environment
4. Set up test database

### Test Coverage

1. **Unit Tests**:
   - Utility functions
   - tRPC routers
   - Zod schemas
   - Service layer functions
2. **Integration Tests**:
   - Authentication flow
   - Image upload and generation
   - Subscription and payment flow
   - Database operations
3. **E2E Tests**:
   - Complete user journey (signup to generation)
   - Responsive design across devices
   - Cross-browser compatibility
   - Payment flow end-to-end

### Quality Assurance

1. Manual testing of all features
2. Performance testing under load
3. Security audit (auth, APIs, data)
4. Accessibility testing (WCAG compliance)
5. Mobile device testing

---

## Phase 14: Deployment

### Environment Setup

1. Configure production environment variables
2. Set up production database with backups
3. Create production S3 bucket with CDN
4. Configure production domain and SSL

### Deployment Platform

1. Choose hosting (Vercel recommended)
2. Configure build settings
3. Set up CI/CD pipeline
4. Configure automatic deployments from main branch
5. Set up preview deployments for pull requests

### Monitoring & Analytics

1. Add application analytics (Vercel Analytics, Plausible)
2. Set up error tracking and alerting
3. Configure performance monitoring
4. Add API endpoint monitoring
5. Track conversion and usage metrics
6. Set up uptime monitoring

### Documentation

1. Write comprehensive API documentation
2. Create user guide and help center
3. Document all environment variables
4. Write contribution guidelines
5. Create runbook for common issues

---

## Phase 15: Launch

### Pre-Launch Checklist

1. Test all critical user flows end-to-end
2. Verify payment processing in production
3. Test email notifications
4. Security review (API keys, auth, permissions)
5. Performance testing under expected load
6. Legal review (terms of service, privacy policy)
7. Prepare support documentation
8. Set up customer support channel

### Soft Launch

1. Deploy to production
2. Invite beta users
3. Gather and analyze feedback
4. Fix critical bugs quickly
5. Monitor performance and errors closely

### Public Launch

1. Announce on social media
2. Submit to product directories (Product Hunt, etc.)
3. Send launch email to waitlist
4. Monitor influx of users
5. Be ready for rapid bug fixes

### Post-Launch

1. Monitor user feedback and support requests
2. Track analytics and usage patterns
3. Identify and fix bugs
4. Plan feature iterations based on feedback
5. Optimize based on real usage data
6. Scale infrastructure as needed

---

## Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
AUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000

# AI Services
FAL_KEY=your-fal-api-key
WORLDLABS_API_KEY=your-worldlabs-api-key

# AWS S3
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
S3_BUCKET_NAME=your-bucket-name

# Payments
POLAR_ACCESS_TOKEN=your-polar-token
POLAR_WEBHOOK_SECRET=your-webhook-secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Key Commands

```bash
# Development
npm run dev                # Start development server
npm run build             # Build for production
npm run start             # Start production server

# Database
npm run db:generate       # Generate migrations
npm run db:migrate        # Run migrations
npm run db:studio         # Open Drizzle Studio
npm run db:push           # Push schema changes (dev only)

# Testing
npm run test              # Run unit tests
npm run test:e2e          # Run E2E tests
npm run test:coverage     # Generate coverage report

# Code Quality
npm run lint              # Run ESLint
npm run type-check        # Run TypeScript check
npm run format            # Format with Prettier
```

---

## Project Structure
