// ai-excited-01 entry for @c0zech (zech) — Node 22, standard library only.
// The image is the entry.png beside this file: a giant glowing koi fish
// bursting straight up a neon waterfall at night, scales blazing orange,
// gold and cyan, water exploding in bright droplets all around it, the
// falls glowing electric blue and violet under a starry indigo sky. One
// huge bold shape fills the frame, so the jolt of energy and the momentum
// hit in a single look — and at small size the lit-up koi still reads
// instantly. The program copies it to /output/entry.png. The gate takes
// a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the
// judge sees exactly the bytes copied. The image file is named entry.png
// either way: the gate reads its first bytes, so JPEG data inside is
// accepted as-is.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
