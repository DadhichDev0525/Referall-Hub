import Navbar from "../../components/Navbar"
import SetupSteps from "./components/SetupSteps"

const PlatForm_Setup = () => {

  return (
    <div>
    <Navbar title = 'Platform Setup' />
     <div className='m-6 lg:m-8 bg-white shadow rounded-lg'>
       <SetupSteps />
      </div>
     </div>
  )
}

export default PlatForm_Setup