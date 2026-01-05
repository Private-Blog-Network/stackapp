"use client"
import {useEffect} from "react"
export default function Ad3() {
	useEffect(()=>{
		setTimeout(() => {
            loadAll()
		}, 0);
	},[])
	return(
		<div className="ad3"></div>
	)
}
