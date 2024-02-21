import LoginForm from "../../../components/LoginForm";
import { handleGithubLogin, login } from "../../../lib/action";



const LoginPage = async () => {

  return (
    <div className=" flex items-center justify-center">
      <div className='p-[50px] w-[500px] bg-[#2b2d42] flex flex-col text-center gap-[30px] rounded-[5px] '>
        {/* Social media login */}
        <form action={handleGithubLogin} className='flex flex-col  text-center gap-[30px]'>
          <button className="bg-white text-black p-[15px] rounded-[5px]">Login with Github</button>
        </form>

        {/* Credential login */}
        <LoginForm />
      </div>


    </div>
  )

}

export default LoginPage