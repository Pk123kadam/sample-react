import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pagination() {
    const [album, Setalbum] = useState([])
    const [event, Setevent] = useState(0)
    let country = [
        {
            name: 'india',
            city: [
                'mumbai',
                'pune'
            ]
        },
        {
            name: 'pak',
            city: [
                'karachi',
                'dhaka'
            ]
        },
        {
            name: 'us',
            city: [
                'las vegas',
                'chacago'
            ]
        }
    ]
    useEffect(() => {
        let api = async () => {
            let data = await axios.get("https://jsonplaceholder.typicode.com/photos")
            let res = data.data.splice(0, 100)
            Setalbum(res)
        }
        api()
    }, [])
    function handlechange(e) {
        Setevent(e.target.value)

    }
    // let obj = country.find((_, i) => event == i)


    return (
        <>
            {/* <div className='d-flex flex-wrap justify-content-center'>
                {
                    album && album.map((item, index) => {
                        return <div className='border border-dark text-center' style={{ width: "500px", height: "500px" }}>
                            <img src={item.thumbnailUrl} className='w-100 h-50'></img>
                            <p>{item.title}</p>



                        </div>
                    })
                }

            </div> */}
            <select onChange={handlechange}>
                {
                    country.map((e, i) => {
                        return <option value={i}>{e.name}</option>
                    })
                }
            </select>

            <select>
                {country[event].city.map((e) => {
                    return <option>{e}</option>
                })}

            </select>


        </>
    )
}

export default Pagination