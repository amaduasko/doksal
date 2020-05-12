import { useRouter } from "next/router"
import "./RoundBack.css"

const RoundBack = () => {
  const router = useRouter()
  return (
    <div className="roundback">
      <div className="container">
        <a className="roundback__link" onClick={() => router.back()}></a>
      </div>
    </div>
  )
}

export default RoundBack
