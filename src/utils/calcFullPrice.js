export default function getFullPrice(data){
    return data.multipler*(data.price + (data?.material?.price || 0) + (data?.base?.price || 0) + (data?.option?.price || 0) + (data?.size?.percent_price*data.price/100 || 0))
}