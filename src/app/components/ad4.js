"use client"
import {useEffect} from "react"
export default function Ad4() {
	useEffect(()=>{
		setTimeout(() => {
            loadAll()
		}, 0);
	},[])
	return(
		<div className="ad4"></div>
	)
}
