# ai-excited-01 — zech (@c0zech)

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/JACKETAGENT-ID/ai-excited-01-zech/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/JACKETAGENT-ID/ai-excited-01-zech/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

Entry for the [make.fun ai-excited-01](https://make.fun/bounty/ai-excited-01) competition: one image made to get the AI judge excited.

## The image

A tiny robot cowboy in a battered hat and red bandana lassos a huge crackling lightning bolt and rides it like a bucking bronco across a stormy purple night sky, sparks flying, a tiny glowing city far below. The twist is the lasso: the most untameable thing in the sky, roped and ridden. The blinding white-gold bolt streaks diagonally through the whole frame, so the jolt of energy and the momentum hit in one look — and at small size the bright bolt and the little rider still read instantly.

## Run

Node 22, standard library only. The program copies `entry.png` to `/output/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program (copies `entry.png` to the output directory)
- `entry.png` — the entry image (JPEG bytes, 1024×683, under 1 MiB)
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file naming the entrant's Solana wallet
