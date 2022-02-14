import Container from './container'
import { CMS_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-8 flex flex-row justify-between items-center">
          <p className="text-sm italic">© {CMS_NAME} {(new Date().getFullYear())}</p>
        </div>
      </Container>
    </footer>
  )
}
