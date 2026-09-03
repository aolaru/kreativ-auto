# Analytics and search operations

The site records page views, search starts, search-result views, search-result selections, no-result searches, ownership-path clicks, tool opens, worksheet prints, and email-link clicks. Search text and email addresses are not sent as analytics parameters.

## Consent and measurement

Google Analytics and Cloudflare Web Analytics load only after a visitor accepts optional analytics in the site's Privacy choices panel. Rejecting optional analytics prevents those scripts from loading. The panel is a limited analytics preference, not an advertising consent management platform.

Google AdSense remains disabled. Before enabling it, configure a Google-certified consent management platform for the EEA, United Kingdom, and Switzerland, validate the integration in AdSense, and then update the Privacy Policy. See [Google's consent requirements](https://support.google.com/adsense/answer/13554020) and [Consent Mode documentation](https://developers.google.com/tag-platform/security/guides/consent).

## GA4 actions

1. Link the verified Search Console property `sc-domain:kreativauto.com` from GA4 Admin, Product links, Search Console links.
2. After traffic has accumulated, mark only `search_result_click` and `contact_click` as key events. Do not mark page views, scroll depth, or generic navigation clicks as key events.
3. Review traffic filters before making decisions: exclude internal testing traffic and investigate unusual direct or geographically unrelated traffic.
4. Use the linked Search Console report to compare query, landing page, engagement, and search-result selection data before expanding coverage.
5. Review `tool_open` and `tool_print` by page section. A useful tool should lead to repeat openings or printing; a low-use tool needs a clearer entry point or a narrower purpose.

## Latest content decision

On September 3, 2026, the Search Console three-month report showed 133 clicks from 17.6k impressions, a 0.8% average CTR, and an average position of 11.8. Queries for `toyota rav4 2020 problems` and `2020 toyota rav4 problems` showed demand for the existing RAV4 ownership topic, while product-led queries also generated impressions.

The resulting work is a source-backed upgrade to the 2020 RAV4 problem guide and a deliberate decision to keep commercial pages `noindex`. Google Analytics showed 140 active users and 170 sessions in its previous 30-day overview, but the page-level sample is still too small to justify broader topic expansion. Re-check query and landing-page data before selecting the next public guide.

## RAV4 follow-up review

Review the updated 2020 RAV4 guide seven and fourteen days after deployment. Do not make a content-expansion decision from one visitor or a single query.

| Signal | Where to check | Decision it supports |
| --- | --- | --- |
| Search impressions, clicks, CTR, and position for RAV4 problem queries | Search Console Performance, filtered to the landing page | Improve the title, description, or claim-level content only when query intent and the page remain aligned. |
| `ownership_task_click` for the used-car worksheet | GA4 Events, filtered to the RAV4 guide | Keep the inspection-record entry point prominent when visitors use it; otherwise test a clearer label or placement. |
| `search_start`, `search_results_view`, `search_result_click`, and `search_no_results` | GA4 Events | Add or revise a guide only when repeated no-result searches identify a specific unresolved task. Search terms are intentionally not collected. |
| `scroll_depth` at 50% and 90% | GA4 Events, filtered to the RAV4 guide | Shorten, regroup, or strengthen sections that visitors consistently leave before reaching. |
| Engagement and query data for product-led pages | GA4 and Search Console | Keep a parts page `noindex` unless it has its own source-backed analysis and fitment record; impressions alone do not justify indexing. |

Record the decision and the date in the Updates page only when a public guide changes. Keep raw visitor identifiers, search text, and private evidence out of the repository.

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
