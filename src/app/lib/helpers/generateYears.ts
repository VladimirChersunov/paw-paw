export default function generateYears(startYear:number,endYear:number ){    
    const years = []
    for (let i = startYear; i <= endYear; i++) {
      years.push(i.toString())
    }
    return years
}