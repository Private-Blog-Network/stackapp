"use client"
import {useEffect} from "react"
export default function Ad2() {
	useEffect(()=>{
		setTimeout(() => {
			loadAll()
		},0);
	},[])
	return(
		<div className="ad2"></div>
	)
}
