import { h } from "preact"
import style from "./style.css"
import FormikComponent from "../../components/formik"
import ReactHookFormComponent from "../../components/formHook"

const Home = () => {
  return (
    <div class={style.home}>
      <FormikComponent />
      <ReactHookFormComponent />
    </div>
  )
}

export default Home
