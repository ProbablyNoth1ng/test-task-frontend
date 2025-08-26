import { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'
const API_URL = import.meta.env.VITE_BACKEND_URL

export interface DealData {
    name:string,
    price:number
    ticket:number
    yield: number,
    daysLeft:number,
    sold:number
    image:string
}


export const OpenDeals = () => {
    const [dealsData, setDeal] = useState<DealData[]>([]);
    console.log(API_URL)
    useEffect(() => {
        axios.get(`${API_URL}/dealsData`)
        .then((data) => setDeal(data.data))

    }, [])


    return (
        <>
            <div className="open-deals pt-5">
                <div className="container mx-auto">
                    <h3 className="text-[#B29F7E] font-bold text-[20px] pb-3">Open Deals</h3>

                    <div className="cards grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto container">
                        
                        {dealsData.map((value, id) => (
                            <>
                                <Card name={value.name} 
                                      price={value.price} 
                                      ticket={value.ticket} 
                                      yield={value.yield} 
                                      daysLeft={value.daysLeft}
                                      sold={value.sold}
                                      image={value.image}
                                      key={id}
                                />
                            </>
                        ))}
                     

                    </div>
                   
                </div>
                
            </div>  

        </>
    )
}