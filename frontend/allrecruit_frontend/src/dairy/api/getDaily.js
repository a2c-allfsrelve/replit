
const toJson = async (res) => {
    const json = await res.json(); 

    if(res.ok){
        return json;
    }else{
        throw new Error(json.message);
    }
}  


export const getDaily = async () =>{
    const res = await fetch('http://localhost:8000/daily/', { method: 'GET' })

    const resJson = await toJson(res);
    return resJson;

}


export const getDailyDetail = async (id) => {
    const res = await fetch('http://localhost:8000/daily/${id}', { method: 'GET' })

    const resJson = await toJson(res);
    return resJson;
}


export const getCategory = async (cat) =>{
    const res = await fetch('http://localhost:8000/daily/${cat}', { method: 'GET' })

    const resJson = await toJson(res);
    return resJson;

}