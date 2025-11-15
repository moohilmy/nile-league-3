// app/api/nile-league/stats/data/route.ts

//https://dummyjson.com/users?limit=1
export async function GET(req: Request) {
    const url = new URL(req.url);
    const page = url.searchParams.get('page') || '1';
    const itemsPerPage = 10;
  
    // Simulate data
    const allData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    
    // Calculate offset based on the page
    const offset = (parseInt(page, 10) - 1) * itemsPerPage;
    const data = allData.slice(offset, offset + itemsPerPage);
    
    return new Response(JSON.stringify(data));
  }
  