---
source_path: "documentation/Accelerate/bnnslayerparameterstensorcontraction/alpha.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/alpha"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:alpha:0000:0001">alpha</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alpha:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alpha:0002:0001">작업이 결과에 적용하는 스케일링입니다.</span>

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

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparameterstensorcontraction/operation.md">var operation: UnsafePointer&lt;CChar&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">작업을 설명하는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterstensorcontraction/beta.md">var beta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">작업이 결과에 더하기 전에 기존 출력값을 스케일링할 때 사용하는 값으로, <code>0.0</code> 또는 <code>1.0</code>만 허용됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterstensorcontraction/ia_desc.md">var iA_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력 행렬 *A*의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparameterstensorcontraction/ib_desc.md">var iB_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력 행렬 *B*의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterstensorcontraction/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력의 디스크립터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/alpha">View on Apple Developer</a>*</span>
