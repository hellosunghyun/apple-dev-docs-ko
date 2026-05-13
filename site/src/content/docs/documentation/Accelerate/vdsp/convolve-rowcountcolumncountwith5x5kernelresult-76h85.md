---
source_path: "documentation/Accelerate/vdsp/convolve-rowcountcolumncountwith5x5kernelresult-76h85.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/convolve-rowcountcolumncountwith5x5kernelresult-76h85"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:convolverowcountcolumncountwith5x5kernelresult:0000:0001">convolve(_:rowCount:columnCount:with5x5Kernel:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolverowcountcolumncountwith5x5kernelresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolverowcountcolumncountwith5x5kernelresult:0002:0001">단정밀도 벡터에 대해 5 x 5 커널을 사용한 2D 합성곱을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolverowcountcolumncountwith5x5kernelresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwith5x5kernelresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func convolve<T, U, V>(_ vector: T, rowCount: Int, columnCount: Int, with5x5Kernel kernel: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func convolve&lt;T, U&gt;(T, rowCount: Int, columnCount: Int, with3x3Kernel: U) -&gt; [Double]](vdsp/convolve(_:rowcount:columncount:with3x3kernel:)-1r5oa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">배정밀도 벡터와 3 x 3 커널의 2차원 합성곱을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func convolve&lt;T, U&gt;(T, rowCount: Int, columnCount: Int, with3x3Kernel: U) -&gt; [Float]](vdsp/convolve(_:rowcount:columncount:with3x3kernel:)-7qjgw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">단정밀도 벡터와 3 x 3 커널의 2차원 합성곱을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vdsp/convolve(_:rowcount:columncount:with3x3kernel:result:">static func convolve&lt;T, U, V&gt;(T, rowCount: Int, columnCount: Int, with3x3Kernel: U, result: inout V)</a>-34k76.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">배정밀도 벡터와 3 x 3 커널의 2차원 합성곱을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vdsp/convolve(_:rowcount:columncount:with3x3kernel:result:">static func convolve&lt;T, U, V&gt;(T, rowCount: Int, columnCount: Int, with3x3Kernel: U, result: inout V)</a>-2worq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">단정밀도 벡터와 3 x 3 커널의 2차원 합성곱을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func convolve&lt;T, U&gt;(T, rowCount: Int, columnCount: Int, with5x5Kernel: U) -&gt; [Double]](vdsp/convolve(_:rowcount:columncount:with5x5kernel:)-7cvh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">배정밀도 벡터와 5 x 5 커널의 2차원 합성곱을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func convolve&lt;T, U&gt;(T, rowCount: Int, columnCount: Int, with5x5Kernel: U) -&gt; [Float]](vdsp/convolve(_:rowcount:columncount:with5x5kernel:)-101d6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">단정밀도 벡터와 5 x 5 커널의 2차원 합성곱을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/convolve(_:rowcount:columncount:with5x5kernel:result:">static func convolve&lt;T, U, V&gt;(T, rowCount: Int, columnCount: Int, with5x5Kernel: U, result: inout V)</a>-g68r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">배정밀도 벡터와 5 x 5 커널의 2차원 합성곱을 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/convolve(_:rowcount:columncount:with5x5kernel:result:">View on Apple Developer</a>-76h85)*</span>
