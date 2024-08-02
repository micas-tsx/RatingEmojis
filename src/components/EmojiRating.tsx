type RateProps = {
    rate: number
}

export const EmojiRating = ({ rate }: RateProps) => {
    if(rate > 5) rate = 5 //verificação para n deixar mais que 5
    if(rate < 0) rate = 0 //verificação para n deixar menor que 0
    
    const rateInt = Math.floor(rate) //recebe rate e arredonda pra baixo

    const stars = '😀'.repeat(rateInt) + '😶'.repeat(5 - rateInt) //e usa o 5 - rate pra deixar sempre em 5 e meio q controla pra nunac ter mais
    //usa o rate pra repetir o numero de vezes a carinha

    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}