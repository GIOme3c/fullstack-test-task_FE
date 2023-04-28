import Options from "@/components/Options";
import { useRouter } from "next/router"

export default function OptionsRouter() {
    const router = useRouter();
    const { id } = router.query
    return <Options productId={id}/>
}
  