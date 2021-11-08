import React from "react";
import Header from './header';
import Mainview from './mainview';
import Footer from './footer';
import Nftdisplay from './nftDisplayRecent';

function homepage(){
    return(
      <div className="App">
        <Header/>
        <Mainview />
        <Nftdisplay />
        <Footer/>
    </div>
    );
};
export default homepage;