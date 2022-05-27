import {useEffect, useState} from "react"

const fakeEndpoint = "https://google.com"

const AmountPopUp = () => {
    const [data, setData] = useState({
        first_name: 'John',
        city: 'Marietta',
        amount: 300,
    });

    const [showAmount, setShowAmount] = useState(false);

    // attach a timer - 5 seconds
        // after 5, slide up
        // wait 5, then slide back down

    const fetchData = async () => {
        try {
            const fetchedData = await fetch(fakeEndpoint);
            const parsedData = await fetchedData.json();
            // TODO: check data is expected
            setData(parsedData);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        // fetchData();
        fiveSecondTimer();
    })


    const fiveSecondTimer = () => {
        const timer = setTimeout(()=>{
            console.log('2')
            setShowAmount(true);
        }, 5000);
        
        return () => clearTimeout(timer);
    }

    return <div className={`popup ${showAmount ? 'show' : null}`}>
        <h3>New boost!</h3>
        <p>{data.first_name} from {data.city} just gave {data.amount.toString()}!</p>
    </div>
}

export default AmountPopUp;
