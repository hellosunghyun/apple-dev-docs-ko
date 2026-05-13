---
source_path: "documentation/Accelerate/bnnsfilterapplytwoinputbatch.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfilterapplytwoinputbatch"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsfilterapplytwoinputbatch:0000:0001">BNNSFilterApplyTwoInputBatch(_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplytwoinputbatch:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplytwoinputbatch:0002:0001">입력 객체 쌍 집합에 필터를 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplytwoinputbatch:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplytwoinputbatch:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSFilterApplyTwoInputBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ inA: UnsafeRawPointer, _ inA_stride: Int, _ inB: UnsafeRawPointer, _ inB_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>filter</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: 입력-출력 쌍의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>inA</code>: 첫 번째 입력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>inA_stride</code>: 첫 번째 입력 객체 사이의 값 단위 증가량입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>inB</code>: 두 번째 입력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>inB_stride</code>: 두 번째 입력 객체 사이의 값 단위 증가량입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>out</code>: 출력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>out_stride</code>: 출력 객체 사이의 값 단위 증가량입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsfilterapply(_:_:_:">func BNNSFilterApply(BNNSFilter?, UnsafeRawPointer, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력에 필터를 적용하고 결과를 지정된 출력에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsfilterapplybatch(_:_:_:_:_:_:">func BNNSFilterApplyBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeMutableRawPointer, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력 객체 집합에 필터를 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsfilterapplytwoinput(_:_:_:_:">func BNNSFilterApplyTwoInput(BNNSFilter?, UnsafeRawPointer, UnsafeRawPointer, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 개의 입력에 필터를 적용하고 결과를 지정된 출력에 기록합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfilterapplytwoinputbatch(_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*)</span>
