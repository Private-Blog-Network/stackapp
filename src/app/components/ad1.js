"use client"
import {useEffect} from "react"
export default function Ad1() {
	useEffect(()=>{
		setTimeout(() => {
			loadAll()
		}, 0);
	},[])
	return(
		<div className="ad1"></div>
	)
}
