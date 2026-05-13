---
source_path: "documentation/Accelerate/sparsegetinertia-2ykzq.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsegetinertia-2ykzq"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsegetinertia:0000:0001">SparseGetInertia(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegetinertia:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegetinertia:0002:0001">Returns the inertia of a double-precision *LDLᵀ* factorization.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegetinertia:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetinertia:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseGetInertia(_ Factored: SparseOpaqueFactorization_Double, _ num_positive: UnsafeMutablePointer<Int32>, _ num_zero: UnsafeMutablePointer<Int32>, _ num_negative: UnsafeMutablePointer<Int32>) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>0</code> on success; otherwise, a nonzero value on error.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This function returns the number of negative, zero, and positive pivots that the sparse factorization functions, <a href="sparsefactor(_:_:">@@TOKEN_0@@</a>-8gl6j.md) and <a href="sparsefactor(_:_:_:_:">@@TOKEN_1@@</a>-88xmk.md), take during an *LDLᵀ* factorization.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">In some cases — for example, when the original matrix’s eigenvalues are close to zero — the computed numerical inertia may not be an accurate reflection of the true inertia.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">In such cases, the computed numerical inertia is dependent on the <a href="sparsenumericfactoroptions/zerotolerance.md">@@TOKEN_0@@</a> and <a href="sparsenumericfactoroptions/pivottolerance.md">@@TOKEN_1@@</a> values of the <a href="sparsenumericfactoroptions.md">@@TOKEN_2@@</a> structure.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **Important**: This function supports only <a href="sparsefactorizationldlttpp.md">@@TOKEN_0@@</a> factorizations.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>Factored</code>: The <a href="sparsefactorizationldlttpp.md">@@TOKEN_1@@</a> factorization.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>num_positive</code>: On return, the number of positive pivots the sparse factorization functions take during the factorization of <code>Factored</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>num_zero</code>: On return, the number of zero pivots the sparse factorization functions take during the factorization of <code>Factored</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0004"><code>num_negative</code>: On return, the number of negative pivots the sparse factorization functions take during the factorization of <code>Factored</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataobject/objecttype/qr.md">static let id3MetadataKeyAudioSeekPointIndex: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 파일 내 탐색 지점 목록을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadatakeyspace/quicktimemetadata.md">static let id3MetadataKeyBand: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">녹음의 연주자에 대한 추가 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadatakeyspace/quicktimeuserdata.md">static let id3MetadataKeyBeatsPerMinute: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">오디오의 분당 박자 수를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparseupdate_t.md">struct SparseUpdate_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">미디어의 상업 세부 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparseupdatepartialrefactor.md">var SparseUpdatePartialRefactor: SparseUpdate_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">구매 정보를 포함하는 웹페이지를 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">작곡가의 이름을 나타내는 키입니다.</span>
