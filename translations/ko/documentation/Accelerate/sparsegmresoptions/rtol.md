---
source_path: "documentation/Accelerate/sparsegmresoptions/rtol.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsegmresoptions/rtol"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rtol:0000:0001">rtol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rtol:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rtol:0002:0001">The relative convergence tolerance.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rtol:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rtol:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rtol: Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">실패 원인을 확인하려면 에셋 리더의 <a href="avassetreader/error.md">@@TOKEN_0@@</a> 속성을 조회합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Devices that don’t support constituent device switching return <a href="avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md">@@TOKEN_0@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 키-값 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsegmresoptions/atol.md">var atol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The absolute convergence tolerance.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsegmresoptions/maxiterations.md">var maxIterations: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The maximum number of iterations to perform.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsegmresoptions/nvec.md">var nvec: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The number of orthogonal vectors the operation maintains.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsegmresoptions/reporterror.md">var reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">활성 구성 요소 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsegmresoptions/reportstatus.md">var reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">가상 장치의 활성 기본 구성 요소 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsegmresoptions/variant.md">var variant: SparseGMRESVariant_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">가상 장치가 활성 기본 구성 요소 장치를 전환할 수 있는 시점을 제어하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsegmresvariant_t.md">struct SparseGMRESVariant_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">카메라 전환을 제한할 조건을 정의하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsegmresoptions/rtol">View on Apple Developer</a>*</span>
