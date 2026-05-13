---
source_path: "documentation/Accelerate/sparselsmroptions/lambda.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparselsmroptions/lambda"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lambda:0000:0001">lambda</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lambda:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lambda:0002:0001">The damping parameter lambda for regularized least squares.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lambda:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:lambda:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var lambda: Double
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="sparselsmroptions/atol.md">var atol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparselsmroptions/btol.md">var btol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Picture in Picture 재생이 시작되기 전임을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparselsmroptions/conditionlimit.md">var conditionLimit: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Picture in Picture 재생이 시작되었음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparselsmroptions/convergencetest.md">var convergenceTest: SparseLSMRConvergenceTest_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Picture in Picture 재생이 곧 중지될 것임을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparselsmrconvergencetest_t.md">struct SparseLSMRConvergenceTest_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Picture in Picture 재생이 중지되었음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparselsmroptions/maxiterations.md">var maxIterations: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Picture in Picture 재생이 중지되기 전에 사용자 인터페이스를 복원하도록 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparselsmroptions/nvec.md">var nvec: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Picture in Picture가 시작될 때 플레이어 뷰를 미니어처화할지 delegate에 문의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparselsmroptions/reporterror.md">var reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate/playerview(_:failedtostartpictureinpicturewitherror:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparselsmroptions/reportstatus.md">var reportStatus: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">An optional status-reporting routine.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparselsmroptions/rtol.md">var rtol: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The relative convergence tolerance (default test only).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparselsmroptions/lambda">View on Apple Developer</a>*</span>
