---
source_path: "documentation/Accelerate/sparsematrix_complex_double/structure.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsematrix_complex_double/structure"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:structure:0000:0001">structure</span>

<span class="ko-segment" data-segment-id="seg:paragraph:structure:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:structure:0002:0001">A type representing the sparsity structure of a sparse complex matrix.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:structure:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:structure:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var structure: SparseMatrixStructureComplex
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if switching between multiple output sources isn’t currently possible.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">ARKit은 LiDAR 스캐너를 사용해 이 거리를 샘플링하고, 그 결과를 세션의 <a href="arsession/currentframe.md">@@TOKEN_0@@</a>에 있는 <a href="arframe/smoothedscenedepth.md">@@TOKEN_1@@</a> property로 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">CSC format is used to store the locations of these blocks.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">For each block column, a list of block row indices for non-zero blocks are stored, and the lists for each column are stored contiguously one after the other.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">Hence the row indices for column j are given by rowIndices<code>[columnStarts[j]:columnStarts[j+1]]</code>, where <code>columnStarts[]</code> is storing the location of the first index in each column.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/8b8b374954d1be372f7535eaf283fcd0/media-2929213%402x.png">None</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">ARKit은 LiDAR 지원 기기에서만 scene depth를 지원하므로 scene depth를 활성화하려고 시도하기 전에 <a href="arconfiguration/supportsframesemantics(_:">@@TOKEN_0@@</a>.md)로 기기 지원 여부를 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0001">**<code>rowCount</code>**: Number of (block) rows in matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0002">**<code>columnCount</code>**: Number of (block) columns in matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0003">**<code>columnStarts</code>**: Specifies where each (block) column starts in rowIndices array.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0004">**<code>rowIndices</code>**: Specifies the (block) row indices of the matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0005">**<code>attributes</code>**: The attribute meta-data for the matrix, for example whether the matrix is symmetric (Hermitian) and only half the entries are stored.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0006">**<code>blockSize</code>**: The block size of the matrix.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsematrix_complex_double/structure">View on Apple Developer</a>*</span>
