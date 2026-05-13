---
source_path: "documentation/Accelerate/sparsematrixstructure/rowindices.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsematrixstructure/rowindices"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rowindices:0000:0001">rowIndices</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rowindices:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rowindices:0002:0001">The row indices of the matrix.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rowindices:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rowindices:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rowIndices: UnsafeMutablePointer<Int32>
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="sparsematrixstructure/attributes.md">var attributes: SparseAttributes_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">The attributes of the matrix, such as whether it’s symmetrical or triangular.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsematrixstructure/blocksize.md">var blockSize: UInt8</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">바운딩 박스의 최대 좌표입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsematrixstructure/columncount.md">var columnCount: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">바운딩 박스의 최소 좌표입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsematrixstructure/columnstarts.md">var columnStarts: UnsafeMutablePointer&lt;Int&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The starting index for each column in the row indices array.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsematrixstructure/rowcount.md">var rowCount: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The number of rows in the matrix.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsematrixstructure/rowindices">View on Apple Developer</a>*</span>
