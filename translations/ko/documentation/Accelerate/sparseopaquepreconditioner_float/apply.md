---
source_path: "documentation/Accelerate/sparseopaquepreconditioner_float/apply.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_float/apply"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:apply:0000:0001">apply</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apply:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apply:0002:0001">*P*가 전처리자일 때 *Y = PX*를 계산하는 함수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apply:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:apply:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var apply: (UnsafeMutableRawPointer, CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) -> Void
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 *A⁻¹*에 대한 근사값을 포함합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparseopaquepreconditioner_float/mem.md">var mem: UnsafeMutableRawPointer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">apply 함수의 첫 번째 매개변수로 전달되는 변경되지 않은 메모리 포인터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparseopaquepreconditioner_float/type.md">var type: SparsePreconditioner_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">전처리자 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_float/apply">View on Apple Developer</a>*</span>
