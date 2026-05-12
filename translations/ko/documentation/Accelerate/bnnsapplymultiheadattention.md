---
source_path: "documentation/Accelerate/bnnsapplymultiheadattention.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsapplymultiheadattention"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsapplymultiheadattention:0000:0001">BNNSApplyMultiheadAttention(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsapplymultiheadattention:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsapplymultiheadattention:0002:0001">입력 객체 집합에 멀티헤드 어텐션 필터를 적용하고, 결과를 출력 객체 집합에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsapplymultiheadattention:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattention:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSApplyMultiheadAttention(_ F: BNNSFilter?, _ batch_size: Int, _ query: UnsafeRawPointer, _ query_stride: Int, _ key: UnsafeRawPointer, _ key_stride: Int, _ key_mask: UnsafePointer<BNNSNDArrayDescriptor>?, _ key_mask_stride: Int, _ value: UnsafeRawPointer, _ value_stride: Int, _ output: UnsafeMutableRawPointer, _ output_stride: Int, _ add_to_attention: UnsafePointer<BNNSNDArrayDescriptor>?, _ backprop_cache_size: UnsafeMutablePointer<Int>?, _ backprop_cache: UnsafeMutableRawPointer?, _ workspace_size: UnsafeMutablePointer<Int>?, _ workspace: UnsafeMutableRawPointer?) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>key_mask</code>는 <code>source_length</code>개의 요소를 포함하는 1D 텐서로 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">요소가 true로 평가되면 어텐션 연산에서 key 행렬의 해당 요소를 무시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>F</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>batch_size</code>: 입력-출력 쌍의 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>query</code>: query 입력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>query_stride</code>: query의 배치 스트라이드입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0005"><code>key</code>: key 입력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0006"><code>key_stride</code>: key의 배치 스트라이드입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0007"><code>key_mask</code>: key에서 항목을 무시하기 위해 적용되는 마스크입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0008"><code>key_mask_stride</code>: key mask의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0009"><code>value</code>: value 입력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0010"><code>value_stride</code>: value의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0011"><code>output</code>: output 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0012"><code>output_stride</code>: output의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0013"><code>add_to_attention</code>: attention 계산에서 softmax 이전 mask 함수의 일부로 사용되는 2D 텐서에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0014"><code>backprop_cache_size</code>: 역전파 캐시의 크기(바이트)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0015"><code>backprop_cache</code>: BNNS가 향후 이 함수 호출을 가속화하기 위해 사용할 수 있는 중간 결과를 저장하는 캐시입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0016"><code>workspace_size</code>: 배열 workspace의 크기(바이트)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0017"><code>workspace</code>: 계산 중에 사용되는 임시 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsmhaprojectionparameters.md">struct BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">멀티헤드 어텐션 프로젝션 파라미터를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersmultiheadattention.md">struct BNNSLayerParametersMultiheadAttention</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">멀티헤드 어텐션 레이어의 파라미터를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsfiltercreatelayermultiheadattention(_:_:">func BNNSFilterCreateLayerMultiheadAttention(UnsafePointer&lt;BNNSLayerParametersMultiheadAttention&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">새로운 멀티헤드 어텐션 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsapplymultiheadattentionbackward(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSApplyMultiheadAttentionBackward(BNNSFilter?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSMHAProjectionParameters&gt;?, UnsafeRawPointer?, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeMutablePointer&lt;BNNSMHAProjectionParameters&gt;?, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSMHAProjectionParameters&gt;?, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSMHAProjectionParameters&gt;, Int, UnsafeMutableRawPointer?, UnsafeMutablePointer&lt;Int&gt;?, UnsafeMutableRawPointer?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnscomputenormbackward(_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsapplymultiheadattention(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
