---
source_path: "documentation/Accelerate/bnns/shape/tensor5dlastmajor-stride.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/shape/tensor5dlastmajor-stride"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsshapetensor5dlastmajorstride:0000:0001">BNNS.Shape.tensor5DLastMajor(_:_:_:_:_:stride:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshapetensor5dlastmajorstride:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshapetensor5dlastmajorstride:0002:0001">A constant that represents a shape with a 5D last-major data layout.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshapetensor5dlastmajorstride:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapetensor5dlastmajorstride:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case tensor5DLastMajor(Int, Int, Int, Int, Int, stride: (Int, Int, Int, Int, Int) = (0, 0, 0, 0, 0))
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avmetadatakey/itunesmetadatakeyaccountkind.md">static let iTunesMetadataKeyAccountKind: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">iTunes 계정의 유형을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/shape/matrixcolumnmajor(_:_:stride:">case matrixColumnMajor(Int, Int, stride: (Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A constant that represents a shape with a 2D column-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadatakey/itunesmetadatakeyalbum.md">static let iTunesMetadataAlbum: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A constant that represents a shape with a 2D row-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/shape/matrixfirstmajor(_:_:stride:">case matrixFirstMajor(Int, Int, stride: (Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A constant that represents a shape with a 2D first-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/itunesmetadataappleid.md">static let iTunesMetadataAppleID: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A constant that represents a shape with a 2D last-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/itunesmetadataarranger.md">static let iTunesMetadataArranger: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">편곡자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/itunesmetadataartdirector.md">static let iTunesMetadataArtDirector: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">아트 디렉터의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/itunesmetadataartist.md">static let iTunesMetadataArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">아티스트의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/itunesmetadataartistid.md">static let iTunesMetadataArtistID: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Sun/NeXT 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/itunesmetadataauthor.md">static let avci: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">H.264 압축 이미지를 포함하는 고효율 이미지 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/itunesmetadatabeatspermin.md">static let caf: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">iTunes에서 트랙의 분당 비트 수를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/quicktimeuserdatakeydirector.md">static let iTunesMetadataKeyComposer: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">작곡가 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/quicktimeuserdatakeydisclaimer.md">static let iTunesMetadataKeyConductor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지휘자 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/quicktimeuserdatakeyencodedby.md">static let iTunesMetadataKeyContentRating: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">iTunes의 콘텐츠 등급을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/quicktimeuserdatakeyfullname.md">static let iTunesMetadataKeyCopyright: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">iTunes의 저작권 문구를 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/shape/tensor5dlastmajor(_:_:_:_:_:stride:">View on Apple Developer</a>)*</span>
