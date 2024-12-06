import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import s from "./cardPopup.module.css";

export default function CardPopup () {
    const [waifuPopup, setWaifuPopup] = useLocalStorage('waifuAPI_waifuSelected', false);
	const {waifu, color, total} = waifuPopup;

	return (
		!waifuPopup ? "" :
		<>
		<div className={s.cardPopupOverlay} onClick={() => setWaifuPopup(false)}></div>
		<article className={s.waifuCard+" "+color}>
			<div className={s.waifuBox}>
				<div className={s.name}>
					<h4 className="center">{waifu.name.nick}</h4>
					<h5 className="center">{total}</h5>
				</div>
				<div className={s.w_img}>
					<img src={"/WaifuAPI/img/"+(waifu.img ? waifu.img : "notFound.png")} alt="" className={waifu.img ? s.found : s.notFound} />
				</div>
				{waifu.name.jap ? <div className={s.jap}><h4 className="center">{waifu.name.jap}</h4></div> : ""}
			</div>
			<div className={s.waifuInfo}>
				<div className={s.infoRow}>
					<span>First Name:</span>
					<span>{waifu.name.name ? waifu.name.name : "unknown"}</span>
				</div>
				<div className={s.infoRow}>
					<span>Last Name:</span>
					<span>{waifu.name.surn ? waifu.name.surn : "unknown"}</span>
				</div>
			</div>
		</article>
		</>
	);
}