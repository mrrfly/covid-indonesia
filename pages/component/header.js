import React from 'react'
import Head from 'next/head'

export default function Header() {
    return(
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
    )
}