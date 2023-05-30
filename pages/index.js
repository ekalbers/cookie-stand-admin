
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState('Report Table Coming Soon...')
    const [location, setLocation] = useState('')
    const [minCustomers, setMinCustomers] = useState('')
    const [maxCustomers, setMaxCustomers] = useState('')
    const [average, setAverage] = useState('')
    const getForm = (e) => {
        e.preventDefault()
        setFormData(JSON.stringify({location: location, minCustomers: minCustomers, maxCustomers: maxCustomers, average: average}))
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <header className='flex items-center text-6xl p-4 bg-green-600'>
                <h1>Cookie Stand Admin</h1>
            </header>
            <main>
                <form onSubmit={getForm} id='createForm' className="inline-block flex flex-col rounded text-center m-5 bg-green-300">
                    <div className='inline-block text-4xl mb-4 m-4 text-center'>
                        <header>Create Cookie Stand</header>
                    </div>
                    <div className='inline-block text-center text-xl'>
                        <label className='p-5'>Location</label>
                        <input id='location' type="text" onChange={(e) => setLocation(e.target.value)} className='text-black'></input>
                    </div>
                    <div className='inline-block flex justify-center m-4 text-center text-xl'>
                        <div className='inline-block flex flex-col p-5'>
                            <label>Minumum Customers Per Hour</label>
                            <input name='minPerHour' type="Number" onChange={(e) => setMinCustomers(e.target.value)} className='text-black'></input>
                        </div>
                        <div className='flex flex-col p-5'>
                            <label>Maximum Customers Per Hour</label>
                            <input id='maxPerHour' type="Number" onChange={(e) => setMaxCustomers(e.target.value)} className='text-black'></input>
                        </div>
                        <div className='flex flex-col p-5'>
                            <label>Average Cookie Sales Per Hour</label>
                            <input id='average' type="Number" onChange={(e) => setAverage(e.target.value)} className='text-black'></input>
                        </div>
                        <button type="submit"
                                className="text-black bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create
                        </button>
                    </div>
                </form>
                <p className='text-center'>{formData}</p>
            </main>
            <footer className='flex items-center p-4 bg-green-600'>
                &copy; 2023
            </footer>
        </div>
    );
}
