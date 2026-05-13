---
source_path: "documentation/Accelerate/sparseopaquefactorization_float/attributes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_float/attributes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:attributes:0000:0001">attributes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attributes:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attributes:0002:0001">The attributes of a factorization object.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attributes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attributes:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var attributes: SparseAttributes_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avassetreaderoutput.md">@@TOKEN_0@@</a>의 <a href="avassetreaderoutput/copynextsamplebuffer(">@@TOKEN_1@@</a>.md) 메서드가 <code>nil</code>을 반환할 때, 출력이 더 이상 데이터를 읽을 수 없는 이유를 확인하려면 이 속성의 값을 확인합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparseopaquefactorization_float/numericfactorization.md">var numericFactorization: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">중형 방 환경의 음향 특성을 나타내는 리버브 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparseopaquefactorization_float/solveworkspacerequiredperrhs.md">var solveWorkspaceRequiredPerRHS: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 세션이 Now Playing 세션이 될 후보인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparseopaquefactorization_float/solveworkspacerequiredstatic.md">var solveWorkspaceRequiredStatic: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The required size of the static workspace for a call to a sparse solve function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparseopaquefactorization_float/status.md">var status: SparseStatus_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The status of the factorization object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparseopaquefactorization_float/symbolicfactorization.md">var symbolicFactorization: SparseOpaqueSymbolicFactorization</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The symbolic factorization that this numeric factorization depends on.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparseopaquefactorization_float/userfactorstorage.md">var userFactorStorage: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A Boolean value that indicates whether user-provided storage backs this object.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_float/attributes">View on Apple Developer</a>*</span>
