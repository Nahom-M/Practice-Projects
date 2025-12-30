import React from 'react'

// Gmail step-by-step scrollable page with black-square placeholders for images.
// Replace each black <div> placeholder with an <img src="/path/to/your-image.jpg" alt="..." /> when you add screenshots.

const steps = [
  {
    title: 'Step 1 — Open Gmail & Sign in',
    desc: 'Go to gmail.com and sign in with your Google account. If you don\'t have an account, create one by clicking "Create account."'
  },
  {
    title: 'Step 2 — Inbox Overview',
    desc: 'This is your inbox. Your newest messages are at the top. Use the left sidebar to jump between Inbox, Sent, Drafts, and labels.'
  },
  {
    title: 'Step 3 — Compose an Email',
    desc: 'Click the "Compose" button (usually top-left) to create a new email. Enter recipients, subject, and message body.'
  },
  {
    title: 'Step 4 — Add Attachments',
    desc: 'Use the paperclip or the attach button inside the compose window to attach files or photos to your email.'
  },
  {
    title: 'Step 5 — Send & Undo Send',
    desc: 'Click "Send" to send the email. If you need to undo, use the small "Undo" popup that appears right after sending (if enabled in Settings).'
  },
  {
    title: 'Step 6 — Search & Filters',
    desc: 'Use the search bar at the top to quickly find emails. Click the down-arrow in the search box to open advanced search and create filters.'
  },
  {
    title: 'Step 7 — Labels & Organization',
    desc: 'Create and apply labels to organize emails. You can also star important messages and archive ones you want to keep but not see in the Inbox.'
  },
  {
    title: 'Step 8 — Settings & Signature',
    desc: 'Open Settings (gear icon) to change theme, enable/disable features like conversation view, or add a signature that appears at the bottom of outgoing messages.'
  },
  {
    title: 'Step 9 — Mobile App',
    desc: 'Install the Gmail app on iOS or Android for on-the-go access. Most desktop features exist in the app with slightly different UI.'
  },
  {
    title: 'Step 10 — Keyboard Shortcuts',
    desc: 'Enable keyboard shortcuts in Settings to speed up navigation and actions. Common shortcuts include "c" to compose, "e" to archive, and "r" to reply.'
  }
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-center">How to use Gmail — Step by step</h1>
        <p className="text-center text-gray-600 mb-8">Scroll from top to bottom. Replace the black squares with your screenshots when ready.</p>

        <ol className="space-y-8">
          {steps.map((s, idx) => (
            <li key={idx} className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">{idx + 1}</div>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                  <p className="text-gray-700 mb-4">{s.desc}</p>

                  <div className="w-full h-48 md:h-64 bg-black rounded-md" />

                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-sm text-gray-500 mt-8">Tip: to add an image, replace the black placeholder with:<br />
          <code className="block bg-gray-100 rounded px-2 py-1 mt-1">&lt;img src="/uploads/your-screenshot.png" alt="Step description" className="w-full rounded-md" /&gt;</code>
        </p>
      </div>
    </div>
  )
}

export default Page
