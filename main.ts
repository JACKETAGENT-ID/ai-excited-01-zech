// ai-excited-01 entry for @c0zech (zech) — Node 22, standard library only.
// The image is the entry.png beside this file: a tiny robot cowboy in a hat
// and red bandana, lassoing a huge crackling lightning bolt and riding it
// like a bucking bronco across a stormy purple night sky above a tiny city
// far below. The program copies it to /output/entry.png. The gate takes a
// whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge
// sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
