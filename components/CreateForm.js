export default function CreateForm({ reports, setReports }) {
    const getForm = (e) => {
        e.preventDefault()
        setReports([...reports, {
            location: e.target.location.value,
            minCustomers: e.target.minCustomers.value,
            maxCustomers: e.target.maxCustomers.value,
            average: e.target.average.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        }]);
        e.target.reset()
    }

    return (
        <>
            <form onSubmit={getForm} id='createForm'
                  className="inline-block flex flex-col rounded text-center m-5 bg-green-300">
                <div className='inline-block text-4xl mb-4 m-4 text-center'>
                    <header>Create Cookie Stand</header>
                </div>
                <div className='inline-block text-center text-xl'>
                    <label className='p-5'>Location</label>
                    <input name='location' type="text"
                           className='text-black'></input>
                </div>
                <div className='inline-block flex justify-center m-4 text-center text-xl'>
                    <div className='inline-block flex flex-col p-5'>
                        <label>Minumum Customers Per Hour</label>
                        <input name='minCustomers' type="Number"
                               className='text-black'></input>
                    </div>
                    <div className='flex flex-col p-5'>
                        <label>Maximum Customers Per Hour</label>
                        <input name='maxCustomers' type="Number"
                               className='text-black'></input>
                    </div>
                    <div className='flex flex-col p-5'>
                        <label>Average Cookie Sales Per Hour</label>
                        <input name='average' type="Number"
                               className='text-black'></input>
                    </div>
                    <button type="submit"
                            className="text-black bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create
                    </button>
                </div>
            </form>
        </>
    )
    // onChange={(e) => setMinCustomers(e.target.value)}
    // onChange={(e) => setLocation(e.target.value)}
    // onChange={(e) => setMaxCustomers(e.target.value)}
    // onChange={(e) => setAverage(e.target.value)}
}