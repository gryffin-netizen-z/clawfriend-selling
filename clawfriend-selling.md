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

**Kết luận có số liệu (chỉ AI agent marketplace, so sánh với ClawFriend):** ClawHub có 5,7K+ skills nhưng không monetize; GPT Store có 3M+ GPTs nhưng centralized; Virtuals có 2,200+ agents nhưng chưa skill store rõ; Futurepedia 2,600+ tools nhưng centralized; Clawrr M2M trên Base nhưng không shares/skill; AI Agent Store chỉ directory. **ClawFriend** (theo CLAWFRIEND_SPEC) có **Shares Trading + Skill Market + Autonomous Social Stream trong 1 hệ sinh thái** trên **BNB**, với **5% protocol + 5% creator fee** và **holder-gated skill** = có chỗ cho segment crypto-native agent/skill và creator muốn earn on-chain; thua ở distribution/brand so với player lớn — cần execution và tăng agent/skill count.

---

# DELIVERABLE 2: SKILL RESEARCH
Liệt kê **5–10 skill** mà Skill Market **NÊN có**, với bằng chứng user **CẦN** và sẽ **TẠO DEMAND** (thu hút user dùng platform, mua shares để access skill private). Mỗi skill đáp ứng đủ các mục theo yêu cầu; bằng chứng demand dựa trên số liệu có nguồn (search volume, forum, Twitter, existing tools, on-chain).

---

## 1. Real-time Whale Alert

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Real-time Whale Alert |
| **Target user** | Swing trader / active trader crypto, portfolio **$10K–$100K**, trade 3–5 lần/tuần; đang dùng hoặc cân nhắc Nansen/Arkham nhưng thấy đắt hoặc limited. |
| **Problem** | Mất nhiều giờ/ngày theo dõi whale wallet thủ công trên Etherscan/BSCScan; bỏ lỡ move lớn (>$100K) vì không có alert real-time; cần biết whale đang accumulate hay distribute. |
| **Alternative hiện tại** | [**Nansen**](https://www.nansen.ai/plans) Pioneer **$99/tháng** (Smart Money labels, wallet analytics, 45+ chains); [**Arkham**](https://intel.arkham.com) free cho core tracking nhưng Intel Exchange/API là paid; [**Whale Alert**](https://whale-alert.io) free alerts nhưng ít filter theo chain/token/amount tùy chỉnh. |
| **Skill giải quyết thế nào** | Agent theo dõi 500+ whale wallet lớn nhất trên ETH/BSC (và tùy chọn SOL/BASE). Khi whale move > ngưỡng (VD $100K) trong 30 giây: alert qua Telegram/Discord; message gồm wallet, token, amount, destination (exchange/contract). User set filter: chain, token, min amount, blacklist/whitelist wallet. |
| **Visibility & Monetization đề xuất** | **Public free** (bản giới hạn: 1 chain, 50 whale, alert delay 2 phút) → build reputation và install count. **Private/holder-gated:** user phải hold **ít nhất 1 share** của agent creator mới access: đa chain, 500 whale, alert &lt;30s, filter nâng cao. So sánh: Nansen $99/mo; platform dùng share model thay subscription → drive share demand. |
| **Bằng chứng demand** | **Whale Alert** &gt;3M followers trên social (whale-alert.io press release Dec 2024); 2.5M+ (cryptotracker.io). Reddit/forum nhiều post về whale accumulation, “whale alert” (bitcointalk, r/CryptoMarkets). Nansen $99/mo cho data tương tự = willingness to pay đã validate. Arkham free nhưng limited → segment “free + customizable” và “premium via shares” còn gap. |
| **Link** | [Whale Alert](https://whale-alert.io) · [Nansen Plans](https://www.nansen.ai/plans) · [Arkham Intel](https://intel.arkham.com) · [r/CryptoMarkets](https://www.reddit.com/r/CryptoMarkets/) |

---

## 2. Rug Pull & Honeypot Detector

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Rug Pull & Honeypot Detector |
| **Target user** | Retail DeFi/memecoin trader, portfolio **$2K–$50K**, hay mua token mới trên DEX (BSC/ETH/BASE); sợ rug, honeypot, impersonator. |
| **Problem** | Không đọc được contract; không biết holder concentration, liquidity lock, mint function; mất tiền vì rug pull hoặc không bán được (honeypot). |
| **Alternative hiện tại** | [**Token Sniffer**](https://tokensniffer.com): scan 30K+ contract mới/ngày, 50–75% đánh dấu scam; API **Sniffer Pack Pro $99/tháng** ([Solidus Labs](https://www.soliduslabs.com/tokensniffer)). [**Rug Check**](https://devpost.com/software/rug-check): paste địa chỉ → risk score. [**Elliptic**](https://www.elliptic.co): institutional rug detection. |
| **Skill giải quyết thế nào** | User nhập token address (hoặc link DEX). Skill gọi logic tương tự Token Sniffer: so sánh bytecode/source với pattern scam; trả về risk score, cảnh báo: honeypot, unverified contract, holder concentration cao, liquidity không lock, clone token. Output: 1–2 câu tóm tắt + “Safe / Caution / High risk”. Có thể tích hợp Telegram: paste link → reply risk. |
| **Visibility & Monetization đề xuất** | **Public free** (5 check/ngày, 1 chain) → acquisition. **Private/holder-gated:** unlimited check, đa chain, real-time alert khi token mới list đạt ngưỡng risk; cần hold **≥1 share** của agent creator. Token Sniffer API $99/mo → holder-gated skill thay subscription. |
| **Bằng chứng demand** | Rug pulls **$2.8B** thiệt hại 2024 (Rug Check/Devpost, Elliptic). Token Sniffer: “first and most-used token security platform”, 30K contracts/ngày, trích dẫn U.S. Treasury và Senate (Decrypt, Solidus Labs). Demand: retail cần tool đơn giản (paste address → score); Sniffer Pack Pro $99/mo = validated paid demand. |
| **Link** | [Token Sniffer](https://tokensniffer.com) · [Token Sniffer API / Solidus](https://www.soliduslabs.com/tokensniffer) · [Rug Check Devpost](https://devpost.com/software/rug-check) · [Elliptic rug detection](https://www.elliptic.co/blog/how-elliptic-automatically-detects-rug-pull-scams) · [Decrypt Token Sniffer](https://decrypt.co/123042/token-sniffer-api-solidus-labs-rug-pulls-scams) |

---

## 3. Auto Yield Optimizer

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Auto Yield Optimizer |
| **Target user** | DeFi user có stablecoin hoặc blue-chip (ETH/BTC) **$5K–$100K**, muốn tối ưu APY mà không tự so sánh vault/pool mỗi ngày; không muốn trả phí quản lý cao. |
| **Problem** | Yield thay đổi liên tục; nhiều protocol (50+ assets, nhiều chain); bridging + rebalance thủ công tốn thời gian và gas; không rõ net APY sau fee. |
| **Alternative hiện tại** | [**Yearn**](https://yearn.fi) vaults; [**Zapper**](https://zapper.xyz) (450+ protocols, 50+ chains, free); [**DeBank**](https://debank.com) (60+ chains, Pro subscription); [**DeFi Saver**](https://defisaver.com) (automated strategies 18–23% APY stablecoin). Báo cáo DL News: &gt;2/3 TVL DeFi gắn yield; “Gen 3” optimizer = security, cross-chain, simple UX. |
| **Skill giải quyết thế nào** | Agent đọc portfolio (address) → so sánh APY hiện tại vs top 5–10 vault/pool trên chain user chọn (ETH/BSC/BASE…); gợi ý “move X từ A sang B để +Y% APY”; ước tính gas; optional: alert khi APY vault hiện tại giảm &gt;Z% hoặc có opportunity &gt;W% APY. Không tự execute (chỉ recommend) để giảm rủi ro và compliance. |
| **Visibility & Monetization đề xuất** | **Public free** (1 chain, 1 lần/ngày, không alert) → discovery. **Private/holder-gated:** đa chain, real-time re-check, Telegram alert khi có opportunity &gt; ngưỡng; cần hold **≥1 share**. So sánh: Nansen/DeBank Pro paid; platform = share-gated thay subscription. |
| **Bằng chứng demand** | RedStone blog: &gt;2/3 TVL DeFi liên quan yield; &gt;50 assets + nhiều protocol → “yield tracking and optimization essential” (rivo.xyz, analyticsinsight). DeFi Saver 18–23% APY automated = retail adoption. Yearn/Zapper/DeBank đều có lượng user lớn → demand đã validate. |
| **Link** | [Yearn](https://yearn.fi) · [Zapper](https://zapper.xyz) · [DeBank](https://debank.com) · [RedStone yield report](https://blog.redstone.finance/2024/02/14/crypto-yield-earn-products-report-2024-overview/) · [Rivo yield tracker guide](https://rivo.xyz/blog/defi-yield-tracker-services-how-to-pick-the-best-in-2024/) |

---

## 4. New Token Sniper / Launch Alert

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | New Token Sniper / Launch Alert |
| **Target user** | Trader tích cực, portfolio **$5K–$50K**, muốn biết token mới list (DEX) sớm hoặc nhận alert theo tiêu chí (liquidity, contract verified); không nhất thiết auto-buy. |
| **Problem** | Token list mỗi phút; không theo kịp; sniper bot chuyên nghiệp (50–150ms) đắt và cạnh tranh với MEV; user chỉ cần “alert + link” để tự quyết định. |
| **Alternative hiện tại** | [**Banana Gun**](https://bananagun.io): $3M fee, $7B lifetime volume (nadcab.com, cointelegraph). Sniper bot market **$1.4B (2024) → $4.8B (2033)** (Gigabots, nadcab). Nhiều bot trả phí; user thường thua vì fee và competition (Gigabots). |
| **Skill giải quyết thế nào** | Agent monitor factory/mempool (hoặc indexer) cho new pool trên 1–2 chain (BSC/ETH/BASE). Khi token mới có liquidity &gt; ngưỡng (VD $20K) và (optional) contract verified: gửi alert Telegram với link DEX, liquidity, contract link. **Không** auto-buy (tránh legal/rug). User tự vào link và quyết định. Có thể kết hợp với Rug Pull Detector (skill khác) để gửi risk score trong cùng alert. |
| **Visibility & Monetization đề xuất** | **Public free** (1 chain, delay 5 phút, 20 alert/ngày) → growth. **Private/holder-gated:** đa chain, alert &lt;1 phút, filter liquidity/verified, unlimited; hold **≥1 share**. So sánh: sniper bot trả phí cao; skill “alert only” đủ demand và phù hợp holder-gated. |
| **Bằng chứng demand** | Trading bot market $1.4B→$4.8B (nadcab.com); Banana Gun $3M fee, $7B volume; case SatoshiVM $6.77M (cointelegraph). Nhiều user không cần full sniper mà cần “biết sớm” → demand cho alert-only; Reddit/Medium nhiều bài “token sniper”, “new token launch”. |
| **Link** | [Banana Gun](https://bananagun.io) · [Nadcab sniper bots](https://www.nadcab.com/blog/sniper-bots-work) · [Cointelegraph SatoshiVM](https://cointelegraph.com/news/trader-bribe-7m-profit-satoshivm-token-launch) · [Gigabots sniping](https://medium.com/gigabots/sniping-sucks-4d4c99b45881) |

---

## 5. Smart Money / Copy-Trade Tracker

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Smart Money / Copy-Trade Tracker |
| **Target user** | Trader muốn “follow” wallet có lợi nhuận cao; portfolio **$5K–$50K**; không muốn trả Nansen $99/mo chỉ để copytrade. |
| **Problem** | Không biết wallet nào đáng follow; Nansen có Smart Money labels và use case “Copytrading Top Performing Wallets” nhưng đắt; cần list wallet + alert khi họ mua/bán token X. |
| **Alternative hiện tại** | [**Nansen**](https://www.nansen.ai) Pioneer $99/mo: Smart Money 300M+ addresses, copytrade use case ([docs.nansen.ai](https://docs.nansen.ai)). [**Minara**](https://minara.ai): copy-trade workflow, Telegram alert. [**Etherscan**](https://etherscan.io)/[**BSCScan**](https://bscscan.com): free nhưng không label “smart money”, không alert. |
| **Skill giải quyết thế nào** | Curated list “smart money” wallet (từ leaderboard hoặc manual): top ROI, win rate. User chọn 1–10 wallet để theo dõi. Alert khi wallet đó swap/buy/sell (token + amount, link tx). Optional: tổng hợp “wallet A vừa mua X, B vừa bán Y”. Dữ liệu từ public RPC/indexer (Etherscan API, BSC tương đương). |
| **Visibility & Monetization đề xuất** | **Public free** (theo 3 wallet, alert delay 10 phút) → viral. **Private/holder-gated:** theo 20 wallet, alert real-time, filter theo token/chain; hold **≥1 share**. Nansen $99/mo → share-gated thay subscription. |
| **Bằng chứng demand** | Nansen docs: “Use Case 4: Copytrading Top Performing Wallets”, “Use Case 2: Find & Copytrade Wallets on Hyperliquid”; Nansen blog “How to Monitor Crypto Wallet Activity & Track Smart Money”. Minara copy-trade workflow = product tồn tại. Nansen $99 = willingness to pay. |
| **Link** | [Nansen Copytrade use case](https://docs.nansen.ai/getting-started/use-case-templates/complex-use-cases/use-case-4-copytrading-top-performing-wallets) · [Nansen Smart Money guide](https://www.nansen.ai/post/how-to-monitor-crypto-wallet-activity-track-smart-money) · [Minara copy-trade](https://minara.ai/docs/help-center/readme/core-concepts/agentic-workflow/copy-trade-on-minara) |

---

## 6. Airdrop Hunter & Eligibility Tracker

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Airdrop Hunter & Eligibility Tracker |
| **Target user** | User tích cực airdrop, portfolio **$1K–$30K**; muốn biết airdrop sắp mở, điều kiện, và “mình đã đủ điều kiện chưa”. |
| **Problem** | Airdrop rải rác nhiều protocol; quên check eligibility; bỏ lỡ snapshot hoặc quest; không biết airdrop nào đáng làm. |
| **Alternative hiện tại** | [**Airdrop Tracker**](https://hunted.space/product/airdrop-tracker) (hunted.space): 300+ airdrops, AI recommendations, Product of the Day Product Hunt **813 upvotes** (04/2024). [**Bankless Airdrop Hunter**](https://www.bankless.com/welcome-to-airdrop-hunter): 3,794 airdrops eligible/6 tháng, **~$1,200** trung bình/user, ~760 user qualify/quest. [**CryptoRank Drop Hunting**](https://coinpaper.com/4267/drop-hunting-on-crypto-rank-the-best-airdrop-guides-at-one-place): filter category, network, difficulty. |
| **Skill giải quyết thế nào** | Agent scrape/aggregate list airdrop (từ public sources hoặc API): tên, network, deadline, điều kiện (VD “swap trên DEX X”, “hold NFT Y”). User nhập wallet → skill check on-chain (tx, balance) → trả “Eligible / Not yet / Unknown” + checklist action. Alert Telegram: airdrop mới, deadline 7 ngày, “bạn đã eligible”. |
| **Visibility & Monetization đề xuất** | **Public free** (20 airdrop, 1 check/tuần/wallet) → growth. **Private/holder-gated:** 300+ airdrop, check mỗi ngày, alert sớm + priority list; hold **≥1 share**. Bankless/Airdrop Tracker có engagement cao → demand; monetization qua share thay subscription. |
| **Bằng chứng demand** | Airdrop Tracker 813 upvotes Product Hunt; Bankless: 3,794 airdrops/6mo, $1,200+ avg, 760 users/quest (bankless.com, helpscoutdocs). Jupiter JUP $700–$70K/wallet; Starknet 1.3M addresses (bankless.com). Search “airdrop hunter”, “airdrop tracker” nhiều; tools đã validate demand. |
| **Link** | [Airdrop Tracker (Hunted)](https://hunted.space/product/airdrop-tracker) · [Bankless Airdrop Hunter](https://www.bankless.com/welcome-to-airdrop-hunter) · [Bankless Airdrop Hunter docs](https://bankless.helpscoutdocs.com/article/44-how-to-use-the-airdrop-hunter) · [Bankless wildest airdrops 2024](https://www.bankless.com/read/cryptos-wildest-airdrops-of-2024) |

---

## 7. Multi-Chain Portfolio & PnL Tracker

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Multi-Chain Portfolio & PnL Tracker |
| **Target user** | DeFi user có position nhiều chain (ETH, BSC, BASE, Arbitrum…), portfolio **$10K–$200K**; cần 1 chỗ xem tổng và PnL theo thời gian. |
| **Problem** | Phải mở từng chain/protocol; không có 1 view tổng; PnL thủ công (cost basis) rất tốn thời gian. |
| **Alternative hiện tại** | [**DeBank**](https://debank.com): **6.8M+** wallet, **170K+ DAU**, **$105B TVL** (debank.com, zelta.io); 60+ chains; free + Pro. [**Zapper**](https://zapper.xyz): 450+ protocols, 50+ chains, free ([protocol.zapper.xyz](https://protocol.zapper.xyz)). [**Zerion**](https://zerion.io) (deficoininvesting.com). |
| **Skill giải quyết thế nào** | User nhập 1 hoặc nhiều address. Skill gọi API (Zapper/DeBank public hoặc RPC + indexer) → aggregate balance theo chain, protocol, asset; tính PnL so với 7d/30d (nếu có historical). Output: summary text + link dashboard (hoặc embed). Có thể Telegram: “Portfolio: $X (24h +Y%); top 3 position: …”. |
| **Visibility & Monetization đề xuất** | **Public free** (1 address, 3 chain, 1 lần/ngày) → acquisition. **Private/holder-gated:** nhiều address, 10+ chain, real-time, PnL gas-adjusted, export; hold **≥1 share**. DeBank 6.8M wallet, 170K DAU = demand lớn; Pro paid → share-gated alternative. |
| **Bằng chứng demand** | DeBank 6.8M wallets, 170K DAU, $105B TVL (zelta.io, debank.com). Zapper 450+ protocols, 50+ chains. Deficoininvesting, zelta.io: “Managing complex positions manually impossible”, “essential”. Demand đã validate bởi scale platform. |
| **Link** | [DeBank](https://debank.com) · [Zapper](https://zapper.xyz) · [Zapper API docs](https://docs.protocol.zapper.xyz/) · [Zelta DeFi portfolio guide](https://zelta.io/blog/defi-portfolio-trackers-guide/) · [DeFi portfolio trackers comparison](https://deficoininvesting.com/best-crypto-portfolio-trackers-for-defi-investors-zapper-debank-zerion/) |

---

## 8. Gas Optimizer / Best Time to Send

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Gas Optimizer / Best Time to Send |
| **Target user** | User giao dịch trên ETH/L2/BSC thường xuyên; portfolio **$3K–$50K**; muốn tránh đỉnh gas và biết “nên gửi lúc nào”. |
| **Problem** | Gas dao động mạnh; giao dịch lúc đỉnh tốn gấp 2–5 lần; không biết khi nào rẻ. |
| **Alternative hiện tại** | [**EIP-4844**](https://vitalik.eth.limo/general/2024/05/09/multidim.html) (Ethereum): L2 fee giảm 5–10x (vitalik.eth.limo). [**gasfees.org**](https://gasfees.org): so sánh 27+ chain. [**CoinShares**](https://coinshares.com/resources/research/ethereum-transaction-fee-report-q4-2024): DEX chiếm phần lớn fee ETH Q4 2024; L2 tăng. Không có “agent nhắc best time” phổ biến trong agent marketplace. |
| **Skill giải quyết thế nào** | Agent lấy gas price hiện tại (và optional 24h trend) từ public API (etherscan, gasfees.org, chain-specific). So sánh với percentile 24h (VD “hiện tại cao hơn 80% thời gian trong 24h”). Gợi ý: “Nên chờ” hoặc “Gas đang thấp, có thể gửi”; ước tính fee cho tx đơn giản. Có thể Telegram alert: “Gas ETH &lt; 20 gwei” khi xuống ngưỡng. |
| **Visibility & Monetization đề xuất** | **Public free** (1 chain, check thủ công) → utility, retention. **Private/holder-gated:** đa chain, alert tự động khi gas xuống ngưỡng, ước tính fee theo tx type; hold **≥1 share**. Ít đối thủ “agent gas”; bổ trợ cho user đã dùng platform. |
| **Bằng chứng demand** | CoinShares: DEX dẫn đầu fee ETH 5 năm liên tiếp; L2 fee giảm (EIP-4844). analyticsinsight: “How to Optimize Transaction Costs”. gasfees.org so sánh 27+ chain = nhu cầu so sánh gas. Demand gián tiếp: bất kỳ user swap/nft đều quan tâm gas. |
| **Link** | [EIP-4844 / multidimensional gas (Vitalik)](https://vitalik.eth.limo/general/2024/05/09/multidim.html) · [gasfees.org](https://gasfees.org/comparing-gas-fees-ethereum-vs-binance-smart-chain/) · [CoinShares ETH fee Q4 2024](https://coinshares.com/resources/research/ethereum-transaction-fee-report-q4-2024) · [Analytics Insight gas optimization](https://www.analyticsinsight.net/cryptocurrency-analytics-insight/ethereum-gas-fees-in-2024-how-to-optimize-transaction-costs) |

---

## Tóm tắt & Bằng chứng demand (nguồn)

| Skill | Demand evidence tóm tắt | Nguồn chính (link) |
|-------|--------------------------|---------------------|
| Real-time Whale Alert | Whale Alert &gt;3M followers; Nansen $99/mo; Arkham free limited | [whale-alert.io](https://whale-alert.io) · [nansen.ai/plans](https://www.nansen.ai/plans) · [Arkham](https://intel.arkham.com) |
| Rug Pull & Honeypot Detector | Rug $2.8B 2024; Token Sniffer 30K contracts/ngày, $99/mo API | [Token Sniffer](https://tokensniffer.com) · [Devpost Rug Check](https://devpost.com/software/rug-check) · [Decrypt](https://decrypt.co/123042/token-sniffer-api-solidus-labs-rug-pulls-scams) · [Elliptic](https://www.elliptic.co) |
| Auto Yield Optimizer | &gt;2/3 TVL yield; Yearn/Zapper/DeBank; DeFi Saver 18–23% APY | [RedStone blog](https://blog.redstone.finance/2024/02/14/crypto-yield-earn-products-report-2024-overview/) · [Rivo](https://rivo.xyz/blog/defi-yield-tracker-services-how-to-pick-the-best-in-2024/) · [Yearn](https://yearn.fi) · [Zapper](https://zapper.xyz) |
| New Token Sniper / Launch Alert | Bot market $1.4B→$4.8B; Banana Gun $3M fee $7B volume | [Banana Gun](https://bananagun.io) · [Nadcab](https://www.nadcab.com/blog/sniper-bots-work) · [Cointelegraph](https://cointelegraph.com/news/trader-bribe-7m-profit-satoshivm-token-launch) · [Gigabots](https://medium.com/gigabots/sniping-sucks-4d4c99b45881) |
| Smart Money / Copy-Trade Tracker | Nansen use case copytrade; $99/mo; Minara copy-trade | [Nansen docs](https://docs.nansen.ai) · [Nansen blog](https://www.nansen.ai/post/how-to-monitor-crypto-wallet-activity-track-smart-money) · [Minara](https://minara.ai) |
| Airdrop Hunter | Airdrop Tracker 813 upvotes PH; Bankless 3,794 airdrops, $1,200+ | [Airdrop Tracker](https://hunted.space/product/airdrop-tracker) · [Bankless](https://www.bankless.com/welcome-to-airdrop-hunter) · [Bankless docs](https://bankless.helpscoutdocs.com/article/44-how-to-use-the-airdrop-hunter) |
| Multi-Chain Portfolio & PnL | DeBank 6.8M wallet, 170K DAU, $105B TVL; Zapper 450+ protocols | [DeBank](https://debank.com) · [Zapper](https://zapper.xyz) · [Zelta guide](https://zelta.io/blog/defi-portfolio-trackers-guide/) |
| Gas Optimizer | EIP-4844; DEX lead fee; gas trackers 27+ chains | [Vitalik EIP-4844](https://vitalik.eth.limo/general/2024/05/09/multidim.html) · [gasfees.org](https://gasfees.org) · [CoinShares](https://coinshares.com/resources/research/ethereum-transaction-fee-report-q4-2024) · [Analytics Insight](https://www.analyticsinsight.net) |

---

# DELIVERABLE 3: DISTRIBUTION PLAN

**Budget tháng đầu tiên: $10,000** — phân bổ rõ từng kênh paid; kênh organic = $0 nhưng có action plan và timeline. Tổng paid ≤ $10,000.

---

## 1. Tổng quan phân bổ budget ($10,000 — tháng 1)

| Kênh | Loại | Budget (tháng 1) | Lý do phân bổ | ROI dự kiến (tháng 1) |
|------|------|-------------------|----------------|------------------------|
| Twitter/X Ads | Paid | **$4,500** | Crypto/DeFi audience tập trung trên X; target follower Nansen, DeFi Llama, Etherscan → high intent. Test scale trước khi tăng. | CPC target $0.40–0.60; CTR 1.5–2%; sign-up conversion 2–4%; CAC target $15–25. |
| KOL / Creator (Twitter + Telegram) | Paid | **$3,000** | Credibility trong crypto phụ thuộc KOL/community; 1–2 post từ KOL có thể đạt reach gấp nhiều lần ad. | Reach ước tính 50K–150K/thread (tùy KOL); sign-ups từ link 0.5–1.5%; CAC $20–40. |
| Community & Event (AMA, space, giveaway) | Paid | **$2,000** | AMA/Space + giveaway tạo FOMO và trust; chi phí chủ yếu prize + tool (e.g. Gleam). | Sign-ups từ event 100–300; cost per sign-up $7–20. |
| Technical Blog (Mirror + cross-post) | Organic | **$0** | SEO + authority; dài hạn dẫn traffic. Chỉ tốn thời gian. | Page views 2K–5K/tháng; sign-ups từ UTM 20–80. |
| Telegram / Discord community | Organic | **$0** | Nuôi community hiện có và kéo từ AMA/event; không trả tiền quảng cáo. | Members +200–500; active contributors 10–30. |

**Tổng paid: $4,500 + $3,000 + $2,000 = $9,500** (dự phòng $500 cho contingency hoặc boost post).

---

## 2. Kênh 1 — Twitter/X Ads (Paid)

| Mục | Nội dung |
|-----|----------|
| **Tại sao chọn** | Phần lớn DeFi/crypto user active trên X; có targeting theo follower @DefiLlama, @Nansen_ai, @etherscan, @WhaleAlert; format video/thread phù hợp demo skill. |
| **Budget** | **$4,500** tháng 1 (45% tổng). |
| **Action plan** | (1) Tạo campaign **Awareness + Consideration**: objective website traffic + sign-up. (2) Target: follower của @DefiLlama, @Nansen_ai, @etherscan, @WhaleAlert; interest: DeFi, Ethereum, BNB Chain, crypto trading. (3) Creative: 2 video 15s (demo Whale Alert skill + Rug Check skill) + 1 carousel 3 slides (3 skills). Copy: "Install free on-chain skills for your agent — Whale Alert, Rug Check, Yield Optimizer. No subscription." (4) Landing: trang Skill Market hoặc skill detail (UTM: `utm_source=twitter&utm_medium=cpc&utm_campaign=skill_m1`). (5) Chạy 2 creative sets A/B; sau 2 tuần tắt creative kém, tăng budget cho creative tốt. |
| **Target audience** | DeFi/crypto trader, developer dùng on-chain tools; portfolio $5K–$50K; đã biết Nansen/Whale Alert/Etherscan. |
| **Timeline** | **Tuần 1:** Setup account, pixel/event, 2 video + 1 carousel, audience. **Tuần 2–4:** Chạy campaign; ngày 7 và 14 review CPC/CTR/conversion, tối ưu bid và creative. **Cuối tháng:** Báo cáo CAC, sign-up, skill install từ UTM. |
| **Estimated reach** | 200K–400K impressions; 3K–6K clicks (CTR 1.5–2%); 60–240 sign-ups (conversion 2–4%). |
| **Cost** | $4,500. CPC target $0.50; CAC target $18.75–75 (nếu 60–240 sign-ups). |
| **Metric** | Impressions, clicks, CTR, CPC; sign-ups (form hoặc connect wallet) từ landing UTM; skill installs từ cùng session. Tool: Twitter Ads Manager + Google Analytics hoặc dashboard in-house. |

**ROI dự kiến:** Nếu đạt 120 sign-ups và 30 skill installs, CAC ≈ $37.5; so với LTV (nếu 5% mua share sau 3 tháng) để đánh giá scale tháng 2.

---

## 3. Kênh 2 — KOL / Creator (Paid)

| Mục | Nội dung |
|-----|----------|
| **Tại sao chọn** | Crypto quyết định dùng tool thường dựa vào recommendation từ KOL/CT; 1 thread chất lượng từ account 20K–80K follower có thể đạt 50K+ reach và sign-up tốt hơn ad thuần. |
| **Budget** | **$3,000** tháng 1. Phân bổ: 1 KOL tầm 40K–80K follower ($1,500–2,000) + 2 creator 15K–30K ($500–750 mỗi người) hoặc 1 Twitter + 1 Telegram KOL. |
| **Action plan** | (1) **Twitter:** KOL đăng 1 thread (5–7 tweet): vấn đề (theo dõi whale/rug/yield mất thời gian) → giới thiệu ClawFriend Skill Market + 3 skill (Whale Alert, Rug Check, Yield) → CTA "Install free" + link. Có thể kèm video 30s screen record. (2) **Telegram:** 1 post trong channel 10K+ member (DeFi/crypto): short blurb + link + "Comment để nhận hướng dẫn install". (3) Yêu cầu KOL dùng link UTM: `?utm_source=kol_twitter&utm_medium=organic&utm_campaign=skill_m1` (và tên KOL trong utm_content). (4) Deliverable: 1 thread + 1 quote tweet hoặc reply từ brand; 1 Telegram post. |
| **Target audience** | Follower của KOL: trader DeFi, retail crypto, một phần developer. |
| **Timeline** | **Tuần 1:** Shortlist 3–5 KOL (engagement rate, audience overlap DeFi/BNB). **Tuần 2:** Negotiate, gửi brief + link UTM, ký. **Tuần 3:** KOL đăng thread (Twitter); **Tuần 4:** Telegram post (nếu KOL có channel) hoặc KOL thứ 2. |
| **Estimated reach** | Twitter thread: 40K–120K reach (tùy KOL). Telegram: 5K–15K views. Tổng ước tính 50K–150K. |
| **Cost** | $3,000 (trả 1 lần theo deal). |
| **Metric** | Click từ link UTM; sign-ups từ UTM; skill installs. So sánh CAC với Twitter Ads. |

**ROI dự kiến:** 50–150 sign-ups từ KOL → CAC $20–60; nếu engagement tốt, tháng 2 có thể tăng budget KOL.

---

## 4. Kênh 3 — Community & Event (Paid)

| Mục | Nội dung |
|-----|----------|
| **Tại sao chọn** | AMA/Space tạo trust và hỏi đáp trực tiếp; giveaway thu hút sign-up và share. Kết hợp = vừa giáo dục vừa acquisition. |
| **Budget** | **$2,000**. Trong đó: prize giveaway $1,200 (VD 3 giải: $400, $300, $200 BNB hoặc equivalent); phần còn lại cho tool (Gleam/Zealy nếu dùng), graphic, và chi phí tổ chức Space (nếu có). |
| **Action plan** | (1) **AMA / X Space (1 lần):** Chủ đề "Skill Market cho AI Agent: Whale Alert, Rug Check, Yield — dùng thế nào trên BNB." Invite 1 builder OpenClaw + 1 DeFi influencer (có thể từ KOL đã hợp tác). Duration 45–60 phút. CTA: "Link trong bio + comment — install skill free." (2) **Giveaway:** Điều kiện: Follow @ClawFriend (hoặc tương đương), join Telegram/Discord, install ít nhất 1 skill (link UTM). Random chọn 3 winner sau 7 ngày. (3) Landing/Form: thu email hoặc wallet + UTM; Gleam hoặc form đơn giản. |
| **Target audience** | User tham AMA/Space: crypto curious, DeFi user, một phần OpenClaw/agent user. Giveaway: broad nhưng filter qua action "install skill". |
| **Timeline** | **Tuần 1:** Đặt lịch Space, design giveaway, setup Gleam/form. **Tuần 2:** Công bố giveaway + mở đăng ký; **Tuần 3:** AMA/Space. **Tuần 4:** Đóng giveaway, công bố winner, gửi prize. |
| **Estimated reach** | Space: 80–200 listeners live; replay 500–2K. Giveaway: 300–800 entries (ước tính từ reach post). |
| **Cost** | $2,000. |
| **Metric** | Số listener/participant Space; số entry giveaway; sign-ups và skill installs từ UTM `utm_campaign=event_m1`; cost per sign-up. |

**ROI dự kiến:** 100–300 sign-ups từ event + giveaway → CAC ~$7–20.

---

## 5. Kênh 4 — Technical Blog (Organic)

| Mục | Nội dung |
|-----|----------|
| **Tại sao chọn** | SEO dài hạn; tutorial cụ thể (1 skill = 1 bài) thu hút search "how to whale alert", "rug check token"; Mirror.xyz quen với crypto audience. |
| **Budget** | **$0** — chỉ tốn thời gian viết và cross-post. |
| **Action plan** | (1) **Nền tảng:** Mirror.xyz (hoặc blog trên clawfriend.ai nếu có). (2) **Nội dung tháng 1:** 6–8 bài, mỗi bài = tutorial dùng 1 skill: VD "Cách dùng Whale Alert Skill để theo dõi Smart Money trên BNB", "Rug Check Skill: kiểm tra token trước khi mua trong 30 giây", "Yield Optimizer Skill: so sánh vault trên BNB và Base". Mỗi bài có: problem → bước install skill → screenshot/video ngắn → CTA "Install free" + link UTM. (3) **Distribution:** Cross-post lên r/ethereum, r/defi, r/binance (theo rule từng sub); share trong Telegram groups (DeFi Việt Nam, BNB community…); tweet thread tóm tắt + link. (4) Link UTM: `utm_source=mirror&utm_medium=blog&utm_campaign=skill_tutorial_m1`. |
| **Target audience** | DeFi developer, power user đang tìm tool whale/rug/yield; người search bằng keyword. |
| **Timeline** | **Tuần 1:** 2 bài (Whale Alert, Rug Check). **Tuần 2:** 2 bài (Yield, Portfolio). **Tuần 3:** 2 bài (Airdrop, Gas). **Tuần 4:** 1–2 bài (tổng hợp hoặc case study). Mỗi bài đăng xong 24h内 cross-post và share. |
| **Estimated reach** | 2K–5K page views/tháng (từ Mirror + Reddit + Telegram). |
| **Cost** | $0. |
| **Metric** | Page views (Mirror/GA); clicks link CTA; sign-ups và skill installs từ UTM. |

---

## 6. Kênh 5 — Telegram / Discord community (Organic)

| Mục | Nội dung |
|-----|----------|
| **Tại sao chọn** | Giữ chân user sau khi đăng ký; tạo nơi hỏi đáp và share use case; kênh dẫn từ AMA/giveaway và blog. |
| **Budget** | **$0**. |
| **Action plan** | (1) **Telegram:** Pin message "Get started — Install skill" + link; mỗi tuần 1–2 post: highlight 1 skill hoặc tip (VD "Cách set threshold Whale Alert"). (2) **Discord (nếu có):** Channel #skill-market, #showcase; role cho user đã install skill. (3) **Acquisition:** Mọi CTA từ event, KOL, blog đều dẫn về Telegram/Discord; trong giveaway yêu cầu join. (4) Không trả tiền ads; tăng member nhờ nội dung và event. |
| **Target audience** | User đã sign-up hoặc quan tâm ClawFriend; trader/developer BNB, OpenClaw user. |
| **Timeline** | **Liên tục:** Tuần 1–4 duy trì pin + 1–2 post/tuần; sau AMA/giveaway chủ động welcome new members và gửi link install. |
| **Estimated reach** | +200–500 members tháng 1 (từ event + KOL + blog). |
| **Cost** | $0. |
| **Metric** | Số members; active (message/reaction); số click link install từ Telegram/Discord (UTM). |

---

## 7. Partnership / Collab plan (Bonus)

| Mục | Nội dung |
|-----|----------|
| **Đối tác 1: OpenClaw (ClawHub / OpenClaw community)** | **Lý do:** OpenClaw có 135K+ GitHub stars; developer và user đang dùng ClawHub (5,7K+ skills). ClawFriend Skill Market bổ sung **economic layer** (holder-gated, creator fee). **Đề xuất:** (1) Integration "Install from ClawFriend" trong ClawHub hoặc docs: 1-click install skill từ ClawFriend marketplace (API `api.clawfriend.ai/v1/academy`). (2) Bài trên OpenClaw blog/newsletter: "ClawFriend Skill Market — skills với holder-gated và creator earn trên BNB." **Lợi ích 2 bên:** OpenClaw ecosystem có thêm nguồn skill có monetization; ClawFriend có traffic và user từ OpenClaw. **Action:** Liên hệ maintainer ClawHub/OpenClaw qua GitHub Discussion hoặc Twitter; đề xuất PR/docs integration; đề xuất 1 bài guest post. **Timeline:** Tuần 2–3 tháng 1: outreach; Tuần 4: draft PR hoặc bài. |
| **Đối tác 2: BNB Chain / BNB ecosystem (developer relations)** | **Lý do:** ClawFriend chạy trên BNB; BNB Chain có quỹ và chương trình hỗ trợ dự án. **Đề xuất:** (1) Apply builder program / grant (nếu có) để có thêm budget hoặc visibility. (2) Feature trong BNB newsletter hoặc ecosystem page (skill marketplace cho agent trên BNB). **Lợi ích:** ClawFriend được expose với BNB developer; BNB có use case "agent + skill" trên chain. **Action:** Tìm form builder/grant BNB; nộp 1-pager + demo; follow up. **Timeline:** Tuần 1: nộp; Tuần 3–4: follow up. |
| **Đối tác 3: Một DEX hoặc analytics tool trên BNB** | **Lý do:** Skill Whale Alert / Rug Check / Yield cần data on-chain; hợp tác với 1 DEX hoặc data provider (VD PancakeSwap, hoặc API BSCScan) có thể: (1) Co-marketing (bài "Cách dùng ClawFriend skill với DEX X"); (2) Hoặc chỉ mention trong tutorial. **Lợi ích:** ClawFriend có authority + link từ đối tác; đối tác có content cho user. **Action:** Chọn 1 đối tác; email outreach với đề xuất 1 bài co-marketing hoặc cross-link. **Timeline:** Tuần 3–4. |

---

## 8. Timeline tổng hợp (tháng 1)

| Tuần | Twitter Ads | KOL | Event / Community | Blog (organic) | Community (organic) | Partnership |
|------|-------------|-----|-------------------|----------------|---------------------|-------------|
| **1** | Setup campaign, creative, audience | Shortlist KOL, negotiate | Setup Space + giveaway, design | 2 bài (Whale, Rug) | Pin + post | BNB grant apply |
| **2** | Chạy; review sớm | KOL đăng thread | Công bố giveaway | 2 bài (Yield, Portfolio) | Post | OpenClaw outreach |
| **3** | Tối ưu bid/creative | Telegram post hoặc KOL 2 | AMA/Space | 2 bài (Airdrop, Gas) | Post | BNB follow-up; DEX outreach |
| **4** | Chạy; báo cáo | — | Đóng giveaway, trao prize | 1–2 bài | Post | Draft PR/guest post OpenClaw |

---

## 9. Cách đo kết quả tổng thể

| Metric | Nguồn | Target tháng 1 |
|--------|--------|----------------|
| Sign-ups (wallet connect hoặc email) | Landing UTM từ mọi kênh | 300–700 (tổng từ Ads + KOL + Event + Blog) |
| Skill installs | Event trong app/dashboard | 80–200 |
| CAC (paid) | Tổng paid / sign-ups từ paid | $15–35 (trung bình) |
| Organic vs paid sign-up ratio | UTM source | Tối thiểu 15–20% organic (blog + community) |
| Community size | Telegram/Discord | +200–500 members |

**Ghi nhớ:** Plan này đủ chi tiết để intern đọc và biết tuần nào làm gì, link UTM nào dùng, metric nào theo dõi. Tổng paid = $9,500, dự phòng $500; organic $0.

