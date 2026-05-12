---
source_path: "documentation/Accelerate/bnnslayerparametersmultiheadattention/value-attn-bias.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention/value-attn-bias"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:valueattnbias:0000:0001">value_attn_bias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:valueattnbias:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:valueattnbias:0002:0001">어텐션 계산의 일부로 더해지는 <code>d_value</code> x <code>num_heads</code> 2D 텐서입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:valueattnbias:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:valueattnbias:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var value_attn_bias: BNNSNDArrayDescriptor
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparametersmultiheadattention/query.md">var query: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">쿼리 관련 입력 파라미터와 투영을 설명하는 투영 파라미터 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersmultiheadattention/key.md">var key: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">키 관련 입력 파라미터와 투영을 설명하는 투영 파라미터 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersmultiheadattention/value.md">var value: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">값 관련 입력 파라미터와 투영을 설명하는 투영 파라미터 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersmultiheadattention/add_zero_attn.md">var add_zero_attn: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">참이면 계산에 투영된 *K*와 *V* 입력에 0으로 이루어진 행을 추가하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparametersmultiheadattention/key_attn_bias.md">var key_attn_bias: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">어텐션 계산의 일부로 값에 더해지는 2D 텐서입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparametersmultiheadattention/output.md">var output: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">출력 텐서와 관련된 투영을 설명하는 투영 파라미터 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparametersmultiheadattention/dropout.md">var dropout: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">드롭아웃 계층의 난수 생성기 시드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparametersmultiheadattention/seed.md">var seed: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">드롭아웃 계층의 무작위 시드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention/value_attn_bias">View on Apple Developer</a>*</span>
