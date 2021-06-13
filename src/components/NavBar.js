import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const link = links.map((getLink) => {
    return(
      <a key={getLink} href={`#${getLink}`}>{getLink}</a>
    )
  })
  return <nav>{link}</nav>;
}

export default NavBar;
