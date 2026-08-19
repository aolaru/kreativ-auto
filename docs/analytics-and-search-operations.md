# Analytics and search operations

The site records page views, search starts, search-result views, search-result selections, no-result searches, ownership-path clicks, and email-link clicks. Search text and email addresses are not sent as analytics parameters.

## GA4 actions

1. Link the verified Search Console property `sc-domain:kreativauto.com` from GA4 Admin, Product links, Search Console links.
2. After traffic has accumulated, mark only `search_result_click` and `contact_click` as key events. Do not mark page views, scroll depth, or generic navigation clicks as key events.
3. Review traffic filters before making decisions: exclude internal testing traffic and investigate unusual direct or geographically unrelated traffic.
4. Use the linked Search Console report to compare query, landing page, engagement, and search-result selection data before expanding coverage.

## Search Console actions

1. In URL Inspection, request indexing only for materially upgraded, indexable core pages. Do not request indexing for `noindex` product, archive, browse, brand, model, category, or generic symptom pages.
2. Monitor the two non-indexed groups: `Discovered - currently not indexed` and `Crawled - currently not indexed`. Either improve a page with dedicated evidence or keep it `noindex`; do not submit it unchanged.
3. Keep the sitemap limited to canonical indexable pages. The build and repository health check enforce this.

## HTTPS redirect

`public/CNAME` keeps the GitHub Pages artifact tied to `kreativauto.com`, and page canonicals are fixed to `https://kreativauto.com`.

An HTTP-to-HTTPS redirect is a DNS or edge-hosting setting, not something a static GitHub Pages build can enforce. Configure a permanent redirect at the domain provider or Cloudflare for `http://kreativauto.com/*` to `https://kreativauto.com/$1`, then confirm with:

```sh
curl -I http://kreativauto.com/contact/
```

The response must be a `301` or `308` with an HTTPS `Location` header before the HTTPS issue can clear in Search Console.
