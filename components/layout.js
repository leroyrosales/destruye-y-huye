import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from '../components/header.component'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
