 const FetchingData = (url, state)=>{
    fetch(
        `${url}`
    )
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else {
            throw new Error("something went wrong!");
        }
    })
    .then(res=>{
        state(res)
    })
}

export default FetchingData