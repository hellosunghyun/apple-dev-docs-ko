---
source_path: "documentation/Accelerate/vvatan.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vvatan"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vvatan:0000:0001">vvatan(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvatan:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvatan:0002:0001">Calculates the arctangent of each element in an array of double-precision values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvatan:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvatan:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vvatan(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001">**parameter 1**: The output array, *y*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002">**parameter 2**: The input array, *x*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003">**parameter 3**: The number of elements in the arrays.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">The calculated values are in the range <code>[-pi/2, pi/2]</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0011:0001">If <code>x</code> is <code>+/-0</code>, the result preserves the signed zero.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">If <code>x</code> is <code>+/-inf</code>, the result is <code>+/-pi/2</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/itunesmetadataalbumartist.md">static let iTunesMetadataAlbumArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앨범의 아티스트를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/itunesmetadataappleid.md">static let iTunesMetadataAppleID: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Apple ID를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/itunesmetadataarranger.md">static let iTunesMetadataArranger: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">편곡자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/itunesmetadataartdirector.md">static let iTunesMetadataArtDirector: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">미술 감독의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/itunesmetadataartist.md">static let iTunesMetadataArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">아티스트의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/itunesmetadataartistid.md">static let iTunesMetadataArtistID: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">아티스트의 ID를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/itunesmetadataauthor.md">static let iTunesMetadataAuthor: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">저자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/itunesmetadatabeatspermin.md">static let iTunesMetadataBeatsPerMin: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">iTunes에서 트랙의 분당 박자 수를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadataidentifier/itunesmetadatacomposer.md">static let iTunesMetadataComposer: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">작곡가의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadataidentifier/itunesmetadataconductor.md">static let iTunesMetadataConductor: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지휘자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadataidentifier/itunesmetadatacontentrating.md">static let iTunesMetadataContentRating: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">iTunes의 콘텐츠 등급을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadataidentifier/quicktimemetadatacamerashutterspeedangle.md">static let iTunesMetadataCopyright: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">iTunes에서 저작권 진술을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Double]](vforce/atan2(x:y:)-h54u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Returns the arctangent of each pair of elements in two vectors of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Float]](vforce/atan2(x:y:)-3lku3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the arctangent of each pair of elements in two vectors of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vforce/atan2(x:y:result:">static func atan2&lt;T, U, V&gt;(x: T, y: U, result: inout V)</a>-184b6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Calculates the arctangent of each pair of elements in two vectors of double-precision values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/accelerate/vvatan(_:_:_:">View on Apple Developer</a>)*</span>
