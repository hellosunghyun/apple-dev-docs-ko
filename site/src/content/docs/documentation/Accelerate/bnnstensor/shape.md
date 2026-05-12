---
source_path: "documentation/Accelerate/bnnstensor/shape.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnstensor/shape"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:shape:0000:0001">shape</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shape:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shape:0002:0001">텍스트어(부호 없는 정수) 요소의 튜플로, 텐서의 크기를 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shape:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:shape:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var shape: (Int, Int, Int, Int, Int, Int, Int, Int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">첫 번째 <a href="bnnstensor/rank.md">@@TOKEN_0@@</a> 요소는 각 차원의 크기를 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnstensor/data_type.md">var data_type: BNNSDataType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">텐서의 데이터 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnstensor/rank.md">var rank: UInt8</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">텐서의 rank입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnstensor/stride.md">var stride: (Int, Int, Int, Int, Int, Int, Int, Int)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">텐서의 stride를 지정하는 부호 없는 정수 튜플입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnstensor/data.md">var data: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">텐서 값을 포함하는 메모리를 가리키는 포인터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnstensor/data_size_in_bytes.md">var data_size_in_bytes: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">텐서 값을 포함하는 메모리의 크기(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnstensor/name.md">var name: UnsafePointer&lt;CChar&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">디버깅에 사용할 수 있는 선택적 텐서 이름입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnstensor/shape">View on Apple Developer</a>*</span>
