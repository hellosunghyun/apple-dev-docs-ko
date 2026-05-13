---
source_path: "documentation/Accelerate/bnnsndarraydescriptor/shape.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/shape"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:shape:0000:0001">shape</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shape:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shape:0002:0001">The shape of the n-dimensional array.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shape:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var shape: BNNS.Shape { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsndarraydescriptor/flags.md">var flags: BNNSNDArrayFlags</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Flags that control some behaviors of the n-dimensional array.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsndarraydescriptor/layout.md">var layout: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The dimension of the n-dimensional array.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsndarraydescriptor/size.md">var size: (Int, Int, Int, Int, Int, Int, Int, Int)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The number of values in each dimension.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsndarraydescriptor/stride.md">var stride: (Int, Int, Int, Int, Int, Int, Int, Int)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The increment, in values, between consecutive elements in each dimension.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsndarraydescriptor/data.md">var data: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A pointer that is optional and points to the underlying data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsndarraydescriptor/data_type.md">var data_type: BNNSDataType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱이나 게임에서 iOS 기기 카메라와 모션 기능을 통합해 증강 현실 경험을 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsndarraydescriptor/table_data.md">var table_data: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The lookup table for indexed data types.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsndarraydescriptor/table_data_type.md">var table_data_type: BNNSDataType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">디스크 상의 음성 패키지 크기(바이트 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsndarraydescriptor/data_scale.md">var data_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">캡션 변환 유효성 검사 중 발견된 문제를 수정하기 위한 보정을 설명하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsndarraydescriptor/data_bias.md">var data_bias: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The bias you use to convert integer and unsigned integer data to floating point.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/shape">View on Apple Developer</a>*</span>
