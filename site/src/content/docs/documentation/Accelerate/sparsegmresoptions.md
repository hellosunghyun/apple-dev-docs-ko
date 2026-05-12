---
source_path: "documentation/Accelerate/sparsegmresoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsegmresoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsegmresoptions:0000:0001">SparseGMRESOptions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegmresoptions:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegmresoptions:0002:0001">일반화 최소 잔차(GMRES) 방법을 생성하기 위한 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegmresoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegmresoptions:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct SparseGMRESOptions
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>A</code>가 대칭 부정정(symmetric indefinite) 또는 비대칭인 경우 <code>GMRES</code>를 사용해 *Ax = b*를 풉니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">대칭 양의 정부호 시스템에서는 <a href="sparseconjugategradient(_:">@@TOKEN_0@@</a>.md)를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">직사각형 또는 특이 시스템의 경우 <a href="sparselsmr(_:">@@TOKEN_0@@</a>.md)를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0011:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0012:0001"><a href="sparsegmresoptions/init.md">init()</a></span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0012:0002"><a href="sparsegmresoptions/init(reporterror:variant:nvec:maxiterations:atol:rtol:reportstatus:">init(reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?, variant: SparseGMRESVariant_t, nvec: Int32, maxIterations: Int32, atol: Double, rtol: Double, reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0013:0001">지정한 매개변수를 사용해 새 GMRES 옵션 구조체를 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-gmres-options:0014:0001">GMRES 옵션 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0015:0001"><a href="sparsegmresoptions/atol.md">var atol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0016:0001">절대 수렴 허용치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0017:0001"><a href="sparsegmresoptions/maxiterations.md">var maxIterations: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0018:0001">실행할 최대 반복 횟수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0019:0001"><a href="sparsegmresoptions/nvec.md">var nvec: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0020:0001">연산에서 유지되는 직교 벡터 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0021:0001"><a href="sparsegmresoptions/reporterror.md">var reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0022:0001">선택적 오류 보고 루틴입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0023:0001"><a href="sparsegmresoptions/reportstatus.md">var reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0024:0001">상태를 보고하는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0025:0001"><a href="sparsegmresoptions/rtol.md">var rtol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0026:0001">상대 수렴 허용치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0027:0001"><a href="sparsegmresoptions/variant.md">var variant: SparseGMRESVariant_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0028:0001">구현할 GMRES의 정확한 variant를 정의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-gmres-options:0029:0001"><a href="sparsegmresvariant_t.md">struct SparseGMRESVariant_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-gmres-options:0030:0001">구현할 GMRES의 정확한 variant를 정의합니다</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0031:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0032:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0034:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="sparsegmres(">func SparseGMRES() -&gt; SparseIterativeMethod</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">일반화 최소 잔차(GMRES) 메서드를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="sparsegmres(_:">func SparseGMRES(SparseGMRESOptions) -&gt; SparseIterativeMethod</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">지정한 옵션으로 일반화 최소 잔차(GMRES) 메서드를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsegmresoptions">View on Apple Developer</a>*</span>
