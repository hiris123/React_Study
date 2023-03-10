import React, { useState, useEffect } from "react";

const CounterA = React.memo(({count})=>{
    useEffect(()=>{
        console.log(`Counter A Update : update ${count}`)
    })
    return <div>{count}</div>
})

const CounterB = React.memo(({obj})=>{
    useEffect(()=>{
        console.log(`Counter B Update : update ${obj.count}`)
    })
    return <div>{obj.count}</div>
})

const areEqual = (prevProps, nextProps) =>{
    if (prevProps.obj.count === nextProps.obj.count){
        return true // 이전 프롭스 === 현재 프롭스 -> 리랜더링을 일으키지 않는다. 
    }
    return false // 리랜더를 일으킨다. 
}

const MemoizedCounterB = React.memo(CounterB, areEqual);


const OptimizeTest = () => {
    
    const [count, setCount] = useState(1);
    const [obj,setObj] = useState({
        count : 1,
    })
    return (
        <div style = {{padding : 50}}>

            <div>
                <h2>Counter A</h2>
                <CounterA count = {count} />
                <button onClick = {()=>setCount(count)}>A button </button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizedCounterB obj = {obj} />
                <button onClick = {()=>setObj({
                    count: obj.count
                })}>B button </button>
            </div>
        </div>
        
    )

}

export default OptimizeTest;