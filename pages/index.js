import Header from './component/header'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import Moment from 'react-moment'
import * as Sentry from '@sentry/browser'
import NumberFormat from 'react-number-format'

export default function Home() {

    Sentry.init({dsn: "https://0882e92a9f6a457fbc77f46f6e7bb047@sentry.io/4930834"});

    const fetcher = async function(...args) {
        const res = await fetch(...args)
        return res.json()
    }
    
    const url = "https://kawalcovid19.harippe.id/api/summary"
    
    const { data, error } = useSWR(url, fetcher)

    if(error){
        return <div>Data Error</div>
    }
    if(!data){
        return <div>Sedang Mengambil Data</div>
    }

    return(
        <div className="container">
            
            <Header />

            <main>
                
                <h1 className="title">
                    Jumlah Covid-19 di Indonesia
                </h1>
                
                <p className="description">
                    Update Terakhir: &nbsp;
                    <Moment format="DD MMMM YYYY HH:mm:ss" locale="id">
                        { data.metadata.lastUpdatedAt }
                    </Moment>
                </p>

                <div className="grid">
                    <a className="card">
                        <h3>Positif 😥</h3>
                        <p>
                            <NumberFormat
                                thousandSeparator={true}
                                value={data.confirmed.value}
                                displayType="text"
                            />
                        </p>
                    </a>
                    <a className="card">
                        <h3>Dalam Perawatan 🏥</h3>
                        <p>
                            <NumberFormat
                                thousandSeparator={true}
                                value={data.activeCare.value}
                                displayType="text"
                            />
                        </p>
                    </a>
                    <a className="card">
                        <h3>Sembuh 😍</h3>
                        <p>
                            <NumberFormat
                                thousandSeparator={true}
                                value={data.recovered.value}
                                displayType="text"
                            />
                        </p>
                    </a>
                    <a className="card">
                        <h3>Meninggal 😭</h3>
                        <p>
                            <NumberFormat
                                thousandSeparator={true}
                                value={data.deaths.value}
                                displayType="text"
                            />
                        </p>
                    </a>
                </div>

            </main>

            <footer>
                <p>Made With 💗 by <b>Muhammad Rafly Ramadhan</b></p>
                <p>Sumber data: <a href="https://kawalcovid19.id/"><b>KAWALCOVID19.ID</b></a></p>
            </footer>
        </div>
    )

}