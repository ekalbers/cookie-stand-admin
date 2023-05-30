import { hours } from '@/data'

export default function ReportTable({ reports }) {

    function total(sales) {
        let count = 0;
        sales.map(item => (count += item))
        return count;
    }

    function hourly_total() {
        let totals = []
        hours.map((hour, index) => {
            let count = 0
            reports.map(item => {
                count += item.hourly_sales[index]
            })
            totals.push(count)
        })
        return totals
    }

    function TableHead() {
        return (
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="">
                        Location
                    </th>
                    {hours.map((item, index) => (
                        <th key={index} scope="col" className="">
                            {item}
                        </th>
                    ))}
                    <th scope="col" className="">
                        Total
                    </th>
                </tr>
            </thead>
        )
    }

    function TableBody() {
        return (
            <>
                {reports.map((item, index) => (
                    <tr key={index} class="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            class="text-left px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.location}
                        </th>
                        {item.hourly_sales.map((item, index) => (
                            <td key={index} className="text-left px-6 py-4">
                                {item}
                            </td>
                        ))}
                        <td scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {total(item.hourly_sales)}
                        </td>
                    </tr>
                ))}
            </>
        )
    }

    function TableFooter() {
        const totals = hourly_total()
        return (
            <>
                <tr class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <th scope="col" className="">
                        Total
                    </th>
                    {totals.map((item, index) => (
                        <th key={index} scope="col" className="">
                            {item}
                        </th>
                    ))}
                    <th scope="col" className="">
                        {total(totals)}
                    </th>
                </tr>
            </>
        )
    }

    return(
        <div>
            {reports.length == 0 ? (
                <p>No Cookie Stands Available</p>
            ) : (
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead/>
                    <tbody class='text-left'>
                        <TableBody/>
                        <TableFooter/>
                    </tbody>
                </table>
            )}
        </div>
    )
}
