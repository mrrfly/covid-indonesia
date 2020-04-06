import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import Moment from 'react-moment'
import * as Sentry from '@sentry/browser'
import NumberFormat from 'react-number-format'

export default function Home(props) {

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
            <Head>
                <meta name="dicoding:email" content="mrrfly.dev@gmail.com" />
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='keywords' content='Corona Indonesia, Covid-19 Indonesia, Data Corona Indonesia, Data Covid-19 Indonesia' />
                <meta name='application-name' content='Corona Indonesia' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Corona Indonesia' />
                <meta name='description' content='Data Corona di Indonesia' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/static/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#2B5797' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />

                <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/static/favicon-96x96.png' />
                <link rel='manifest' href='/static/manifest.json' />
                <link rel='shortcut icon' href='/corona2.ico' />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://corona.ciriung.com' />
                <meta name='twitter:title' content='Corona Indonesia' />
                <meta name='twitter:description' content='Data Corona di Indonesia' />
                <meta name='twitter:image' content='https://corona.ciriung.com/static/android-icon-192x192.png' />
                <meta name='twitter:creator' content='@mrr_encode' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Corona Indonesia' />
                <meta property='og:description' content='Data Corona di Indonesia' />
                <meta property='og:site_name' content='Corona Indonesia' />
                <meta property='og:url' content='https://corona.ciriung.com' />
                <meta property='og:image' content='https://corona.ciriung.com/static/apple-touch-icon.png' />

                <title>Jumlah Covid-19 Indonesia</title>
            </Head>

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

            <style jsx>{`
                .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }

                main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }

                footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                footer img {
                margin-left: 0.5rem;
                }

                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                }

                a {
                color: inherit;
                text-decoration: none;
                }

                .title a {
                color: #0070f3;
                text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                text-decoration: underline;
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }

                .title,
                .description {
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }

                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
                }

                .card {
                margin-bottom: 1rem;
                width: 100%;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                color: #0070f3;
                border-color: #0070f3;
                }

                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }

                .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
                }

                @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                }
                `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>

        </div>
    )

}