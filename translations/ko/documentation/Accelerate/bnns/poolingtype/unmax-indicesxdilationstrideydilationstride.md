---
source_path: "documentation/Accelerate/bnns/poolingtype/unmax-indicesxdilationstrideydilationstride.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/poolingtype/unmax-indicesxdilationstrideydilationstride"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0000:0001">BNNS.PoolingType.unMax(indices:xDilationStride:yDilationStride:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0002:0001">A function for pooling that’s the partial inverse of max pooling and sets all nonmaximal values to zero.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspoolingtypeunmaxindicesxdilationstrideydilationstride:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case unMax(indices: UnsafeMutableBufferPointer<Int>? = nil, xDilationStride: Int = 0, yDilationStride: Int = 0)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/poolingtype/average(countincludespadding:">BNNS.PoolingType.average(countIncludesPadding:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A function for pooling that computes the average of each element in the pooling kernel.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/poolingtype/l2norm.md">BNNS.PoolingType.l2Norm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A function for pooling that computes the square root of the sum of squares of each element in the pooling kernel.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/poolingtype/max(indices:xdilationstride:ydilationstride:">case max(indices: UnsafeMutableBufferPointer&lt;Int&gt;?, xDilationStride: Int, yDilationStride: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A function for pooling that computes the maximum of each element in the pooling kernel.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Raycast에서 교차를 허용하는 표면의 유형입니다.</span>
