# OC Rec Finder — Research Brief

## Recommended concept

Build a cross-city discovery tool for public recreation classes, camps, and activities in Orange County, California.

The intended user is an Orange County parent or caregiver who is willing to consider programs outside their home city. Their core job is to compare suitable activities without opening and interpreting several separate municipal catalogs.

## What the research supports

- Recreation inventory is abundant and recurring. Santa Ana states that it offers more than 300 recreation classes and programs per season.
- Current information is fragmented by jurisdiction. Irvine directs users to YourIrvine for its most recently updated classes, camps, and activities, while Huntington Beach operates its own SANDS guide and registration system.
- Programs are difficult to compare consistently because cities describe age eligibility, schedules, prices, residency rules, locations, and registration differently.
- Commercial products such as ActivityHero and Sawyer already help users discover children's activities. The prototype therefore needs to demonstrate the value of comparing public programs specifically; it should not pretend the category has no competition.
- Publicly visible catalogs do not guarantee stable or authorized machine access. CivicPlus and ACTIVE Network documentation indicates that API access can be customer-controlled or contract-restricted.

These findings support a small aggregation-and-link-out prototype. They do not support claims that the data is live, complete, or automatically synchronized.

## Prototype user journey

1. A user searches for an activity or browses available programs.
2. They filter by city, category, age, schedule/date, and price.
3. They compare the essential facts shown in a consistent format.
4. They open a program detail view.
5. They follow an official provider link to verify details and register.

## Suggested initial coverage

Use clearly labeled sample records representing programs from:

- Irvine
- Santa Ana
- Costa Mesa
- Newport Beach
- Huntington Beach

OC Parks may be included if useful. Broad Orange County coverage is not required.

## Normalized program fields

Each sample program should have:

- Program name
- City or provider
- Category
- Description
- Age range
- Start and end dates
- Day and time
- Location
- Price
- Residency condition, when applicable
- Official information or registration URL
- Source name
- Last-checked date
- A flag showing that the listing is sample data

## Product guardrails

- Clearly state that this is a prototype using sample data.
- Never describe availability, prices, or schedules as live.
- Registration happens on the official provider website.
- Do not scrape websites or depend on undocumented APIs.
- Do not build accounts, payments, reviews, profiles, recommendations, waitlists, an admin dashboard, or in-app registration.
- Keep the data model separate from the interface so real or authorized feeds could replace the sample dataset later.

## Important uncertainty

The research did not establish that Orange County parents regularly search across city boundaries or that they would repeatedly use a separate aggregator. This prototype is being built as an informal product and Codex experiment, not as proof of market demand.

## Sources preserved from the research

- [Santa Ana recreation programs](https://www.santa-ana.org/question/do-you-offer-recreation-classes-if-yes-how-do-i-register/)
- [City of Irvine activities information](https://cityofirvine.org/inside-irvine)
- [Huntington Beach SANDS recreation classes](https://huntingtonbeachca.gov/departments/parks_recreation/sands_recreation_classes.php)
- [CivicPlus recreation API documentation](https://www.civicplus.help/recreation-management/docs/view-available-api-calls)
- [ACTIVE Network API Gateway terms](https://www.activenetwork.com/information/api-gateway-product-terms)
- [ActivityHero](https://www.activityhero.com/)
- [Sawyer](https://www.hisawyer.com/)
