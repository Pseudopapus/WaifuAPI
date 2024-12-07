import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import s from "./card.module.css";

export default function Card ({waifu, src, color, total}) {
    const [waifuPopup, setWaifuPopup] = useLocalStorage('waifuAPI_waifuSelected', false);
	
	return (
		<article 
		className={s.waifuCard+" "+color} 
		onClick={() => setWaifuPopup({
			waifu: waifu,
			src: src,
			color: color,
			total: total
		})}>
			<div className={s.waifuBox}>
				<div className={s.name}>
					<h4 className="center">{waifu.name.nick}</h4>
					<h5 className="center">{total}</h5>
				</div>
				<div className={s.w_img}>
					<img src={"/WaifuAPI/img/"+(waifu.img[0] ? waifu.img[0] : "notFound.png")} alt="" className={waifu.img[0] ? s.found : s.notFound} />
				</div>
				{waifu.name.jap ? <div className={s.jap}><h4 className="center">{waifu.name.jap}</h4></div> : ""}
			</div>
		</article>
	);
}