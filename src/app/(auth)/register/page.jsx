import RegisterForm from "../../../components/RegisterForm"
import { register } from "../../../lib/action"


const page = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className='p-[50px] w-[500px] bg-[#2b2d42] flex flex-col text-center gap-[30px] rounded-[5px] '>
        <RegisterForm />

      </div>
    </div>
  )
}

export default page
