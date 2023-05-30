import Head from 'next/head';
import { useState } from 'react';
import CreateForm from 'components/CreateForm';
import ReportTable from 'components/ReportTable';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function CookieStandAdmin() {
    const [reports, setReports] = useState([])

    function handleSubmit(e) {
        [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header/>
            <main>
                <CreateForm reports={reports} setReports={setReports}/>
                <ReportTable reports={reports}/>
            </main>
            <Footer reports={reports.length}/>
        </div>
    );
}
