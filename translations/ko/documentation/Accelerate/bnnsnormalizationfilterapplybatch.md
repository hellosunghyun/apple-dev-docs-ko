---
source_path: "documentation/Accelerate/bnnsnormalizationfilterapplybatch.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsnormalizationfilterapplybatch"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsnormalizationfilterapplybatch:0000:0001">BNNSNormalizationFilterApplyBatch(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsnormalizationfilterapplybatch:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsnormalizationfilterapplybatch:0002:0001">입력 객체 집합에 정규화 필터를 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsnormalizationfilterapplybatch:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsnormalizationfilterapplybatch:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSNormalizationFilterApplyBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer, _ in_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int, _ training: Bool) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>filter</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: 입력-출력 쌍의 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>in</code>: 입력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>in_stride</code>: 입력 간 값 단위의 증분입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>out</code>: 출력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>out_stride</code>: 출력 간 값 단위의 증분입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>training</code>: 학습 중에는 <code>true</code>, 추론 중에는 <code>false</code>로 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/normalizationlayer.md">class NormalizationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">정규화 필터를 래핑하고 디이니셜라이제이션을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersnormalization.md">struct BNNSLayerParametersNormalization</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">정규화 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsfiltercreatelayernormalization(_:_:_:">func BNNSFilterCreateLayerNormalization(BNNSFilterType, UnsafePointer&lt;BNNSLayerParametersNormalization&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">새 정규화 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsnormalizationfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:">func BNNSNormalizationFilterApplyBackwardBatch(BNNSFilter?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">정규화 필터 역방향을 적용하여 그래디언트를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsnormalizationfilterapplybatch(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
