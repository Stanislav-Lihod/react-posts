import { useMemo } from "react"

export const usePagination = (totalPage) =>{
  const getArrayPages = useMemo(()=>{
    const result = []
    for (let i = 1; i <= totalPage; i++) {
      result.push(i)    
    }
    return result
  }, [totalPage])

  return getArrayPages
}