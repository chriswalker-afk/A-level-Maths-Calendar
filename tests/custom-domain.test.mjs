import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("GitHub Pages serves the calendar at its verified custom subdomain", () => {
  assert.equal(read("CNAME").trim(), "calendar.mrwalkermaths.com");
});

test("local assets resolve on both legacy project and custom-domain URLs", () => {
  const html = read("index.html");
  const assetPaths = ["./styles.css", "./styles/identity-polish.css", "./src/app.js"];
  const baseURLs = [
    "https://chriswalker-afk.github.io/A-level-Maths-Calendar/",
    "https://calendar.mrwalkermaths.com/"
  ];
  for (const path of assetPaths) {
    assert.ok(html.includes(`"${path}"`), `Local asset ${path} must use a relative URL`);
    for (const baseURL of baseURLs) {
      const resolved = new URL(path, baseURL);
      assert.equal(resolved.origin, new URL(baseURL).origin);
      assert.ok(resolved.pathname.startsWith(new URL(baseURL).pathname),
        `${path} must stay within the same site root at ${baseURL}`);
    }
  }
  assert.doesNotMatch(html, /(?:href|src)="\/A-level-Maths-Calendar\//,
    "Project-root links should not break when the hostname changes");
});
