import React from 'react'
import Link from 'next/link'

// Gmail step-by-step scrollable page with black-square placeholders for images.
// Replace each black <div> placeholder with an <img src="/path/to/your-image.jpg" alt="..." /> when you add screenshots.

const steps = [
  {
    title: 'Step 1 — Open Gmail & Sign in',
    desc: 'Go to gmail.com and sign in with your Google account. If you don\'t have an account, create one by clicking "Create account."',
    image: '/gmail/step 1.png'
  },
  {
    title: 'Step 2 — Inbox Overview',
    desc: 'This is your inbox. Your newest messages are at the top. Use the left sidebar to jump between Inbox, Sent, Drafts, and labels.',
    image: '/gmail/step 2.png'
  },
  {
    title: 'Step 3 — Compose an Email',
    desc: 'Click the "Compose" button (usually top-left) to create a new email. Enter recipients, subject, and message body.',
    image: '/gmail/step 3.png'
  },
  {
    title: 'Step 4 — Email Composition',
    desc: 'When composing, there are 3 main fields: "To" for recipient email addresses, "Subject" for the email topic, and the large text area for your message.',
    image: '/gmail/step 4.png'
  },
  {
    title: 'Step 5 — Add Attachments',
    desc: 'Use the paperclip or the attach button inside the compose window to attach files or photos to your email.',
    image: '/gmail/step 5.png'
  },
  {
    title: 'Step 6 — Sending the Email',
    desc: 'Once your email is ready, click the "Send" button at the bottom of the compose window to send it.',
    image: '/gmail/step 6.png'
  },
  {
    title: 'Step 7 — Labels',
    desc: 'On the left sidebar, you can find labels like "Inbox," "Sent," and "Trash." Click on them to filter your emails.',
    image: '/gmail/step 7.png'
  },
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/">
          <p className="text-blue-600 hover:underline mb-6 inline-block">← Back</p>
        </Link>

        <h1 className="text-4xl font-bold mb-2 text-center">How to use Gmail — Step by step</h1>

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

                  <img src={s.image} alt={s.title} className="w-full rounded-md" />

                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Page
