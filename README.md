# This is a fun infinitely looping zoom animation thing.

Really though, its just the most interesting way I found to demonstrate the boring thing I was making— a script to make layers of circles with each successive layer tangent to the previous one, and the diameters of the circles in each layer having arbitrary diameters. While messing with it, I found that if each successive layer is 1.36 times larger than the last, they will line up nicely.

_Lined up perfectly_
<img width="1920" height="1140" alt="Screenshot 2026-06-12 at 23-22-59 " src="https://github.com/user-attachments/assets/baf9cfc1-8f96-4e77-81b7-0180288350cf" />
_NOT lined up "right"_
<img width="1920" height="1140" alt="Screenshot 2026-06-13 at 00-29-07 " src="https://github.com/user-attachments/assets/2c43f63c-cdb7-46aa-8da0-07e61c7eb872" />

The rendering uses the [q5.js](https://q5js.org/home/) library.
