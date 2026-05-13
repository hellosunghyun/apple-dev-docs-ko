---
source_path: "documentation/Accelerate/sparseopaquesubfactor_complex_float/factor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparseopaquesubfactor_complex_float/factor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:factor:0000:0001">factor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:factor:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:factor:0002:0001">복소 float의 행렬 인수분해를 나타내는 반투명 타입입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:factor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:factor:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var factor: SparseOpaqueFactorization_Complex_Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>SparseCleanup</code> 함수를 사용해 이러한 개체가 보유한 리소스를 해제합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">개체는 다음과 같은 상태 중 하나일 수 있습니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">기호 인수분해에서 문제가 발생해 유효하지 않습니다. - <code>.symbolicFactorization.status &lt; 0</code>로 표시됩니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">기호 인수분해는 유효했지만 수치 인수분해 초기화에서 실패했습니다. - <code>.symbolicFactorization.status &gt;= 0 &amp;&amp; .status &lt; 0 &amp;&amp; .numericFactorization == NULL</code>로 표시됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0003">기호 인수분해는 앞으로의 호출에서 재사용될 수 있습니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0004">기호 인수분해는 유효했고 인수분해가 할당/초기화되었지만 수치 인수분해가 실패했습니다. 예를 들어 부정형 행렬에 대해 Cholesky 인수분해가 시도된 경우입니다. - <code>.symbolicFactorization.status &gt;= 0 &amp;&amp; .status &lt; 0 &amp;&amp; .numericFactorization not NULL</code>로 표시됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0005">사용자는 수정된 행렬로 이 개체를 <code>SparseRefactor_Double</code>에 전달할 수 있습니다.</span>
4. <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0006">기호 인수분해와 수치 인수분해가 모두 유효합니다. - <code>.status &gt;= 0</code>로 표시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0001">**<code>status</code>**: 인수분해 객체의 상태를 나타냅니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0002">**<code>attributes</code>**: 이 인수분해 객체와 관련된 플래그입니다. 특히 transpose 필드는 개체가 A 또는 A^T의 인수분해인지 여부를 나타냅니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0003">**<code>symbolicFactorization</code>**: 이 Numeric Factorization이 의존하는 Symbolic Factorization입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0004">**<code>userFactorStorage</code>**: 사용자가 이 개체에 대한 저장소를 제공했는지 표시하는 플래그입니다. true인 경우, 사용자가 모든 참조가 끝난 뒤 factor storage를 해제해야 합니다(피벗으로 인해 추가로 할당된 저장소는 <code>SparseCleanup</code>에서 계속 해제됩니다).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0005">**<code>numericFactorization</code>**: 수치 인수분해의 비공개 내부 표현에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0006">**<code>solveWorkspaceRequiredStatic</code>**: <code>SparseSolve</code> 호출에 필요한 작업 공간의 크기는 바이트 단위로 <code>solveWorkspaceRequiredStatic + nrhs * solveWorkspaceRequiredPerRHS</code>입니다. 여기서 <code>nrhs</code>는 우변 벡터의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0007">**<code>solveWorkspaceRequiredPerRHS</code>**: <code>SparseSolve</code> 호출에 필요한 작업 공간의 크기는 바이트 단위로 <code>solveWorkspaceRequiredStatic + nrhs * solveWorkspaceRequiredPerRHS</code>입니다. 여기서 <code>nrhs</code>는 우변 벡터의 개수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparseopaquesubfactor_complex_float/factor">View on Apple Developer</a>*</span>
