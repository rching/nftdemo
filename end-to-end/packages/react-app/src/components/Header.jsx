import { Image, PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (

    <a href="http://mobs.video" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="" 
        style={{ cursor: "pointer" ,background:"black" }}
        
      />
            <Image background="black" src="https://cdn.shopify.com/s/files/1/0373/7957/1848/files/MOBS-LOGO-website_200x.png?v=1598435308" 
                    style={{ cursor: "pointer" ,background:"black" }}
            />

    </a>
  );
}
