---
source_path: "documentation/Accelerate/sparsemultiplyadd-6qi0p.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsemultiplyadd-6qi0p"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsemultiplyadd:0000:0001">SparseMultiplyAdd(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiplyadd:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiplyadd:0002:0001">Performs <code>y += Ax</code> for complex double values</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiplyadd:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseMultiplyAdd(_ A: SparseMatrix_Complex_Double, _ x: DenseVector_Complex_Double, _ y: DenseVector_Complex_Double)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0001">Parameter <code>A</code>: (input) sparse matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0002">Parameter <code>x</code>: (input) dense vector.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0003">Parameter <code>y</code>: (output) dense vector.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovie/commonmetadata.md">static let id3MetadataKeyAlbumTitle: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">녹음의 제목을 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 파일과 관련된 이미지를 나타내는 키입니다.</span>
