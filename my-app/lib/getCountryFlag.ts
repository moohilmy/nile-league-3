const getContryFlag = async(contryCode: string) =>{
  const api = process.env.API_COUNTRY 
  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/countryflag?country=${contryCode}`,{
      method: 'GET',
      headers:{
        "X-Api-Key": api as string
      }
    })
    const data = await res.json()
    console.log(data);
    
    return data
  } catch (error) {
    console.log(error);
    
  }
}
export {getContryFlag}