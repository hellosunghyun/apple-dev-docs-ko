---
source_path: "documentation/Accelerate/out-of-place-functions-for-2d-real-fft.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/out-of-place-functions-for-2d-real-fft"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:out-of-place-functions-for-2d-real-fft:0000:0001">Out-of-Place Functions for 2D Real FFT</span>

<span class="ko-segment" data-segment-id="seg:paragraph:out-of-place-functions-for-2d-real-fft:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:out-of-place-functions-for-2d-real-fft:0002:0001">Perform fast Fourier transforms out of place on 2D real data.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">The functions in this group use the following operation for a forward real-to-complex transform:</span>

```c
N0 = 1 << Log2N0;
N1 = 1 << Log2N1;

if (IA1 == 0) IA1 = IA0*N0/2;
if (IC1 == 0) IC1 = IC0*N0/2;

scale = 2;

// Define a real matrix, h:
for (j1 = 0; j1 < N1  ; ++j1)
for (j0 = 0; j0 < N0/2; ++j0)
{
    h[j1][2*j0+0] = A->realp[j1*IA1 + j0*IA0]
              + i * A->imagp[j1*IA1 + j0*IA0];
    h[j1][2*j0+1] = A->realp[j1*IA1 + j0*IA0]
              + i * A->imagp[j1*IA1 + j0*IA0];
}

// Perform Discrete Fourier Transform.
for (k1 = 0; k1 < N1; ++k1)
for (k0 = 0; k0 < N0; ++k0)
    H[k1][k0] = scale * sum(sum(h[j1][j0]
        * e**(-Direction*2*pi*i*j0*k0/N0), 0 <= j0 < N0)
        * e**(-Direction*2*pi*i*j1*k1/N1), 0 <= j1 < N1);

// Pack special pure-real elements into output matrix:
C->realp[0*IC1][0*IC0] = H[0   ][0   ].
C->imagp[0*IC1][0*IC0] = H[0   ][N0/2]
C->realp[1*IC1][0*IC0] = H[N1/2][0   ].
C->imagp[1*IC1][0*IC0] = H[N1/2][N0/2]

// Pack two vectors into output matrix "vertically":
// (This awkward format is due to a legacy implementation.)
for (k1 = 1; k1 < N1/2; ++k1)
{
    C->realp[(2*k1+0)*IC1][0*IC0] = Re(H[k1][0   ]);
    C->realp[(2*k1+1)*IC1][0*IC0] = Im(H[k1][0   ]);
    C->imagp[(2*k1+0)*IC1][0*IC0] = Re(H[k1][N0/2]);
    C->imagp[(2*k1+1)*IC1][0*IC0] = Im(H[k1][N0/2]);
}

// Store regular elements:
for (k1 = 0; k1 < N1  ; ++k1)
for (k0 = 1; k0 < N0/2; ++k0)
{
    C->realp[k1*IC1 + k0*IC0] = Re(H[k1][k0]);
    C->imagp[k1*IC1 + k0*IC0] = Im(H[k1][k0]);
}

```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">The functions in this group use the following operation for an inverse complex-to-real transform:</span>

```c
N0 = 1 << Log2N0;
N1 = 1 << Log2N1;

if (IA1 == 0) IA1 = IA0*N0/2;
if (IC1 == 0) IC1 = IC0*N0/2;

scale = 1. / (N1*N0);

// Define a complex matrix, h, in multiple steps:

// Unpack the special elements:
h[0   ][0   ] = A->realp[0*IA1][0*IA0];
h[0   ][N0/2] = A->imagp[0*IA1][0*IA0];
h[N1/2][0   ] = A->realp[1*IA1][0*IA0];
h[N1/2][N0/2] = A->imagp[1*IA1][0*IA0];

// Unpack the two vectors from "vertical" storage:
for (j1 = 1; j1 < N1/2; ++j1)
{
    h[j1][0   ] = A->realp[(2*j1+0)*IA1][0*IA0]
            + i * A->realp[(2*j1+1)*IA1][0*IA0]
    h[j1][N0/2] = A->imagp[(2*j1+0)*IA1][0*IA0]
            + i * A->imagp[(2*j1+1)*IA1][0*IA0]
}

// Take regular elements:
for (j1 = 0; j1 < N1  ; ++j1)
for (j0 = 1; j0 < N0/2; ++j0)
{
    h[j1][j0   ] = A->realp[j1*IA1 + j0*IA0]
             + i * A->imagp[j1*IA1 + j0*IA0];
    h[j1][N0-j0] = conj(h[j1][j0]);
}

// Perform Discrete Fourier Transform.
for (k1 = 0; k1 < N1; ++k1)
for (k0 = 0; k0 < N0; ++k0)
    H[k1][k0] = scale * sum(sum(h[j1][j0]
        * e**(-Direction*2*pi*i*j0*k0/N0), 0 <= j0 < N0)
        * e**(-Direction*2*pi*i*j1*k1/N1), 0 <= j1 < N1);

// Store result.
for (k1 = 0; k1 < N1  ; ++k1)
for (k0 = 0; k0 < N0/2; ++k0)
{
    C->realp[k1*IC1 + k0*IC0] = Re(H[k1][2*k0+0]);
    C->imagp[k1*IC1 + k0*IC0] = Im(H[k1][2*k0+1]);
}

```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Ruby characters는 일반적으로 일본어 콘텐츠에서 사용되며 기본 텍스트 옆에 함께 표시되는 작은 주석입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="in-place-functions-for-2d-real-fft.md">In-Place Functions for 2D Real FFT</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Perform fast Fourier transforms in place on 2D real data.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/out-of-place-functions-for-2d-real-fft">View on Apple Developer</a>*</span>
