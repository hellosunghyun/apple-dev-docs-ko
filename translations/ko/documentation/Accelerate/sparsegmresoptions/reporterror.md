---
source_path: "documentation/Accelerate/sparsegmresoptions/reporterror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsegmresoptions/reporterror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:reporterror:0000:0001">reportError</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reporterror:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reporterror:0002:0001">An optional error-reporting routine.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reporterror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reporterror:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var reportError: ((UnsafePointer<CChar>) -> Void)?
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="sparsegmresoptions/atol.md">var atol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">The absolute convergence tolerance.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsegmresoptions/maxiterations.md">var maxIterations: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 출력의 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsegmresoptions/nvec.md">var nvec: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙이 참조하는 미디어 샘플의 형식 설명자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsegmresoptions/reportstatus.md">var reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/replaceformatdescription(_:with:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsegmresoptions/rtol.md">var rtol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/setdelegate(_:queue:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsegmresoptions/variant.md">var variant: SparseGMRESVariant_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 자산의 특정 시간 범위 내 모든 트랙을 composition에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsegmresvariant_t.md">struct SparseGMRESVariant_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecomposition/insertemptytimerange(_:">Apple Developer에서 보기</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsegmresoptions/reporterror">View on Apple Developer</a>*</span>
