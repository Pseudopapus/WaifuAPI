import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import s from "./list.module.css";
import waifuList from "../../assets/data/waifu.json";
import Card from "../../component/card/Card";
import CardPopup from "../../component/cardPopUp/CardPopUp";

export default function List () {
    const [waifuPopup, setWaifuPopup] = useLocalStorage('waifuAPI_waifuSelected', false)
	const colors = [s.c1, s.c2, s.c3, s.c4, s.c5, s.c6];
    let group = 0;
    let total = 0;

    return (
        <>
        {waifuPopup ? <CardPopup/> : ""}
        <div className={s.waifuList}>
            {waifuList.map(src => {
                group = (group>=5 ? 0 : (src.id ? group+1 : 0));
                return(
                    src.waifus.map((waifu, waifuKey) => {
                    if(waifu.id){
                        total += 1;
                        return(<Card 
                            key={waifuKey} 
                            waifu={waifu}
                            src={src.name} 
                            color={colors[group]} 
                            total={total}
                        />);
                    }})
                );
            })}
        </div>
        </>
    );
}