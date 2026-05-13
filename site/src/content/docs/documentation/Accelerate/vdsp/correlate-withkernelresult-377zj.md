---
source_path: "documentation/Accelerate/vdsp/correlate-withkernelresult-377zj.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/correlate-withkernelresult-377zj"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:correlatewithkernelresult:0000:0001">correlate(_:withKernel:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:correlatewithkernelresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:correlatewithkernelresult:0002:0001">Calculates the correlation of a single-precision signal vector and a filter vector.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:correlatewithkernelresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:correlatewithkernelresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func correlate<T, U, V>(_ vector: T, withKernel kernel: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>vector</code>: The input signal vector.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>kernel</code>: The filter vector.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>result</code>: On output, the correlation result.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func convolve&lt;T, U&gt;(T, withKernel: U) -&gt; [Double]](vdsp/convolve(_:withkernel:)-1nv65.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">레이어 바이어스로, 출력 채널마다 하나가 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func convolve&lt;T, U&gt;(T, withKernel: U) -&gt; [Float]](vdsp/convolve(_:withkernel:)-4p0rt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력 채널 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vdsp/convolve(_:withkernel:result:">static func convolve&lt;T, U, V&gt;(T, withKernel: U, result: inout V)</a>-8j76l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">합성곱 커널의 높이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp/convolve(_:withkernel:result:">static func convolve&lt;T, U, V&gt;(T, withKernel: U, result: inout V)</a>-2z66w.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">합성곱 커널의 너비입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func correlate&lt;T, U&gt;(T, withKernel: U) -&gt; [Double]](vdsp/correlate(_:withkernel:)-7f6o0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">각 샘플에 적용할 풀링 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func correlate&lt;T, U&gt;(T, withKernel: U) -&gt; [Float]](vdsp/correlate(_:withkernel:)-9sol8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">X 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsndarraygetdatasize(_:">func BNNSNDArrayGetDataSize(UnsafePointer&lt;BNNSNDArrayDescriptor&gt;) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">배열 설명자가 요구하는 크기를 바이트 단위로 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">표준화된 압축 희소 행렬(CSR) 레이아웃의 희소 텐서를 BNNS fully connected 레이어가 사용하는 장치별 희소 레이아웃으로 변환합니다.</span>
