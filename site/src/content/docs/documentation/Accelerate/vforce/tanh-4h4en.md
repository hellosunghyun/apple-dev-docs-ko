---
source_path: "documentation/Accelerate/vforce/tanh-4h4en.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vforce/tanh-4h4en"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tanh:0000:0001">tanh(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tanh:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tanh:0002:0001">Returns the hyperbolic tangent of each element in a vector of single-precision values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tanh:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tanh:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func tanh<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func acosh&lt;U&gt;(U) -&gt; [Double]](vforce/acosh(_:)-1j3qt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">영역의 좌상단 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avpartialasyncproperty/timerange.md">static var timeRange: AVAsyncProperty&lt;Root, CMTimeRange&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">영역의 높이와 너비입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpartialasyncproperty/estimateddatarate.md">static var estimatedDataRate: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">영역의 줄 정렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vforce/acosh(_:result:">static func acosh&lt;U, V&gt;(U, result: inout V)</a>-2r23w.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">영역의 스크롤 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func asinh&lt;U&gt;(U) -&gt; [Double]](vforce/asinh(_:)-ue6b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Apple ID를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadatakey/itunesmetadatakeyarranger.md">static let iTunesMetadataKeyArranger: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">편곡자의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadatakey/itunesmetadatakeyartdirector.md">static let iTunesMetadataKeyArtDirector: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">아트 디렉터의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadatakey/itunesmetadatakeyartist.md">static let iTunesMetadataKeyArtist: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">아티스트의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func atanh&lt;U&gt;(U) -&gt; [Double]](vforce/atanh(_:)-922d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the inverse hyperbolic tangent of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func atanh&lt;U&gt;(U) -&gt; [Float]](vforce/atanh(_:)-2t372.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Returns the inverse hyperbolic tangent of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vforce/atanh(_:result:">static func atanh&lt;U, V&gt;(U, result: inout V)</a>-6waj3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Calculates the inverse hyperbolic tangent of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vforce/atanh(_:result:">static func atanh&lt;U, V&gt;(U, result: inout V)</a>-596wg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Calculates the inverse hyperbolic tangent of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func cosh&lt;U&gt;(U) -&gt; [Double]](vforce/cosh(_:)-4dmhm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Returns the hyperbolic cosine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func cosh&lt;U&gt;(U) -&gt; [Float]](vforce/cosh(_:)-5ax3f.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Returns the hyperbolic cosine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vforce/cosh(_:result:">static func cosh&lt;U, V&gt;(U, result: inout V)</a>-4f7in.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the hyperbolic cosine of each element in a vector of double-precision values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vforce/tanh(_:">View on Apple Developer</a>-4h4en)*</span>
