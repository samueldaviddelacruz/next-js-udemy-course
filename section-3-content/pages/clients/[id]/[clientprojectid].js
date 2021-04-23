import {useRouter} from 'next/router'
const ClientProjectPage = () => {
    const router = useRouter()
    
    console.log("router.query",router.query)
    return <div>
        <h1> Le page for an specific project of a specific client </h1>
    </div>
}

export default ClientProjectPage;