import { h } from "preact"
import style from "./style.css"
import FormikComponent from "../../components/formik"

const Home = () => {
  return (
    <div class={style.home}>
      <FormikComponent />
    </div>
  )
}

export default Home
