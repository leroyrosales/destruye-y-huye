import Container from './container'
import { CMS_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-row justify-between w-full lg:items-center lg:w-1/3">
            <ul className="w-1/2 lg:w-auto">
              <li><a href="https://utexas.edu/" className="hover:underline">UT Home</a></li>
              <li><a href="https://www.utexas.edu/site-policies" className="hover:underline">Site Policies</a></li>
              <li><a href="https://cio.utexas.edu/policies/web-privacy" className="hover:underline">Web Privacy Policy</a></li>
            </ul>
            <ul className="w-1/2 lg:w-auto">
              <li><a href="https://emergency.utexas.edu/" className="hover:underline">Emergency Information</a></li>
              <li><a href="http://www.utexas.edu/web-accessibility-policy" className="hover:underline">Web Accessibility Policy</a></li>
              <li><a href="https://get.adobe.com/reader/" className="hover:underline">Adobe Reader</a></li>
            </ul>
          </div>
        </div>
        <div className="py-8 flex flex-row justify-between items-center">
          <p className="text-sm italic">© {CMS_NAME} {(new Date().getFullYear())}</p>
        </div>
      </Container>
    </footer>
  )
}
