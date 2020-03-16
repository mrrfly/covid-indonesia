import Head from 'next/head'
import { NextSeo } from 'next-seo'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import Moment from 'react-moment'
import * as Sentry from '@sentry/browser'

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
        return <div></div>
    }

    return(
        <div className="container">
            <Head>
                <NextSeo
                    openGraph={{
                        title: 'Corona / Covid-19 Indonesia',
                        description: 'Informasi Corona / Covid-19 Indonesia',
                        url: '/',
                        type: 'profile',
                        profile: {
                            firstName: 'MUHAMMAD RAFLY',
                            lastName: 'RAMADHAN',
                            username: 'mrrfly',
                            gender: 'male'
                        },
                        images: {
                            url: 'https://img.techpowerup.org/200316/corona2.png',
                            width: 850,
                            height: 650,
                            alt: 'Logo',
                        }
                    }}
                />
                <link rel="icon" src="/corona2.ico" />
                <title>Jumlah Corona / Covid-19 Indonesia</title>
            </Head>

            <main>
                
                <h1 className="title">
                    Jumlah Corona / Covid-19 di Indonesia
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
                        <p>{data.confirmed.value}</p>
                    </a>
                    <a className="card">
                        <h3>Dalam Perawatan 🏥</h3>
                        <p>{data.activeCare.value}</p>
                    </a>
                    <a className="card">
                        <h3>Sembuh 😍</h3>
                        <p>{data.recovered.value}</p>
                    </a>
                    <a className="card">
                        <h3>Meninggal 😭</h3>
                        <p>{data.deaths.value}</p>
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