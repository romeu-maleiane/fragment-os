import React from 'react'

function Footer() {
  return (
    <footer className='mt-20 py-6 px-8'>
        <div className='flex-between flex-wrap gap-6 text-m text-gray-500'>
            <div>
                <p>© Copright {new Date().getFullYear()} Fragment OS.</p>
            </div>

            <div>
                <p>Developed by @romeu_maleiande and created by @itsjamik</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
