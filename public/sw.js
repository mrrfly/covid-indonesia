if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise(async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()})),a.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},a=(a,i)=>{Promise.all(a.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(a)};self.define=(a,c,s)=>{i[a]||(i[a]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return i;case"module":return n;default:return e(a)}})).then(e=>{const a=s(...e);return i.default||(i.default=a),i})}))}}define("./sw.js",["./workbox-eb42688b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"Rf187E98O6C2hbyd8o-g8"},{url:"/_next/static/Rf187E98O6C2hbyd8o-g8/_buildManifest.js",revision:"8bb5d1c78397af4e67d6ce5e5bbdf7e5"},{url:"/_next/static/Rf187E98O6C2hbyd8o-g8/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/Rf187E98O6C2hbyd8o-g8/pages/_app.js",revision:"e1a0a949dd47624b5dcf6c6429703bd1"},{url:"/_next/static/Rf187E98O6C2hbyd8o-g8/pages/_error.js",revision:"046da7cd96d1ec3d3cedcd64f657a014"},{url:"/_next/static/Rf187E98O6C2hbyd8o-g8/pages/index.js",revision:"6e5054174b0b64428b2cae5ff93a1b34"},{url:"/_next/static/Rf187E98O6C2hbyd8o-g8/pages/indexori.js",revision:"d96dbd617bb8b4855a015c56c9144741"},{url:"/_next/static/chunks/0b3de839e07010495c9a04b536b1c7897e06df1a.4a40267930c730acda57.js",revision:"4f3e052ba0a17a97bc2e424f8b4c2eca"},{url:"/_next/static/chunks/79cd815732b4213d386b2fee1f1e7e9cd1b41a58.370127d39144bb445dd8.js",revision:"5fd1e374fcac9bbbb35ed09507bdd4cf"},{url:"/_next/static/chunks/a2e0bcdd7484911c191bd19ea3c86f2865e3802b.17db958fe886a4fece89.js",revision:"75a9b13bde9aad82d0fdb9e5437011ea"},{url:"/_next/static/chunks/framework.c8966c7d8b377309e6b8.js",revision:"5e1e609a83432858171b7f9cefb68eaf"},{url:"/_next/static/runtime/main-a65ce33bbc3b17fe8cfc.js",revision:"3ac146a7568a47eeffd015ac19d13f23"},{url:"/_next/static/runtime/polyfills-c8375bd94e53fd10a8dd.js",revision:"dac901f856733d5d97a4a7b79e69a197"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/corona2.ico",revision:"16de06aa2b2c8569d9147bea03790a9d"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/service-worker.js",revision:"fdfdfd40e6c3e6ecda13aa0827a1094d"},{url:"/service-worker.js.map",revision:"6032abd9664552d7df6d77303b71132a"},{url:"/static/android-icon-144x144.png",revision:"2dd17c0ab285cb2bef1151d78e83a7a1"},{url:"/static/android-icon-192x192.png",revision:"4b5c34b1cad10c186e30908836333811"},{url:"/static/android-icon-36x36.png",revision:"c4e26e252c71b20c402fedcf654ca26d"},{url:"/static/android-icon-48x48.png",revision:"765c87a2c0edda77dee43f56214f16a0"},{url:"/static/android-icon-72x72.png",revision:"f8a8c7d2bcf79f1c04041232f3601abb"},{url:"/static/android-icon-96x96.png",revision:"dd481b93ae3d0e66fbb3c636c0f8c0a3"},{url:"/static/apple-icon-114x114.png",revision:"b59a52ecc40572ee146a6550373fecd1"},{url:"/static/apple-icon-120x120.png",revision:"e435992b8764b782854d1031d0f95b7a"},{url:"/static/apple-icon-144x144.png",revision:"9958713e81e00acd4f6e6dbf10fe9f77"},{url:"/static/apple-icon-152x152.png",revision:"206d647b1cd50af76c63165ba187d4c4"},{url:"/static/apple-icon-180x180.png",revision:"f6aba285d811ea08189248b4f0e83e3d"},{url:"/static/apple-icon-57x57.png",revision:"26b2811525a282fec03195aac3b53266"},{url:"/static/apple-icon-60x60.png",revision:"a6dbc9bbf312884d8e322a6c8e328097"},{url:"/static/apple-icon-72x72.png",revision:"92e645a4f2e600c7bb1b19cc2eb6e695"},{url:"/static/apple-icon-76x76.png",revision:"ae71021731e0ade0ed9c26ff1b77b3c2"},{url:"/static/apple-icon-precomposed.png",revision:"62ccd0b792db973b36c0d2c417d3ea9d"},{url:"/static/apple-icon.png",revision:"e54960b8199dd21d9c536a7246b1d37a"},{url:"/static/browserconfig.xml",revision:"a65f31d304374fcec4affeaf87e586a8"},{url:"/static/favicon-16x16.png",revision:"ba8f26418efeb68a43fbcd9c36e9a5dc"},{url:"/static/favicon-32x32.png",revision:"3388960896d50be5af9ad12daf5ac4e6"},{url:"/static/favicon-96x96.png",revision:"5430da253763e1c6de14746570e4b9f2"},{url:"/static/favicon.ico",revision:"4fd3e2bf8c8dcf0946fa7d8b6d10bff4"},{url:"/static/manifest.json",revision:"850ba22e9cd9d52864f8d9dabd2aaeb1"},{url:"/static/ms-icon-144x144.png",revision:"7f7c25a776830a1a48af3124ab666dc3"},{url:"/static/ms-icon-150x150.png",revision:"671a0a8dd3bede77613fef968a69bb5c"},{url:"/static/ms-icon-310x310.png",revision:"e02684784e784464dd9076bc17de9324"},{url:"/static/ms-icon-70x70.png",revision:"36874fb458c31a330f2c922429e31d3f"},{url:"/zeit.svg",revision:"7b2022f3692adf56949c7019f7ebb670"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
