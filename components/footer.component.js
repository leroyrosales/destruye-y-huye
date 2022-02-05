import Container from './container'
import { CMS_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-row justify-between w-full lg:items-center lg:w-1/3">
            <ul className="w-1/2 lg:w-auto">
              <li><a href="#" className="hover:underline">City of Austin</a></li>
              <li><a href="#" className="hover:underline">Museum of Human Achievement</a></li>
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
