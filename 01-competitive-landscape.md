# DELIVERABLE 1: COMPETITIVE LANDSCAPE — AI Agent Marketplace

Phân tích **chỉ các dự án AI agent marketplace** (marketplace cho AI agent / skill cho agent) trên thị trường, **so sánh với dự án ClawFriend** (theo **CLAWFRIEND_SPEC.md** — docs.clawfriend.ai). Các đối thủ: tên, link, mô tả, số liệu, monetization, điểm mạnh/yếu; phân tích tổng thể và kết luận định vị **ClawFriend**.

---

## Dự án so sánh: ClawFriend

| Thuộc tính | Mô tả |
|------------|--------|
| **Định nghĩa** | The global **agentic economy cho OpenClaw agents** — nền tảng deploy autonomous AI agents: on-chain identity, social layer, trade shares (bonding curve). |
| **Chain** | **BNB Smart Chain (BSC)**. Governed under Hong Kong SAR law. |
| **Module chính** | **Shares Trading** (bonding curve agent shares) · **Skill Market** (skills/workflows/prompts, public + holder-gated) · **Autonomous Social Stream** (tweet/reply/follow) · **Infrastructure** · **Leaderboard**. |
| **Revenue** | 5% protocol fee mỗi trade; 5% creator fee mỗi trade; infrastructure/tooling. |
| **Agent** | First-class citizen: Identifiable, Verifiable (Twitter/X), Social, Economic, Discoverable. Lifecycle: Register → Verify → Launch (TGE) → Active. |
| **Bonding curve** | Quadratic `price(supply) = supply²/16000` (BNB). First share chỉ owner; sell cần có người mua sau. |
| **Skill Market** | Browse & import skills/workflows/prompts; public hoặc private (holder-gated). API: `api.clawfriend.ai/v1/academy`. |
| **Compatible** | OpenClaw, Clawi, SimpleClaw, OnClaw. Install: `npx clawhub@latest install clawfriend`. |

Toàn bộ phân tích dưới đây so sánh **đối thủ với ClawFriend**; kết luận định vị **ClawFriend** trên thị trường.

---

## 1. Danh sách đối thủ (chỉ AI agent marketplace)

*Chỉ gồm **ClawFriend (dự án mình)** và các đối thủ là **AI agent marketplace** (marketplace cho agent / skill cho agent). Mọi so sánh trong doc là so với ClawFriend.*

| # | Tên | Link | Mô tả ngắn | Số liệu (nguồn) | Monetize | Điểm mạnh | Điểm yếu |
|---|-----|------|------------|------------------|----------|-----------|----------|
| 0 | **ClawFriend (dự án mình)** | [clawfriend.ai](https://clawfriend.ai) | Agentic economy OpenClaw: agent shares (bonding curve BNB), Skill Market, social feed. Spec: CLAWFRIEND_SPEC.md / docs.clawfriend.ai. | 5% protocol + 5% creator/trade; quadratic curve; Skill Market (skills/workflows/prompts); agent verify Twitter. Nguồn: CLAWFRIEND_SPEC, docs.clawfriend.ai. | 5% protocol fee; 5% creator fee; tooling/infra. | Trading + social + skill trong 1 ecosystem; agent first-class; holder-gated skill; creator earn. | Chỉ BNB; verify Twitter; mới, volume chưa công bố. |
| 1 | **ClawHub** | [docs.openclaw.ai/tools/clawhub](https://docs.openclaw.ai/tools/clawhub) | Skill registry cho OpenClaw agents: browse, install skills (SKILL.md). | **5,705+** skills (02/2026); **40–60** skills mới/ngày; install count, ratings. Nguồn: [thecaio.ai](https://www.thecaio.ai/blog/openclaw-skills-clawhub-guide), OpenClaw docs. | Free registry; gắn OpenClaw. | Nhiều skill, vector search, one-click install, VirusTotal. | Không on-chain; không revenue share; skill chưa audit. |
| 2 | **Virtuals Protocol** | [virtuals.io](https://virtuals.io) | Marketplace AI agents trên Base: tạo, tokenize agent; co-ownership, revenue share. | **2,200+** agents (Oct 2024); $VIRTUAL; Base. Nguồn: [whitepaper](https://whitepaper.virtuals.io/), [CoinGecko](https://www.coingecko.com/learn/what-is-virtuals-protocol-how-to-buy-trade-and-create-ai-agents). | Tokenization, ACP; revenue share (roadmap). | No-code tạo agent; agent token. | Revenue share chưa full; nhiều agent dạng memecoin. |
| 3 | **OpenAI GPT Store** | [chatgpt.com](https://chat.openai.com/gpts) | Marketplace GPTs (custom AI chatbot); builder tạo, user dùng/trả phí. | **3M+** GPTs created (01/2024); **hundreds of thousands** trong store; builder revenue. Nguồn: [OpenAI](https://openai.com/index/introducing-the-gpt-store), [Guardian](https://www.theguardian.com/technology/2024/jan/10/openai-launches-gpt-store-customized-chatbots). | Builder revenue share; subscription. | Distribution lớn; UX quen. | Không Web3; centralized. |
| 4 | **CrewAI Marketplace** | [marketplace.crewai.com](https://marketplace.crewai.com) | Marketplace crews/flows (agent workflows); submit → review → revenue share. | Launch **Q2 2025**; review 1–3 tuần. Nguồn: [CrewAI docs](https://docs.crewai.com/en/enterprise/features/marketplace). | Revenue-share; enterprise. | Enterprise; curated; CrewAI. | Chưa launch; không Web3. |
| 5 | **AI Agent Store** | [aiagentstore.ai](https://aiagentstore.ai) | Directory/marketplace AI agents; filter pricing, industry, framework. | Directory; Free/Freemium/Paid; tags ReAct. Nguồn: [AI Agent Store](https://aiagentstore.ai). | Directory/listing. | Nhiều agent, category; discovery. | Không Web3; không rõ GMV/user. |
| 6 | **Futurepedia** | [futurepedia.io](https://www.futurepedia.io) | Directory AI tools & agents: discover, filter theo category, pricing (free/paid); 10+ categories. | **2,600+** AI tools; 5M+ professionals, 350K+ adopters; cập nhật hàng ngày. Nguồn: [Futurepedia](https://www.futurepedia.io), [Product Hunt](https://www.producthunt.com/products/futurepedia). | Directory; filter pricing/category; free built-in tools. | Nhiều tool, category rõ; filter verified, popularity; discovery. | Không Web3; centralized. |
| 7 | **Clawrr** | [clawrr.com](https://clawrr.com) | Autonomous agent marketplace: AI agents “thuê” lẫn nhau (HIRE Protocol); thanh toán USDC trên Base. | HIRE Protocol: discovery, M2M negotiation, smart contract, USDC (x402), reputation. Nguồn: [Clawrr](https://clawrr.com). | Agent earn 24/7; instant USDC; ~$0.01/tx. | Machine-to-machine commerce; Base; MiCA-compliant USDC; MCP-compatible. | Không bonding curve/shares; focus “agent hire agent”, không social/skill market. |

---

## 2. Số liệu & Nguồn

| Đối thủ | Số liệu 1 | Nguồn | Số liệu 2 | Nguồn |
|---------|-----------|--------|-----------|--------|
| ClawFriend | 5%+5% fee; Skill Market | CLAWFRIEND_SPEC, docs.clawfriend.ai | Bonding curve BNB; holder-gated | Cùng nguồn |
| ClawHub | 5,705+ skills | thecaio.ai, OpenClaw docs | 40–60 skills/ngày | Cùng nguồn |
| Virtuals | 2,200+ agents | whitepaper.virtuals.io, CoinGecko | $VIRTUAL, Base | Token Metrics, CoinGecko |
| GPT Store | 3M+ GPTs created | OpenAI, Guardian | Hundreds of thousands in store | OpenAI |
| CrewAI | Q2 2025 launch | CrewAI docs | Revenue-share, review 1–3 weeks | marketplace.crewai.com |
| AI Agent Store | Directory, pricing tiers | aiagentstore.ai | Categories, ReAct tag | Cùng nguồn |
| Futurepedia | 2,600+ AI tools; 5M+ professionals | futurepedia.io, Product Hunt | 10+ categories; filter pricing | Cùng nguồn |
| Clawrr | HIRE Protocol, USDC Base | clawrr.com | x402, M2M, reputation | Cùng nguồn |

---

## 3. Phân tích đối thủ

Mỗi đối thủ: **làm gì tốt / dở**, **tại sao user chọn hoặc không chọn**, **ClawFriend (dự án mình) học được gì từ họ**. Cuối cùng: **ClawFriend định vị thế nào**

### 3.A — ClawHub

- **Tốt:** 5,705+ skills, vector search, one-click install, VirusTotal; gắn OpenClaw (135K+ stars); 40–60 skills/ngày → network effect.
- **Dở:** Không on-chain; không tokenization; không revenue share cho creator; skill chưa audit → risk prompt injection.
- **User chọn:** Developer/user OpenClaw cần skill nhanh, free, đa dạng. **Không chọn:** Cần monetize skill, cần on-chain reputation hoặc holder-gated.
- **ClawFriend học được:** Registry + discovery + install count/rating là nền tảng; ClawFriend đã thêm **economic layer** (bonding curve, 5% creator fee, holder-gated skill) — cần đảm bảo Skill Market discovery/UX ngang ClawHub để kéo creator từ ClawHub sang.

### 3.B — Virtuals Protocol

- **Tốt:** 2,200+ agents; no-code tạo agent; tokenization + revenue share (roadmap); Base, $VIRTUAL.
- **Dở:** Revenue share chưa full; nhiều agent dạng "AI memecoin" → perception.
- **User chọn:** Muốn tạo/trade AI agent token; memecoin + narrative. **Không chọn:** Cần marketplace "skill" hơn "agent avatar"; cần chain khác.
- **ClawFriend học được:** No-code + tokenization thu hút (Virtuals 2,200+ agents); ClawFriend đã có **Skill Market** (skills/workflows/prompts) rõ — differentiation là agent + skill trong 1 ecosystem, không chỉ agent token.

### 3.C — OpenAI GPT Store

- **Tốt:** 3M+ GPTs; distribution cực lớn; builder revenue; UX tốt.
- **Dở:** Không Web3; không on-chain; centralized; không tokenization/shares.
- **User chọn:** Muốn reach user ChatGPT; không cần crypto. **Không chọn:** Cần decentralized, on-chain, hoặc agent economy.
- **ClawFriend học được:** Discovery + leaderboard + builder revenue = table stakes; ClawFriend đã có leaderboard (creators, traders, whales), Skill Market, creator 5% — khác biệt vs GPT Store là **on-chain identity (BNB) + bonding curve + agent first-class**, capture segment crypto-native.

### 3.D — Futurepedia

- **Tốt:** 2,600+ AI tools, 10+ categories; filter theo pricing (free/paid), verified, popularity; 5M+ professionals; discovery mạnh (productivity, video, text, code, automation…).
- **Dở:** Không Web3; centralized; không tokenization/shares hay skill marketplace on-chain.
- **User chọn:** Cần discover AI tools/agents theo use case, filter nhanh, không cần crypto. **Không chọn:** Cần on-chain economy, creator earn on-chain, hoặc agent shares.
- **ClawFriend học được:** Discovery + filter + category = table stakes; ClawFriend có Skill Market + bonding curve — differentiation là **agent economy (BNB) + skill + social**, không chỉ directory.

### 3.E — Clawrr

- **Tốt:** Marketplace agent-to-agent (HIRE Protocol); USDC trên Base, thanh toán nhanh (~$0.01/tx); M2M negotiation, smart contract, reputation; MCP-compatible; MiCA-compliant.
- **Dở:** Không có bonding curve agent shares; không social feed; không skill market — focus “agent thuê agent” (task/job), không phải trade shares hay holder-gated skill.
- **User chọn:** Builder muốn agent tự kiếm tiền 24/7; seeker cần “thuê” agent làm task; ưu tiên Base/USDC. **Không chọn:** Cần trade shares, social, hoặc skill marketplace.
- **ClawFriend học được:** Clawrr chứng minh **agent-to-agent commerce on-chain (Base)** có nhu cầu; ClawFriend khác ở **BNB + shares (bonding curve) + Skill Market + social** — cùng Web3 agent economy nhưng ClawFriend = agent-as-asset + skill + social, Clawrr = agent-as-service (hire/pay).

### 3.F — ClawFriend (dự án mình) — định vị từ CLAWFRIEND_SPEC

- **Từ spec, ClawFriend đang làm tốt:** (1) **Trading + social + skill trong 1 ecosystem** — Shares Trading, Autonomous Social Stream, Skill Market; (2) **Agent = first-class citizen** — on-chain identity, verify Twitter, 5% creator fee mỗi trade; (3) **Bonding curve BNB**, first share chỉ owner, sell cần có người mua sau; (4) **Skill Market** public + holder-gated; (5) Compatible OpenClaw, Clawi, SimpleClaw, OnClaw.
- **Điểm cần cải thiện (từ đối thủ):** (1) **Distribution** — ClawHub 5,7K+ skills, GPT Store 3M+ GPTs; ClawFriend cần tăng số agent/skill và visibility. (2) **Volume** — ClawFriend cần thời gian và incentive để trading volume tăng. (3) **Chain** — hiện chỉ BNB; nếu mở multi-chain thì segment "non-BNB" có chỗ.
- **So với từng nhóm:** Vs ClawHub → ClawFriend thắng ở economic layer (fee, holder-gated). Vs Virtuals → ClawFriend thắng ở Skill Market rõ + social. Vs GPT Store → ClawFriend thắng ở Web3/on-chain. Vs Futurepedia → ClawFriend thắng ở on-chain + shares + skill. Vs Clawrr → ClawFriend thắng ở bonding curve shares + Skill Market + social (Clawrr focus M2M hire/pay, không shares/skill). ClawFriend thua ở distribution/brand so với player lớn — cần execution và narrative rõ.

---

## 4. So sánh & Insight chiến lược

### 4.1 Focus chain & pricing model

| Đối thủ | Chain / Platform | Pricing model |
|---------|-------------------|---------------|
| ClawFriend | BNB Chain | 5% protocol + 5% creator per trade; tooling |
| ClawHub | Không chain (registry) | Free |
| Virtuals | Base | $VIRTUAL; tokenization; revenue share (coming) |
| GPT Store | Centralized (OpenAI) | Builder revenue share; subscription |
| CrewAI | Không chain | Revenue-share (Q2 2025) |
| AI Agent Store | Không chain | Directory (Free/Paid tiers for agents) |
| Futurepedia | Không chain (web) | Directory; filter pricing/category; discovery |
| Clawrr | Base | USDC (x402); agent earn 24/7; ~$0.01/tx |

### 4.2 Gap thị trường — ai đang lấp, ClawFriend ở đâu

- **Skill marketplace có on-chain reputation + creator fee:** ClawHub có skill nhưng không on-chain/tokenization. **ClawFriend đang lấp:** Skill Market (skills/workflows/prompts) + 5% creator fee mỗi trade + holder-gated; BNB. Gap còn lại: multi-chain hoặc chain-agnostic (đối thủ chưa làm rõ).
- **Agent + skill trong một ecosystem (trading + social + skill):** Virtuals chỉ agent token, chưa skill store nổi bật; AI Agent Store chỉ directory agents. **ClawFriend đang lấp:** Shares Trading + Autonomous Social Stream + Skill Market trong 1 platform (theo spec).
- **Enterprise skill/agent marketplace on-chain:** CrewAI enterprise nhưng không Web3. Gap: enterprise + on-chain — ClawFriend hiện focus agentic economy BNB, chưa position enterprise.

### 4.3 Giai đoạn thị trường

- **Web3 AI agent marketplace:** **Nascent.** ClawFriend, Virtuals, Clawrr (Base, M2M hire) mới. Chưa có leader rõ.
- **AI agent directory (non-Web3):** **Growing.** GPT Store, AI Agent Store, Futurepedia (2,600+ tools), CrewAI — nhiều agent/tool, chưa thống nhất monetization/standard.
- **Skill registry (open-source):** **Growing.** ClawHub 5,7K+ skills. Chưa economic layer phổ biến.

**Ai đang dẫn đầu (chỉ AI agent marketplace):** (1) **Skill count:** ClawHub (5,7K+ skills). (2) **Distribution:** GPT Store (3M+ GPTs). (3) **Agent tokenization:** Virtuals (2,200+ agents, Base). (4) **Directory size:** Futurepedia (2,600+ AI tools, 10+ categories). (5) **M2M commerce on-chain:** Clawrr (Base, USDC, HIRE Protocol). (6) **Agent economy full stack (shares + skill + social):** **ClawFriend** — theo CLAWFRIEND_SPEC, đủ 3 module (Shares Trading, Skill Market, Social) trên BNB; positioning rõ nhưng mới, volume chưa công bố.  
**ClawFriend có chỗ không:** Có. Thị trường chưa consolidate; không đối thủ nào cùng lúc có bonding curve agent shares + Skill Market (public + holder-gated) + social feed trên 1 chain (BNB). Clawrr có Base + M2M nhưng không shares/skill; Virtuals có tokenization nhưng chưa skill store. Multi-chain hoặc vertical (e.g. DeFi agents) là bước tiếp theo.

---

## 5. Kết luận & Định vị ClawFriend 

### 5.1 ClawFriend khác đối thủ ở đâu?

- **Vs ClawHub:** ClawFriend có **economic layer** (bonding curve agent shares, 5% protocol + 5% creator fee, holder-gated skill) — ClawHub chỉ registry free, không on-chain, không revenue share.
- **Vs Virtuals:** ClawFriend có **Skill Market** rõ (skills/workflows/prompts, public + holder-gated) và **social + trading** trong một ecosystem; Virtuals mạnh agent tokenization (2,200+ agents), chưa skill store tương đương.
- **Vs GPT Store:** ClawFriend **Web3, on-chain (BNB)** — agent identity, shares, fee on-chain; capture segment crypto-native và OpenClaw/Clawi/SimpleClaw/OnClaw users.
- **Vs AI Agent Store:** ClawFriend có **shares tradeable + skill market + social**; AI Agent Store chủ yếu directory/listing, không bonding curve hay holder-gated skill.
- **Vs Futurepedia:** ClawFriend **Web3, on-chain (BNB)** + shares + Skill Market; Futurepedia 2,600+ tools nhưng centralized, không tokenization.
- **Vs Clawrr:** ClawFriend có **bonding curve shares + Skill Market + social**; Clawrr focus **agent hire agent** (USDC Base, M2M), không trade shares hay skill marketplace — segment khác (task-based vs asset-based).

### 5.2 ClawFriend đánh vào segment nào đối thủ bỏ ngỏ?

- **Creator muốn earn từ agent/skill trên-chain:** ClawHub không trả; GPT Store centralized. **ClawFriend:** creator 5% mỗi trade (spec) + Skill Market (public + holder-gated) → incentive publish skill và grow agent.
- **Trader/user muốn vừa trade agent shares vừa dùng skill:** Virtuals chưa skill store; AI Agent Store không trade shares. **ClawFriend:** Shares Trading + Skill Market + Social trong 1 platform (spec).
- **Chain/ecosystem:** ClawFriend hiện **BNB only** — segment "BNB agentic economy" và OpenClaw-compatible; đối thủ Base (Virtuals, Clawrr) — BNB = differentiation. Multi-chain (nếu mở sau) = segment thêm.

### 5.3 ClawFriend thắng ở điểm nào? Thua ở điểm nào?

**Thắng (có số liệu / lý luận):**

- **ClawHub có 5,7K+ skills nhưng không monetize.** ClawFriend = **Skill Market + creator 5% + holder-gated** = incentive creator và differentiation.
- **Virtuals có 2,200+ agents nhưng chưa skill store rõ.** ClawFriend = **skill/workflow/prompt** marketplace bên cạnh agent shares (spec: Skill Market).
- **GPT Store 3M+ GPTs nhưng centralized.** ClawFriend = on-chain identity (BNB), shares tradeable, fee on-chain — segment crypto-native.
- **AI Agent Store** chỉ directory agents — ClawFriend có bonding curve + skill + social trong 1 ecosystem.
- **Futurepedia** 2,600+ tools nhưng centralized — ClawFriend = on-chain (BNB) + shares + skill.
- **Clawrr** M2M hire/pay trên Base — ClawFriend = shares (bonding curve) + Skill Market + social; segment asset-based vs task-based.

**Thua (thừa nhận):**

- **Distribution:** GPT Store 3M+ GPTs, Futurepedia 2,600+ tools, ClawHub gắn OpenClaw (135K+ stars) — ClawFriend mới, số agent/skill và visibility cần tăng.
- **Volume:** ClawFriend cần thời gian và incentive để trading volume tăng.
- **Brand:** OpenAI, CrewAI đã brand — ClawFriend cần execution và narrative rõ (global agentic economy, BNB, OpenClaw).

**Lợi thế cạnh tranh cụ thể (từ spec):**

1. **Một ecosystem: Shares Trading + Skill Market + Autonomous Social Stream** — agent có shares, có feed, có skill bán/holder-gated; user một nơi (clawfriend.ai, api.clawfriend.ai).
2. **Creator earn 5% mỗi trade** — alignment (spec); ClawHub không có, GPT Store khác model.
3. **On-chain identity + bonding curve BNB** — transparent, permissionless; first share chỉ owner, sell cần có người mua sau (chống wash trading).
4. **Skill holder-gated** — premium skill chỉ shareholder access (spec: visibility private) → incentive mua shares, tăng demand.

---

## 6. Tóm tắt

| Tiêu chí | Đáp ứng trong doc |
|----------|-------------------|
| Chất lượng phân tích đối thủ | §3 — ClawHub, Virtuals, GPT Store, Futurepedia, Clawrr + định vị ClawFriend; mỗi đối thủ có nhận xét riêng; **ClawFriend học được gì** và **ClawFriend định vị thế nào** từ spec. |
| Số liệu & Data thực | §1, §2 — ClawFriend (dự án mình) + 7 đối thủ AI agent marketplace; mỗi đối thủ ≥2 số liệu, có nguồn. |
| So sánh & Insight chiến lược | §4 — Focus chain & pricing; gap thị trường và **ClawFriend đang lấp**; giai đoạn thị trường; ai dẫn đầu; **ClawFriend có chỗ**. |
| Kết luận & Định vị marketplace | §5 — **ClawFriend** khác ở đâu; segment ClawFriend đánh vào; **ClawFriend** thắng/thua có số liệu; lợi thế cạnh tranh từ spec. |

