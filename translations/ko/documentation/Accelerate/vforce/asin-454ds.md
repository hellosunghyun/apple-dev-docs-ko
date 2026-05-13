---
source_path: "documentation/Accelerate/vforce/asin-454ds.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vforce/asin-454ds"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:asin:0000:0001">asin(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:asin:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:asin:0002:0001">Returns the arcsine of each element in a vector of double-precision values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:asin:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:asin:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func asin<U>(_ vector: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avmetadatakey/metadata3gpuserdatakeyalbumandtrack.md">static let metadata3GPUserDataKeyAlbumAndTrack: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">앨범 및 트랙 제목의 텍스트를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadatakey/metadata3gpuserdatakeyauthor.md">static let metadata3GPUserDataKeyAuthor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">미디어의 작성자를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadatakey/metadata3gpuserdatakeycollection.md">static let metadata3GPUserDataKeyCollection: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">미디어의 컬렉션 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadatakey/metadata3gpuserdatakeycopyright.md">static let metadata3GPUserDataKeyCopyright: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">저작권 문구를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadatakey/metadata3gpuserdatakeydescription.md">static let metadata3GPUserDataKeyDescription: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">미디어의 설명을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vforce/asin(_:result:">static func asin&lt;U, V&gt;(U, result: inout V)</a>-94jmy.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Calculates the arcsine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vforce/asin(_:result:">static func asin&lt;U, V&gt;(U, result: inout V)</a>-ooti.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Calculates the arcsine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func atan&lt;U&gt;(U) -&gt; [Double]](vforce/atan(_:)-1ghr3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns the arctangent of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func atan&lt;U&gt;(U) -&gt; [Float]](vforce/atan(_:)-5ejvk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the arctangent of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vforce/atan(_:result:">static func atan&lt;U, V&gt;(U, result: inout V)</a>-691jp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Calculates the arctangent of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vforce/atan(_:result:">static func atan&lt;U, V&gt;(U, result: inout V)</a>-6bb8n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Calculates the arctangent of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Double]](vforce/atan2(x:y:)-h54u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Returns the arctangent of each pair of elements in two vectors of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Float]](vforce/atan2(x:y:)-3lku3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Returns the arctangent of each pair of elements in two vectors of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vforce/atan2(x:y:result:">static func atan2&lt;T, U, V&gt;(x: T, y: U, result: inout V)</a>-184b6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Calculates the arctangent of each pair of elements in two vectors of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vforce/atan2(x:y:result:">static func atan2&lt;T, U, V&gt;(x: T, y: U, result: inout V)</a>-6j6xb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the arctangent of each pair of elements in two vectors of single-precision values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vforce/asin(_:">View on Apple Developer</a>-454ds)*</span>
