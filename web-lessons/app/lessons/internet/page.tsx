import React from 'react'
import Link from 'next/link'

const steps = [
  {
    title: 'Step 1 — Use Strong, Unique Passwords',
    desc: 'Create passwords that are long, unique, and hard to guess. Avoid using the same password across multiple websites, and consider using a password manager to keep them secure.',
    image: '/internet/step 1.jpg'
  },
  {
    title: 'Step 2 — Enable Two-Factor Authentication (2FA)',
    desc: 'Turn on two-factor authentication whenever possible. This adds an extra layer of security by requiring a second form of verification, such as a code sent to your phone.',
    image: '/internet/step 2.jpg'
  },
  {
    title: 'Step 3 — Be Careful with Personal Information',
    desc: 'Do not share personal details like your address, phone number, or passwords online unless you fully trust the website and understand how your information will be used.',
    image: '/internet/step 3.jpg'
  },
  {
    title: 'Step 4 — Watch Out for Phishing Scams',
    desc: 'Be cautious of suspicious emails, messages, or links that ask for personal information. Always check the sender and avoid clicking unknown or unexpected links.',
    image: '/internet/step 4.jpg'
  },
  {
    title: 'Step 5 — Keep Software and Devices Updated',
    desc: 'Regularly update your operating system, apps, and antivirus software. Updates often include important security fixes that protect against new threats.',
    image: '/internet/step 5.jpg'
  },
  {
    title: 'Step 6 — Use Secure Wi-Fi Connections',
    desc: 'Avoid using public Wi-Fi for sensitive activities like online banking. When necessary, use a VPN or ensure the website uses HTTPS to keep your data encrypted.',
    image: '/internet/step 6.jpg'
  }
];


const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className='max-w-4xl mx-auto px-4'>
        <Link href="/">
          <p className="text-blue-600 hover:underline mb-6 inline-block">← Back</p>
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Internet Safety</h1>

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