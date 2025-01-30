export async function FetchData(limit = 400, skip = 0) {
    const categories = ['Books', 'Toys', 'School Tools', 'Gifts'];
    try{
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        if (!response.ok) throw new Error("failed to fetch data 📜")
        const result = await response.json();
        return (result.products)
    } catch(err){
        console.log("API fetching error samir 😡",err)
        return {products:[]}
    }   
}