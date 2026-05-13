---
source_path: "documentation/Accelerate/sparseopaquepreconditioner-float.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner-float"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparseopaquepreconditionerfloat:0000:0001">SparseOpaquePreconditioner_Float</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseopaquepreconditionerfloat:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseopaquepreconditionerfloat:0002:0001">A structure that represents a single-precision preconditioner.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseopaquepreconditionerfloat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseopaquepreconditionerfloat:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct SparseOpaquePreconditioner_Float
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-preconditioner:0008:0001">Creating a Preconditioner</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-preconditioner:0009:0001"><a href="sparseopaquepreconditioner_float/init(type:mem:apply:">init(type: SparsePreconditioner_t, mem: UnsafeMutableRawPointer, apply: (UnsafeMutableRawPointer, CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-preconditioner:0010:0001">Creates a new single-precision preconditioner.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-preconditioner-properties:0011:0001">Inspecting Preconditioner Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-preconditioner-properties:0012:0001"><a href="sparseopaquepreconditioner_float/apply.md">var apply: (UnsafeMutableRawPointer, CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) -&gt; Void</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-preconditioner-properties:0013:0001">A function that calculates *Y = PX*, where *P* is the preconditioner.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-preconditioner-properties:0014:0001"><a href="sparseopaquepreconditioner_float/mem.md">var mem: UnsafeMutableRawPointer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-preconditioner-properties:0015:0001">The unaltered memory pointer that passes as the first parameter of the apply function.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-preconditioner-properties:0016:0001"><a href="sparseopaquepreconditioner_float/type.md">var type: SparsePreconditioner_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-preconditioner-properties:0017:0001">The preconditioner type.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avfiletype/appleitt.md">static let appleiTT: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Apple iTT 캡션 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avfiletype/au.md">static let au: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Sun/NeXT 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparseopaquepreconditioner_double.md">struct SparseOpaquePreconditioner_Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">H.264 압축 이미지를 포함한 고효율 이미지 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avfiletype/caf.md">static let caf: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Core Audio 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avfiletype/dcm.md">static let dcm: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Create a preconditioner for the given matrix of complex float values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_float">View on Apple Developer</a>*</span>
