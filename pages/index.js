import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
      
        <main style={{minWidth: '100%', minHeight: '100%'}}>

          <section className="bg-dark-30 showcase-page-header module parallax-bg" style={{ backgroundImage: "url(assets/images/bannerHome.jpg)" }}>
            <div className="titan-caption">
              <div className="caption-content">
                <div className="font-alt mb-30 titan-title-size-1">Powerful. Multipurpose.</div>
                <div className="font-alt mb-40 titan-title-size-4">100+ Layouts</div><a className="section-scroll btn btn-border-w btn-round" href="#demos">See Demos</a>
              </div>
            </div>
          </section>

          

        </main>
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
