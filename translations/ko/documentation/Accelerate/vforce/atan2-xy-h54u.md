---
source_path: "documentation/Accelerate/vforce/atan2-xy-h54u.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vforce/atan2-xy-h54u"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:atan2xy:0000:0001">atan2(x:y:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:atan2xy:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:atan2xy:0002:0001">Returns the arctangent of each pair of elements in two vectors of double-precision values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:atan2xy:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:atan2xy:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func atan2<U, V>(x: U, y: V) -> [Double] where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>asset</code>: 비디오 컴포지션을 생성할 에셋입니다. 이 메서드를 호출하기 전에 에셋의 <a href="avasset/duration.md">@@TOKEN_1@@</a> 및 <a href="avasset/tracks.md">@@TOKEN_2@@</a> 속성을 로드합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>prototypeInstruction</code>: 프로토타입으로 사용할 비디오 컴포지션 지시문입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:completionhandler:">class func videoComposition(withPropertiesOf: AVAsset, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 에셋의 비디오 트랙을 표시하도록 구성된 새 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:prototypeinstruction:completionhandler:">func mutableTrack(compatibleWith: AVAssetTrack) -&gt; AVMutableMovieTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">임의의 시간 범위를 삽입할 수 있는 가변 movie의 트랙에 대한 참조를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func addMutableTracksCopyingSettings(from: [AVAssetTrack], options: [String : Any]?) -&gt; [AVMutableMovieTrack]](avmutablevideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">대상 movie에 하나 이상의 빈 트랙을 추가하고 소스 트랙의 트랙 설정을 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablevideocomposition/init(propertiesof:">func removeTrack(AVMovieTrack)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 트랙을 대상 movie에서 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func asin&lt;U&gt;(U) -&gt; [Double]](vforce/asin(_:)-454ds.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns the arcsine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func asin&lt;U&gt;(U) -&gt; [Float]](vforce/asin(_:)-8vvt1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns the arcsine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vforce/asin(_:result:">static func asin&lt;U, V&gt;(U, result: inout V)</a>-94jmy.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Calculates the arcsine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vforce/asin(_:result:">static func asin&lt;U, V&gt;(U, result: inout V)</a>-ooti.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Calculates the arcsine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func atan&lt;U&gt;(U) -&gt; [Double]](vforce/atan(_:)-1ghr3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Returns the arctangent of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func atan&lt;U&gt;(U) -&gt; [Float]](vforce/atan(_:)-5ejvk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Returns the arctangent of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vforce/atan(_:result:">static func atan&lt;U, V&gt;(U, result: inout V)</a>-691jp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Calculates the arctangent of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vforce/atan(_:result:">static func atan&lt;U, V&gt;(U, result: inout V)</a>-6bb8n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Calculates the arctangent of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Float]](vforce/atan2(x:y:)-3lku3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Returns the arctangent of each pair of elements in two vectors of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vforce/atan2(x:y:result:">static func atan2&lt;T, U, V&gt;(x: T, y: U, result: inout V)</a>-184b6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the arctangent of each pair of elements in two vectors of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vforce/atan2(x:y:result:">static func atan2&lt;T, U, V&gt;(x: T, y: U, result: inout V)</a>-6j6xb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the arctangent of each pair of elements in two vectors of single-precision values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/vforce/atan2(x:y:">View on Apple Developer</a>-h54u)*</span>
