---
source_path: "documentation/Accelerate/sparsesymbolicfactoroptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesymbolicfactoroptions:0000:0001">SparseSymbolicFactorOptions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesymbolicfactoroptions:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesymbolicfactoroptions:0002:0001">A structure that contains options that affect the symbolic stage of a sparse factorization.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesymbolicfactoroptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesymbolicfactoroptions:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct SparseSymbolicFactorOptions
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="solving-systems-using-direct-methods.md">Solving systems using direct methods</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><a href="sparsesymbolicfactoroptions.md">@@TOKEN_0@@</a> supports the following ordering algorithms:</span>

| <span class="ko-segment" data-segment-id="seg:table:overview:0011:0001"><a href="sparseorderdefault.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:overview:0011:0002">The default ordering (<a href="sparseorderamd.md">@@TOKEN_0@@</a> for symmetric and <a href="sparseordercolamd.md">@@TOKEN_1@@</a> for unsymmetric factorizations).</span> |
| --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:overview:0011:0003"><a href="sparseorderuser.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:overview:0011:0004">The user-supplied ordering, or identity if <a href="sparsesymbolicfactoroptions/order.md">@@TOKEN_0@@</a> is <code>null</code>.</span> |
| <span class="ko-segment" data-segment-id="seg:table:overview:0011:0005"><a href="sparseorderamd.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:overview:0011:0006">Approximate minimum degree (AMD) ordering. There’s a large overhead cost if you use it for QR-based factorization due to explicit formation of *AᵀA*.</span> |
| <span class="ko-segment" data-segment-id="seg:table:overview:0011:0007"><a href="sparseordermetis.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:overview:0011:0008">METIS nested dissection ordering. There’s a large overhead cost if you use it for QR-based factorization due to explicit formation of *AᵀA*.</span> |
| <span class="ko-segment" data-segment-id="seg:table:overview:0011:0009"><a href="sparseordercolamd.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:overview:0011:0010">The column AMD ordering for *AᵀA*. This isn’t valid for symmetric factorizations (use <a href="sparseorderamd.md">@@TOKEN_0@@</a> instead).</span> |

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-symbolic-factor-options-structure:0013:0001">심볼릭 인수분해 옵션 구조체 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-symbolic-factor-options-structure:0014:0001"><a href="sparsesymbolicfactoroptions/init(control:ordermethod:order:ignorerowsandcolumns:malloc:free:reporterror:">init(control: SparseControl_t, orderMethod: SparseOrder_t, order: UnsafeMutablePointer&lt;Int32&gt;?, ignoreRowsAndColumns: UnsafeMutablePointer&lt;Int32&gt;?, malloc: (Int) -&gt; UnsafeMutableRawPointer?, free: (UnsafeMutableRawPointer?) -&gt; Void, reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-symbolic-factor-options-structure:0015:0001">희소 인수분해의 심볼릭 단계에 영향을 주는 옵션을 포함하는 새 구조체를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-symbolic-factor-options:0016:0001">심볼릭 인수분해 옵션 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0017:0001"><a href="sparsesymbolicfactoroptions/control.md">var control: SparseControl_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0018:0001">계산을 제어하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0019:0001"><a href="sparsecontrol_t.md">struct SparseControl_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0020:0001">계산을 제어하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0021:0001"><a href="sparsesymbolicfactoroptions/ordermethod.md">var orderMethod: SparseOrder_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0022:0001">순서 지정 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0023:0001"><a href="sparsesymbolicfactoroptions/order.md">var order: UnsafeMutablePointer&lt;Int32&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0024:0001">순서를 지정하기 위해 사용자가 제공한 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0025:0001"><a href="sparseorder_t.md">struct SparseOrder_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0026:0001">사용할 순서 지정 알고리즘을 정의하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0027:0001"><a href="sparsesymbolicfactoroptions/ignorerowsandcolumns.md">var ignoreRowsAndColumns: UnsafeMutablePointer&lt;Int32&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0028:0001">무시할 행 및 열 인덱스를 포함하는 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0029:0001"><a href="sparsesymbolicfactoroptions/malloc.md">var malloc: (Int) -&gt; UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0030:0001">필요한 저장소를 할당하는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0031:0001"><a href="sparsesymbolicfactoroptions/free.md">var free: (UnsafeMutableRawPointer?) -&gt; Void</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0032:0001">할당된 저장소를 해제하는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-symbolic-factor-options:0033:0001"><a href="sparsesymbolicfactoroptions/reporterror.md">var reportError: ((UnsafePointer&lt;CChar&gt;) -&gt; Void)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-symbolic-factor-options:0034:0001">매개변수 오류를 보고하는 함수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0035:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0036:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0038:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="sparseorder_t.md">struct SparseOrder_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">사용할 순서 지정 알고리즘을 정의하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="sparsefactorization_t.md">struct SparseFactorization_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">인수분해 유형을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="sparsenumericfactoroptions.md">struct SparseNumericFactorOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">희소 인수분해의 수치 단계에 영향을 주는 옵션을 포함하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions">View on Apple Developer</a>*</span>
