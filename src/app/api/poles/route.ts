
export const dynamic = 'force-static'
 
export async function GET() {
  const res = await fetch('http://localhost:5002/poles', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ 
    "type": "FeatureCollection",
    "total":data.length,
    "features": data.map((p:any)=>({
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [p.xp,p.yp]
      },
      "properties": {
        "barrament": p.barrament,
        "geopoint": [p.xp,p.yp],
      }
    })) 
  });
}