---
source_path: "documentation/Accelerate/sparse-index.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-index"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparseindex:0000:0001">sparse_index</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseindex:0001:0001">**Framework**: Accelerate **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseindex:0002:0001">인덱스 타입입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseindex:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseindex:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias sparse_index = Int64
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">희소 벡터의 인덱스 배열에 있는 항목을 포함해 모든 인덱스는 양수입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: Apple은 Accelerate 프레임워크에서 BLAS 및 LAPACK 라이브러리를 제공하여 LAPACK 3.9.1과 호환되도록 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 이 라이브러리는 LAPACK 3.12.0과 호환됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="sparse_dimension.md">typealias sparse_dimension</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">차원 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="sparse_matrix_double.md">typealias sparse_matrix_double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Double용 희소 행렬 불투명 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_matrix_float.md">typealias sparse_matrix_float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Float용 희소 행렬 불투명 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_status.md">struct sparse_status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">연산 상태를 반영하는 타입입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_index">View on Apple Developer</a>*</span>
