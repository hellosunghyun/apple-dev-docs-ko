---
source_path: "documentation/Accelerate/vdsp/multiply-bycountuseconjugateresult-4idx8.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/multiply-bycountuseconjugateresult-4idx8"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:multiplybycountuseconjugateresult:0000:0001">multiply(_:by:count:useConjugate:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplybycountuseconjugateresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplybycountuseconjugateresult:0002:0001">Calculates the product of two complex single-precision vectors, optionally conjugating one of them.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplybycountuseconjugateresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplybycountuseconjugateresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func multiply(_ splitComplexA: DSPSplitComplex, by splitComplexB: DSPSplitComplex, count: Int, useConjugate: Bool, result: inout DSPSplitComplex)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func multiply&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/multiply(_:_:)-9dxnc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Returns the double-precision element-wise product of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosequencer/infodictionarykey/artist.md">static let artist: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Returns the double-precision element-wise product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func multiply&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/multiply(_:_:)-993yp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 환경 노드의 출력 채널 레이아웃에 따라 외부 스피커 오디오 출력을 렌더링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static func multiply&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/multiply(_:_:)-9zgw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 포맷의 샘플링 레이트(헤르츠)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;U, V&gt;(Double, U, result: inout V)</a>-4xorc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">샘플이 하나의 스트림으로 혼합되는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;U, V&gt;(Float, U, result: inout V)</a>-358cn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">공통 형식 식별자 인스턴스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;T, U, V&gt;(T, U, result: inout V)</a>-3ptjl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">기본 오디오 채널 레이아웃입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudioformat/init(standardformatwithsamplerate:channellayout:">init(standardFormatWithSampleRate: Double, channelLayout: AVAudioChannelLayout)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정한 샘플링 레이트와 채널 레이아웃으로 디인터리브된 float 형식의 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudioformat/init(standardformatwithsamplerate:channels:">init?(standardFormatWithSampleRate: Double, channels: AVAudioChannelCount)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">지정한 샘플링 레이트와 채널 수로 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudioformat/init(commonformat:samplerate:channels:interleaved:">init?(commonFormat: AVAudioCommonFormat, sampleRate: Double, channels: AVAudioChannelCount, interleaved: Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[init?(settings: [String : Any])](avaudioformat/init(settings:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정된 설정 딕셔너리를 사용해 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudioformat/init(streamdescription:">init?(streamDescription: UnsafePointer&lt;AudioStreamBasicDescription&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">스트림 설명에서 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudioformat/init(streamdescription:channellayout:">init?(streamDescription: UnsafePointer&lt;AudioStreamBasicDescription&gt;, channelLayout: AVAudioChannelLayout?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">스트림 설명과 채널 레이아웃을 사용해 오디오 포맷 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudioformat/init(cmaudioformatdescription:">init(cmAudioFormatDescription: CMAudioFormatDescription)</a>-8rdfj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Returns the single-precision element-wise product of the sum of two vectors and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func multiply&lt;S, T, U&gt;(addition: (a: S, b: T), U) -&gt; [Float]](vdsp/multiply(addition:_:)-7t59.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Returns the single-precision element-wise product of a vector and the sum of two vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/multiply(_:by:count:useconjugate:result:">View on Apple Developer</a>-4idx8)*</span>
