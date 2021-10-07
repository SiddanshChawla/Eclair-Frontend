import React from "react";
import NftdisplayExplore from './nftDisplayExplore';
import Header from "./header";
import Footer from "./footer";


function explore(){
    return(
    <div>
        <Header/>
        <NftdisplayExplore/>
        <Footer/>
    </div>
    );
};
export default explore;