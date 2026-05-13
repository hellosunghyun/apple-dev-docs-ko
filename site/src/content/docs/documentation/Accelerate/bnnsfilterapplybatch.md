---
source_path: "documentation/Accelerate/bnnsfilterapplybatch.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfilterapplybatch"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsfilterapplybatch:0000:0001">BNNSFilterApplyBatch(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplybatch:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplybatch:0002:0001">필터를 입력 객체 집합에 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplybatch:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybatch:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSFilterApplyBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer, _ in_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001"><code>filter</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002"><code>batch_size</code>: 입력-출력 쌍의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003"><code>in</code>: 입력 객체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0004"><code>in_stride</code>: 입력 객체 간의 간격(값 단위)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0005"><code>out</code>: 출력 객체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0006"><code>out_stride</code>: 출력 객체 간의 간격(값 단위)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsfilterapply(_:_:_:">func BNNSFilterApply(BNNSFilter?, UnsafeRawPointer, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">입력에 필터를 적용하고 결과를 지정된 출력에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsfilterapplytwoinput(_:_:_:_:">func BNNSFilterApplyTwoInput(BNNSFilter?, UnsafeRawPointer, UnsafeRawPointer, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">두 개의 입력에 필터를 적용하고 결과를 지정된 출력에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsfilterapplytwoinputbatch(_:_:_:_:_:_:_:_:">func BNNSFilterApplyTwoInputBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeRawPointer, Int, UnsafeMutableRawPointer, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력 객체 쌍 집합에 필터를 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfilterapplybatch(_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>
