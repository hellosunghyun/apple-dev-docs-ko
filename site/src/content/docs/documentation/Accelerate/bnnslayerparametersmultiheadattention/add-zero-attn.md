---
source_path: "documentation/Accelerate/bnnslayerparametersmultiheadattention/add-zero-attn.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention/add-zero-attn"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addzeroattn:0000:0001">add_zero_attn</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addzeroattn:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addzeroattn:0002:0001">A Boolean value that, if true, adds a row of zeroes to the projected *K* and *V* inputs to the calculation.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addzeroattn:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addzeroattn:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var add_zero_attn: Bool
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparametersmultiheadattention/query.md">var query: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A projection parameter structure that describes the query-related input parameters and projection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersmultiheadattention/key.md">var key: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A projection parameter structure that describes the key-related input parameters and projection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersmultiheadattention/value.md">var value: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A projection parameter structure that describes the value-related input parameters and projection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersmultiheadattention/key_attn_bias.md">var key_attn_bias: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A 2D tensor that’s added to the value as part of the attention calculation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparametersmultiheadattention/value_attn_bias.md">var value_attn_bias: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">동영상을 네트워크 사용에 맞게 최적화할지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparametersmultiheadattention/output.md">var output: BNNSMHAProjectionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A projection parameter structure that describes the output tensor and associated projection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparametersmultiheadattention/dropout.md">var dropout: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡처 출력이 자동 레드아이 감소를 현재 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparametersmultiheadattention/seed.md">var seed: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A random seed for the dropout layer.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention/add_zero_attn">View on Apple Developer</a>*</span>
