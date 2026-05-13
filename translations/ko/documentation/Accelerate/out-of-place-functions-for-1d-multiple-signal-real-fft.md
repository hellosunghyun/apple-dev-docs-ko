---
source_path: "documentation/Accelerate/out-of-place-functions-for-1d-multiple-signal-real-fft.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/out-of-place-functions-for-1d-multiple-signal-real-fft"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:out-of-place-functions-for-1d-multiple-signal-real-fft:0000:0001">Out-of-Place Functions for 1D Multiple-Signal Real FFT</span>

<span class="ko-segment" data-segment-id="seg:paragraph:out-of-place-functions-for-1d-multiple-signal-real-fft:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:out-of-place-functions-for-1d-multiple-signal-real-fft:0002:0001">Perform fast Fourier transforms out of place on multiple-signal 1D real data.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">The functions in this group use the following operation for a forward real-to-complex transform:</span>

```c
N = 1 << Log2N;

// Repeat M times:
for (m = 0; m < M; ++m)
{
     scale = 2;

     // Define a real vector, h:
     for (j = 0; j < N/2; ++j)
     {
         h[2*j + 0] = A->realp[m*IMA + j*IA];
         h[2*j + 1] = A->imagp[m*IMA + j*IA];
     }

     // Perform Discrete Fourier Transform.
     for (k = 0; k < N; ++k)
         H[k] = scale *
             sum(h[j] * e**(-Direction*2*pi*i*j*k/N), 0 <= j < N);

     // Pack DC and Nyquist components into initial elements.
     C->realp[m*IMC + 0*IC] = Re(H[ 0 ]).
     C->imagp[m*IMC + 0*IC] = Re(H[N/2]).

     // Store regular components:
     for (k = 1; k < N/2; ++k)
     {
         C->realp[m*IMC + k*IC] = Re(H[k]);
         C->imagp[m*IMC + k*IC] = Im(H[k]);
     }
}

```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">The functions in this group use the following operation for an inverse complex-to-real transform:</span>

```c
N = 1 << Log2N;

scale = 1./N;

// Repeat M times:
for (m = 0; m < M; ++m)
{

    // Define a complex vector, h:
    h[ 0 ] = A->realp[m*IMA + 0*IA];
    h[N/2] = A->imagp[m*IMA + 0*IA];
    for (j = 1; j < N/2; ++j)
    {
        h[ j ] = A->realp[m*IMA + j*IA]
           + i * A->imagp[m*IMA + j*IA];
        h[N-j] = conj(h[j]);
    }

    // Perform Discrete Fourier Transform.
    for (k = 0; k < N; ++k)
        H[k] = scale *
            sum(h[j] * e**(-Direction*2*pi*i*j*k/N), 0 <= j < N);

    // Coerce real results into complex structure:
    for (k = 0; k < N/2; ++k)
    {
        C->realp[m*IMC + k*IC] = H[2*k+0];
        C->imagp[m*IMC + k*IC] = H[2*k+1];
    }
}

```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">The temporary buffer versions perform the same operation but use a temporary buffer for improved performance.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadataobject/objecttype/micropdf417.md">static let hlsDateRange: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">HTTP Live Streaming 키 공간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/out-of-place-functions-for-1d-multiple-signal-real-fft">View on Apple Developer</a>*</span>
