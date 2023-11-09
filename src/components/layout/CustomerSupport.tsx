import { Button, Input } from "arvara-pckage"
import { useState } from "react"

const CustomerSupport = () => {
  const [message, setMessage] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  return (
    <div className="flex flex-col items-start justify-start list-none bottom-10 opacity-100 absolute r-2 right-5 md-right20 bg-white p-4 transition-all shadow-3xl rounded-md min-w-[350px] w-[450px] z-20">
      <Input type="text" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Drop your complains here! Thanks" className="mt-5 w-full" />
      <Input type="text" label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Drop your Phone Numbere here! Thanks" className="mt-5 w-full" />
      <Button type="submit" className="w-full mt-5">Send</Button>

      {/* <div className="flex flex-col items-start justify-start list-none top-10 opacity-100 absolute r-2 right-5 md-right20 bg-white dark:bg-gradient-to-t transition-all dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-[150px] z-20">
        <span className="cursor-pointer flex items-center gap-2 p-2 text-sm">
          <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.731 14.908a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zm-3.325-2.496a5.311 5.311 0 003.325 1.162 5.313 5.313 0 003.445-1.261 4.653 4.653 0 00-3.338-1.405 4.653 4.653 0 00-3.432 1.504zm-.93-.958a5.983 5.983 0 014.362-1.88 5.982 5.982 0 014.241 1.756 5.333 5.333 0 10-8.604.125zM8.73 8.908a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-1.334a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" fill=" #000"></path></svg>
          <span>Login</span>
        </span>
        <span className="cursor-pointer flex items-center gap-2 p-2 text-sm">
          <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.731 14.908a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zm-3.325-2.496a5.311 5.311 0 003.325 1.162 5.313 5.313 0 003.445-1.261 4.653 4.653 0 00-3.338-1.405 4.653 4.653 0 00-3.432 1.504zm-.93-.958a5.983 5.983 0 014.362-1.88 5.982 5.982 0 014.241 1.756 5.333 5.333 0 10-8.604.125zM8.73 8.908a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-1.334a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" fill=" #000"></path></svg>
          <span>Press Me</span>
        </span>
        <span className="cursor-pointer flex items-center gap-2 p-2 text-sm">
          <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.731 14.908a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zm-3.325-2.496a5.311 5.311 0 003.325 1.162 5.313 5.313 0 003.445-1.261 4.653 4.653 0 00-3.338-1.405 4.653 4.653 0 00-3.432 1.504zm-.93-.958a5.983 5.983 0 014.362-1.88 5.982 5.982 0 014.241 1.756 5.333 5.333 0 10-8.604.125zM8.73 8.908a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-1.334a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" fill=" #000"></path></svg>
          <span>Press Me</span>
        </span>
      </div> */}
    </div>
  )
}

export default CustomerSupport
