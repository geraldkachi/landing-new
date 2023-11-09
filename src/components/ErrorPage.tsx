import { Button } from 'arvara-pckage'
import ErrorImage from '../assets/error.svg'

const ErrorPage = () => {
  return (
    <div>
      <img src={ErrorImage} alt='error image'/>
      <div>
        <h1 className='font-bold text-xl'>Oops</h1>
        <p className='text-grey-slate'>We can’t seem to find the page you are looking for</p>
      </div>
      <div>
        <Button>Go BACK</Button>
      </div>
    </div>
  )
}

export default ErrorPage