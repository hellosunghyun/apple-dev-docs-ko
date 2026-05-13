---
source_path: "documentation/Accelerate/sparselsmroptions/atol.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparselsmroptions/atol"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:atol:0000:0001">atol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:atol:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:atol:0002:0001">The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:atol:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atol:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var atol: Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This method plays the available media data at the specified <code>rate</code> regardless of whether there is sufficient media buffered to ensure smooth playback.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If media data exists in the playback buffer, calling this method changes the player’s playback rate to the specified <code>rate</code> and its <a href="avplayer/timecontrolstatus-swift.property.md">@@TOKEN_1@@</a> to a value of <a href="avplayer/timecontrolstatus-swift.enum/playing.md">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparselsmroptions/btol.md">var btol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">두 트랙 간에 특정 유형의 트랙 연결을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparselsmroptions/conditionlimit.md">var conditionLimit: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">두 트랙 간에 특정 유형의 트랙 연결을 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparselsmroptions/convergencetest.md">var convergenceTest: SparseLSMRConvergenceTest_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 시간 범위 동안 적용할 불투명도 램프를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparselsmrconvergencetest_t.md">struct SparseLSMRConvergenceTest_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">범위에 대해 텍스트 결합을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparselsmroptions/lambda.md">var lambda: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">범위에서 텍스트 결합을 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparselsmroptions/maxiterations.md">var maxIterations: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecaption/removeruby(in:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparselsmroptions/nvec.md">var nvec: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The number of vectors to use for local reorthogonalization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparselsmroptions/reporterror.md">var reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">An optional error-reporting routine.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparselsmroptions/reportstatus.md">var reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">An optional status-reporting routine.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparselsmroptions/rtol.md">var rtol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The relative convergence tolerance (default test only).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparselsmroptions/atol">View on Apple Developer</a>*</span>
