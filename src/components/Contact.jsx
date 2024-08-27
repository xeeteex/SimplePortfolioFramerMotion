import {CONTACT} from "../constants"
import Reveal from "./Reveal"
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-full">
      <h1 className="my-10 text-center text-4xl text-gray-500">Get in touch</h1>

      <div className="text-center tracking-tighter">
        <Reveal>
        <p className="my-4 mx-7 text-gray-400">{CONTACT.address}</p>
      </Reveal>
      <Reveal>

        <p className="my-4 mx-4 text-gray-400">{CONTACT.phoneNo}</p>
      </Reveal>
      <Reveal>
        
        <a href="#" className="border-b text-gray-400">{CONTACT.email}</a>
        </Reveal>
        
      </div>
    </div>
  )
}
export default Contact