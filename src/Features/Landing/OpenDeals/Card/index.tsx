import type { DealData } from ".."

export const Card = (data:DealData) => {
    
    
    return (
        <>
            <div className='card flex justify-end flex-col pb-5 px-3 rounded-md bg-cover bg-center h-[400px]' style={{ backgroundImage: `url(${data.image})` }}>
                <h4 className="text-white font-bold text-[20px] ">{data.name}</h4>
                <div className="flex justify-between">
                    <div>
                        <p className="text-[18px] text-white font-bold">{data.price} Dhs</p>
                        <p className="text-[18px] text-white font-bold">Tiket - {data.ticket} Dhs</p>
                    </div>
                    <div>
                        <p className="text-[18px] text-white font-bold">Yield {data.yield}%</p>
                        <p className="text-[18px] text-white font-bold">Days left {data.daysLeft} </p>
                    </div>
                    <div>
                        <p className="text-[18px] text-white font-bold">Sold {data.sold}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}