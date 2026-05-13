---
source_path: "documentation/Accelerate/vdsp/convolve-rowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult-4211m.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/convolve-rowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult-4211m"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0000:0001">convolve(_:rowCount:columnCount:withKernel:kernelRowCount:kernelColumnCount:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0002:0001">임의 크기의 커널을 사용해 배정밀도 벡터의 2D 컨볼루션을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convolverowcountcolumncountwithkernelkernelrowcountkernelcolumncountresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func convolve<T, U, V>(_ vector: T, rowCount: Int, columnCount: Int, withKernel kernel: U, kernelRowCount: Int, kernelColumnCount: Int, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func convolve&lt;T, U&gt;(T, rowCount: Int, columnCount: Int, withKernel: U, kernelRowCount: Int, kernelColumnCount: Int) -&gt; [Double]](vdsp/convolve(_:rowcount:columncount:withkernel:kernelrowcount:kernelcolumncount:)-1sswe.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">임의 크기의 커널을 사용해 배정밀도 벡터의 2D 컨볼루션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func convolve&lt;T, U&gt;(T, rowCount: Int, columnCount: Int, withKernel: U, kernelRowCount: Int, kernelColumnCount: Int) -&gt; [Float]](vdsp/convolve(_:rowcount:columncount:withkernel:kernelrowcount:kernelcolumncount:)-267yl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">임의 크기의 커널을 사용해 단정밀도 벡터의 2D 컨볼루션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vdsp/convolve(_:rowcount:columncount:withkernel:kernelrowcount:kernelcolumncount:result:">static func convolve&lt;T, U, V&gt;(T, rowCount: Int, columnCount: Int, withKernel: U, kernelRowCount: Int, kernelColumnCount: Int, result: inout V)</a>-5hiro.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Calculates the 2D convolution of a single-precision vector with an arbitrarily sized kernel.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/convolve(_:rowcount:columncount:withkernel:kernelrowcount:kernelcolumncount:result:">View on Apple Developer</a>-4211m)*</span>
