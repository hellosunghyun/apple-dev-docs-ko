---
source_path: "documentation/Accelerate/sparsecgoptions/rtol.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsecgoptions/rtol"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rtol:0000:0001">rtol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rtol:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rtol:0002:0001">상대 수렴 허용 오차입니다.</span>

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

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">*‖ b-Ax ‖₂ &lt; * ‖ b-Ax₀ ‖₂ + <code>atol</code>*는 수렴을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><a href="sparsecgoptions/rtol.md">@@TOKEN_0@@</a>가 <code>0</code>이면 작업은 <code>sqrt(epsilon)</code>의 기본값을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">음수인 경우 작업은 <a href="sparsecgoptions/rtol.md">@@TOKEN_0@@</a>를 <code>0.0</code>으로 처리합니다(기본값을 사용하지 않습니다).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsecgoptions/atol.md">var atol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">절대 수렴 허용 오차입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsecgoptions/maxiterations.md">var maxIterations: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">수행할 최대 반복 횟수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsecgoptions/reporterror.md">var reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">선택적 오류 보고 루틴입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsecgoptions/reportstatus.md">var reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">상태를 보고하는 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsecgoptions/rtol">View on Apple Developer</a>*</span>
