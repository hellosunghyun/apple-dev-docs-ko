---
source_path: "documentation/Accelerate/bnnslayerparametersbroadcastmatmul/alpha.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersbroadcastmatmul/alpha"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:alpha:0000:0001">alpha</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alpha:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alpha:0002:0001">결과를 스케일링하는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alpha:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alpha:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var alpha: Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparametersbroadcastmatmul/beta.md">var beta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">연산이 결과에 기존 출력을 더하기 전에 기존 출력을 스케일링하는 데 사용하는 값입니다. 값은 0.0 또는 1.0만 가능합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersbroadcastmatmul/transa.md">var transA: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">행렬 *A*의 마지막 두 차원을 전치(transpose)하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersbroadcastmatmul/transb.md">var transB: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">행렬 *B*의 마지막 두 차원을 전치(transpose)하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersbroadcastmatmul/quadratic.md">var quadratic: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">연산이 행렬 *A*를 자기 자신과 곱할지 여부를 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparametersbroadcastmatmul/a_is_weights.md">var a_is_weights: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">행렬 *A*를 가중치로 처리할지 여부를 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparametersbroadcastmatmul/b_is_weights.md">var b_is_weights: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">행렬 *B*를 가중치로 처리할지 여부를 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparametersbroadcastmatmul/ia_desc.md">var iA_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">행렬 *A*의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparametersbroadcastmatmul/ib_desc.md">var iB_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">행렬 *B*의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparametersbroadcastmatmul/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">출력의 디스크립터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersbroadcastmatmul/alpha">View on Apple Developer</a>*</span>
