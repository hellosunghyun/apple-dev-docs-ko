---
source_path: "documentation/Accelerate/bnnsapplymultiheadattentionbackward.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsapplymultiheadattentionbackward"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsapplymultiheadattentionbackward:0000:0001">BNNSApplyMultiheadAttentionBackward(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsapplymultiheadattentionbackward:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsapplymultiheadattentionbackward:0002:0001">멀티헤드 어텐션 필터의 역방향 연산을 적용해 그래디언트를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsapplymultiheadattentionbackward:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsapplymultiheadattentionbackward:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSApplyMultiheadAttentionBackward(_ F: BNNSFilter?, _ batch_size: Int, _ query: UnsafeRawPointer?, _ query_stride: Int, _ query_param_delta: UnsafeMutablePointer<BNNSMHAProjectionParameters>?, _ key: UnsafeRawPointer?, _ key_stride: Int, _ key_mask: UnsafePointer<BNNSNDArrayDescriptor>?, _ key_mask_stride: Int, _ key_param_delta: UnsafeMutablePointer<BNNSMHAProjectionParameters>?, _ value: UnsafeRawPointer?, _ value_stride: Int, _ value_param_delta: UnsafeMutablePointer<BNNSMHAProjectionParameters>?, _ add_to_attention: UnsafePointer<BNNSNDArrayDescriptor>?, _ key_attn_bias_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ value_attn_bias_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ output: UnsafeRawPointer?, _ output_stride: Int, _ output_param_delta: UnsafeMutablePointer<BNNSMHAProjectionParameters>, _ backprop_cache_size: Int, _ backprop_cache: UnsafeMutableRawPointer?, _ workspace_size: UnsafeMutablePointer<Int>?, _ workspace: UnsafeMutableRawPointer?) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>F</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: 입력-출력 쌍의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>query</code>: query 입력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>query_stride</code>: query의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>query_param_delta</code>: 해당 구성 요소의 델타를 저장하는 데 사용되는 데이터 구조에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>key</code>: key 입력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>key_stride</code>: key의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>key_mask</code>: key에서 항목을 무시하기 위해 적용되는 마스크입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>key_mask_stride</code>: key 마스크의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0010"><code>key_param_delta</code>: 해당 구성 요소의 델타를 저장하는 데 사용되는 데이터 구조에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0011"><code>value</code>: value 입력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0012"><code>value_stride</code>: value의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0013"><code>value_param_delta</code>: 해당 구성 요소의 델타를 저장하는 데 사용되는 데이터 구조에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0014"><code>add_to_attention</code>: 어텐션 계산에서 softmax 이전 마스크 함수에 사용되는 2D 텐서에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0015"><code>key_attn_bias_delta</code>: 해당 구성 요소의 델타를 저장하는 데 사용되는 데이터 구조에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0016"><code>value_attn_bias_delta</code>: 해당 구성 요소의 델타를 저장하는 데 사용되는 데이터 구조에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0017"><code>output</code>: 출력 행렬 데이터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0018"><code>output_stride</code>: output의 배치 stride입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0019"><code>output_param_delta</code>: 해당 구성 요소의 델타를 저장하는 데 사용되는 데이터 구조에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0020"><code>backprop_cache_size</code>: 역전파 캐시 크기(바이트 단위)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0021"><code>backprop_cache</code>: BNNS가 향후 이 함수 호출을 가속화하기 위해 사용할 중간 결과를 저장하는 캐시입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0022"><code>workspace_size</code>: 배열 워크스페이스 크기(바이트 단위)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0023"><code>workspace</code>: 계산 중에 사용되는 스크래치 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsmhaprojectionparameters.md">struct BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">멀티헤드 어텐션 투영 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersmultiheadattention.md">struct BNNSLayerParametersMultiheadAttention</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">멀티헤드 어텐션 레이어 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsfiltercreatelayermultiheadattention(_:_:">func BNNSFilterCreateLayerMultiheadAttention(UnsafePointer&lt;BNNSLayerParametersMultiheadAttention&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">새 멀티헤드 어텐션 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsapplymultiheadattention(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSApplyMultiheadAttention(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeRawPointer, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeRawPointer, Int, UnsafeMutableRawPointer, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;?, UnsafeMutablePointer&lt;Int&gt;?, UnsafeMutableRawPointer?, UnsafeMutablePointer&lt;Int&gt;?, UnsafeMutableRawPointer?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">멀티헤드 어텐션 필터를 입력 객체 집합에 적용하여 출력 객체 집합에 결과를 기록합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsapplymultiheadattentionbackward(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
