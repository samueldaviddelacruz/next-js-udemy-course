import {useRouter} from 'next/router'
const ClientPage = () => {
    const router = useRouter()
    
    console.log("router.query",router.query)
    return <div>
        <h1> Le page for an specific client </h1>
    </div>
}

export default ClientPage;