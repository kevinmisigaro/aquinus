import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aquinus</title>
      </head>
      <body><div className="relative">{children}</div></body>
    </html>
  );
}

export default Layout;
