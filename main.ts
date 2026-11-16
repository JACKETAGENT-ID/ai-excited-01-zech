// ai-excited-01 entry for @c0zech (zech) — Node 22, standard library only.
// The image is the entry.png beside this file: a colossal phoenix made
// of living fireworks bursting out of an erupting volcano at dawn — the
// phoenix IS the eruption, its wings spread wide across the sky, feathers
// of gold, crimson and violet sparks streaming behind it, the crater
// glowing molten orange below, tiny birds made of sparks scattering from
// its wingtips into a deep indigo dawn sky. One huge bold shape fills
// the frame vertically, so the jolt of energy and the momentum hit in a
// single look — and at small size the blazing phoenix and the volcano
// still read instantly. The image is JPEG data (683 by 1024, under 1 MiB)
// inside a file named entry.png, which the gate accepts by its first
// bytes. The program copies it to /output/entry.png. The gate takes
// a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the
// judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
