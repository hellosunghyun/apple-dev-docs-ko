---
source_path: "documentation/Accelerate/vdsp-hamm-window.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp-hamm-window"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vdsphammwindow:0000:0001">vDSP_hamm_window</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdsphammwindow:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdsphammwindow:0002:0001">Creates a single-precision Hamming window.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdsphammwindow:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdsphammwindow:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
extern void vDSP_hamm_window(float *__C, vDSP_Length __N, int __Flag);
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The <a href="vdsp_hamm_window.md">@@TOKEN_0@@</a> and <a href="vdsp_hamm_windowd.md">@@TOKEN_1@@</a> functions create a Hamming window vector using the following operation:</span>

```objc
for (n=0; n < N; ++n)
{
    C[n] = 0.54 - (0.46 * cos( 2 * pi * n / N ) );
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The following code shows how to generate a Hamming window:</span>

```swift
let n = vDSP_Length(1024)

var c = [Float](repeating: 0,
                count: Int(n))

vDSP_hamm_window(&c,
                 n,
                 0)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">The following illustrates the values of the output vector, <code>c</code>:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">!<a href="https://docs-assets.developer.apple.com/published/e3d393e94ae8ea343b802ca3b64d3ef0/media-3233535%402x.png">Visualization of a Hamming window.</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0014:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0001"><code>__C</code>: The output vector.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0002"><code>__N</code>: The number of elements in the output vector.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0003"><code>__Flag</code>: A value that specifies whether the function creates a half window or a full window. Pass the <a href="vdsp_half_window.md">@@TOKEN_1@@</a> flag to create only the first <code>(N+1)/2</code> points; pass <code>0</code> to create a full-size window.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="quicktime-movies.md">QuickTime movies</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">시스템이 스냅샷을 생성한 시점의 통합 타임라인 현재 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vdsp_blkman_window.md">vDSP_blkman_window</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">시스템이 스냅샷을 생성한 시점의 통합 타임라인 현재 날짜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="vdsp_blkman_windowd.md">vDSP_blkman_windowD</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">에셋의 전체 재생 기간 동안 여러 오디오 트랙의 오디오 레벨을 혼합하는 방법을 정의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="vdsp_hamm_windowd.md">vDSP_hamm_windowD</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Creates a double-precision Hamming window.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="vdsp_hann_window.md">vDSP_hann_window</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Creates a single-precision Hann window.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="vdsp_hann_windowd.md">vDSP_hann_windowD</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Creates a double-precision Hann window.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="vdsp_half_window.md">var vDSP_HALF_WINDOW: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Specifies that the window should only contain the bottom half of the values (<code>0</code> to <code>(N+1)/2</code>).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="vdsp_hann_denorm.md">var vDSP_HANN_DENORM: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Specifies a denormalized Hann window.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="vdsp_hann_norm.md">var vDSP_HANN_NORM: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Specifies a normalized Hann window</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp_hamm_window">View on Apple Developer</a>*</span>
