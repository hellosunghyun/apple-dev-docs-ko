---
source_path: "documentation/Accelerate/bnnsfusedfilterapplymultiinputbatch.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfusedfilterapplymultiinputbatch"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsfusedfilterapplymultiinputbatch:0000:0001">BNNSFusedFilterApplyMultiInputBatch(_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfusedfilterapplymultiinputbatch:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfusedfilterapplymultiinputbatch:0002:0001">다중 입력 fused filter를 입력 객체 집합에 적용하여 결과를 출력 객체 집합에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfusedfilterapplymultiinputbatch:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfusedfilterapplymultiinputbatch:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSFusedFilterApplyMultiInputBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ number_of_inputs: Int, _ in: UnsafeMutablePointer<UnsafeRawPointer>, _ in_stride: UnsafePointer<Int>, _ out: UnsafeMutableRawPointer, _ out_stride: Int, _ training: Bool) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>filter</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: 입력-출력 쌍의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>number_of_inputs</code>: 다중 입력 filter의 입력 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>in</code>: 입력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>in_stride</code>: 입력 간 값 단위의 증가량입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>out</code>: 출력 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>out_stride</code>: 출력 간 값 단위의 증가량입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>training</code>: 학습 중에 <code>true</code>로 설정하는 불리언 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="fusablelayerparameters.md">protocol FusableLayerParameters</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="bnns/fusedparameterslayer.md">class FusedParametersLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">퓨즈된 레이어를 래핑하고 해당 레이어의 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/fusedconvolutionnormalizationlayer.md">class FusedConvolutionNormalizationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">퓨즈된 합성곱 정규화 레이어를 래핑하고 해당 레이어의 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/fusedfullyconnectednormalizationlayer.md">class FusedFullyConnectedNormalizationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">퓨즈된 완전 연결 정규화 레이어를 래핑하고 해당 레이어의 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsfiltertype.md">struct BNNSFilterType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">퓨즈 레이어의 구성 필터를 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsfiltercreatefusedlayer(_:_:_:_:">func BNNSFilterCreateFusedLayer(Int, UnsafePointer&lt;BNNSFilterType&gt;, UnsafeMutablePointer&lt;UnsafeRawPointer&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">새 fused layer를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsfusedfilterapplybatch(_:_:_:_:_:_:_:">func BNNSFusedFilterApplyBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeMutableRawPointer, Int, Bool) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">fused filter를 입력 객체 집합에 적용하고, 결과를 출력 객체 집합에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsfusedfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSFusedFilterApplyBackwardBatch(BNNSFilter?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력 그래디언트를 생성하기 위해 fused filter backward를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsfusedfilterapplybackwardmultiinputbatch(_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSFusedFilterApplyBackwardMultiInputBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer?&gt;?, UnsafePointer&lt;Int&gt;?, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafePointer&lt;Int&gt;, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력 그래디언트를 생성하기 위해 multiple-input fused filter backward를 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfusedfilterapplymultiinputbatch(_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
