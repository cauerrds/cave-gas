import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Index from "./pages/Index";

export async function prerender(data: { url: string }) {
  // como você só tem landing, renderiza direto o Index
  const html = renderToString(
    <StaticRouter location={data.url}>
      <Index />
    </StaticRouter>
  );

  return { html };
}