---
source_path: "documentation/Accelerate/sparsesolve-7zp1d.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-7zp1d"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solve <code>AX=B</code> using the specified iterative method for complex double values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseSolve(_ method: SparseIterativeMethod, _ A: SparseMatrix_Complex_Double, _ B: DenseMatrix_Complex_Double, _ X: DenseMatrix_Complex_Double) -> SparseIterativeStatus_t
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>method</code>: (Input) Iterative method specification, eg return value of <code>SparseConjugateGradient()</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>A</code>: (Input) The matrix <code>A</code> to solve the system for. Only used for multiplication by <code>A</code> or <code>A^T</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>B</code>: The right-hand sides <code>B</code> to solve for. If <code>A</code> has dimension <code>m x n</code>, then <code>B</code> must have dimension <code>m x nrhs</code>, where <code>nrhs</code> is the number of right-hand sides to find solutions for.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>X</code>: On entry, initial guess for solution, on return the solution. If A has dimension <code>m x n</code>, and <code>B</code> has dimension <code>m x nrhs</code>, then <code>X</code> must have dimension <code>n x nrhs</code>. If no good initial estimate is available, user should set the initial guess to be the zero vector.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadataobject/objecttype/humanbody.md">static let quickTimeUserDataKeyAlbum: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">QuickTime에서 앨범 또는 컬렉션의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadatakey/quicktimeuserdatakeyarranger.md">static let quickTimeUserDataKeyArranger: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">영화 파일 콘텐츠의 편곡자 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadatakey/quicktimeuserdatakeyartist.md">static let quickTimeUserDataKeyArtist: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앨범의 아티스트를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadatakey/quicktimeuserdatakeyauthor.md">static let iTunesMetadataKeyAppleID: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Apple ID를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadatakey/quicktimeuserdatakeychapter.md">static let iTunesMetadataKeyArranger: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">편곡자의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadatakey/quicktimeuserdatakeycomment.md">static let iTunesMetadataKeyArtDirector: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">아트 디렉터의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadatakey/quicktimeuserdatakeycomposer.md">static let iTunesMetadataKeyArtist: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">아티스트의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadatakey/quicktimeuserdatakeycopyright.md">static let iTunesMetadataKeyArtistID: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">아티스트의 ID를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadatakey/quicktimeuserdatakeycreationdate.md">static let iTunesMetadataKeyAuthor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">저자의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadatakey/quicktimeuserdatakeycredits.md">static let iTunesMetadataKeyBeatsPerMin: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">iTunes에서 트랙의 분당 박자 수를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/quicktimeuserdatakeydescription.md">static let iTunesMetadataKeyComposer: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">작곡가의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/quicktimeuserdatakeydisclaimer.md">static let iTunesMetadataKeyConductor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지휘자의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/quicktimeuserdatakeyencodedby.md">static let iTunesMetadataKeyContentRating: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">iTunes의 콘텐츠 등급을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/quicktimeuserdatakeyfullname.md">static let iTunesMetadataKeyCopyright: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">iTunes의 저작권 문구를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-4xd4z.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Solve <code>AX=B</code> using the specified iterative method for complex double values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:">View on Apple Developer</a>-7zp1d)*</span>
