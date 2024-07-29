
const fetchData = async (link:string,  id = null) => {
    try{
        const response = await fetch(link)
        if(!response.ok){
            alert('api response exception')
        }
        const data = await response.json()
        return id===null?data.results:(data.results).filter((el: { id: any }) => el.id == id)
    }catch{
        alert(`catchi api exception!, ${id}`)
    }
}

export default fetchData;