import React from "react";
import { Nav } from "office-ui-fabric-react/lib/Nav";

export function NavBar() {
  return (
    <Nav
      isOnTop={true}
      ariaLabel="Nav example with custom group headers"
      groups={[
        {
          name: "Pages",
          links: [
            // prettier-ignore
            { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
            { name: "News", url: "http://msn.com", key: "key2", target: "_blank" }
          ]
        },
        {
          name: "More pages",
          links: [
            // prettier-ignore
            { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
            { name: "Notes", url: "http://msn.com", key: "key4", target: "_blank" }
          ]
        }
      ]}
    />
  );
}
