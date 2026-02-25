
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
