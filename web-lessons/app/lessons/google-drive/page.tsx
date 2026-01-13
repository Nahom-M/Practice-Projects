import Link from 'next/link'
import React from 'react'

const steps = [
  {
    title: 'Step 1 — Open Google Drive & Sign in',
    desc: 'Go to drive.google.com and sign in with your Google account. If you don\'t have an account, create one by clicking "Create account."',
    image: '/drive/step 1.png'
  },
  {
    title: 'Step 2 — Drive Overview',
    desc: 'This is your Google Drive. Your newest files are at the top. Use the left sidebar to jump between My Drive, Shared with me, and Other drives.',
    image: '/drive/step 2.png'
  },
  {
    title: 'Step 3 — Creating a new File',
    desc: 'Click the "New" button (usually top-left) to create a new file or folder. You can choose from Google Docs, Sheets, Slides, and more. For now select "Google Docs" to create a new document.',
    image: '/drive/step 3.png'
  },
  {
    title: 'Step 4 — Saving and Naming your File',
    desc: 'Google Drive automatically saves your work as you type. It\'s important to name your file for easy identification later. Click on "Untitled document" at the top left to rename it.',
    image: '/drive/step 4.png'
  },
  {
    title: 'Step 5 — Checking your File in Drive',
    desc: 'Return to Google Drive to see your newly created file listed. You can click on it anytime to open and edit.',
    image: '/drive/step 5.png'
  }
]

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className='max-w-4xl mx-auto px-4'>
        <Link href="/">
          <p className="text-blue-600 hover:underline mb-6 inline-block">← Back</p>
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Google Drive</h1>

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

export default page