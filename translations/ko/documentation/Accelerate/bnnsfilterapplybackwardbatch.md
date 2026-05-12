---
source_path: "documentation/Accelerate/bnnsfilterapplybackwardbatch.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfilterapplybackwardbatch"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsfilterapplybackwardbatch:0000:0001">BNNSFilterApplyBackwardBatch(_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplybackwardbatch:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplybackwardbatch:0002:0001">필터를 역방향으로 적용해 입력 델타, 가중치 델타 및 바이어스 델타를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfilterapplybackwardbatch:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfilterapplybackwardbatch:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSFilterApplyBackwardBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer?, _ in_stride: Int, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ in_delta_stride: Int, _ out: UnsafeRawPointer?, _ out_stride: Int, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ out_delta_stride: Int, _ weights_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ bias_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>filter</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: 입력-출력 쌍의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>in</code>: 입력 객체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>in_stride</code>: 입력 객체 간 값 단위 간격입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>in_delta</code>: 입력 델타의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>in_delta_stride</code>: 입력 델타 객체 간 값 단위 간격입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>out</code>: 출력 객체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>out_stride</code>: 출력 객체 간 값 단위 간격입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>out_delta</code>: 출력 델타의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0010"><code>out_delta_stride</code>: 출력 델타 객체 간 값 단위 간격입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0011"><code>weights_delta</code>: 가중치 델타의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0012"><code>bias_delta</code>: 바이어스 델타의 디스크립터입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsfilterapplybackwardtwoinputbatch(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSFilterApplyBackwardTwoInputBatch(BNNSFilter?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeRawPointer?, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">필터를 역방향으로 적용해 입력 델타, 가중치 델타 및 바이어스 델타를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>
