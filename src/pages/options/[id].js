import Options from "@/components/Options";
import { useRouter } from "next/router"

export default function ProductOptions() {
    const router = useRouter();
    const { id } = router.query
    return <Options productId={id}/>
}
  